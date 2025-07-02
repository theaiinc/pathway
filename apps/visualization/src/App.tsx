import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import * as d3 from 'd3-force';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import PromptControls from './components/PromptControls';
import Controls from './components/Controls';

const API_URL = 'http://localhost:3001';

interface Node {
  id: string;
  type: string;
  label: string;
}

interface Edge {
  source: string;
  target: string;
}

interface NodeObject extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  type: string;
}

interface LinkObject extends d3.SimulationLinkDatum<NodeObject> {
  source: string | NodeObject;
  target: string | NodeObject;
}

interface Label {
  name: string;
  x: number;
  y: number;
  type: string;
}

// Type for the raw data from the graphology export
interface GraphologyNode {
  key: string;
  attributes: {
    label: string;
    type: string;
  };
}

interface GraphologyEdge {
  source: string;
  target: string;
  attributes: object;
}

interface GraphData {
  nodes: GraphologyNode[];
  edges: GraphologyEdge[];
}

const mockTestCases = [
  {
    name: 'Sample Case 1',
    prompts: [
      { name: 'How to write a file in python?' },
      { name: 'How to read a file in python?' },
    ],
  },
  {
    name: 'Sample Case 2',
    prompts: [
      { name: 'Create a simple web server' },
      { name: 'What is a closure in javascript?' },
    ],
  },
];

const App: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [labels, setLabels] = useState<Label[]>([]);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Edge[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCase, setSelectedCase] = useState(mockTestCases[0].name);

  // Fetch initial graph
  useEffect(() => {
    fetch(`${API_URL}/graph`)
      .then(res => res.json())
      .then((data: GraphData) => {
        console.log('Fetched graph data:', data);
        if (data && data.nodes) {
          setNodes(data.nodes.map(n => ({ id: n.key, ...n.attributes })));
          setLinks(
            data.edges.map(e => ({ source: e.source, target: e.target }))
          );
        } else {
          setNodes([]);
          setLinks([]);
        }
      });
  }, []);

  const handleGenerate = async (prompt: string) => {
    setIsGenerating(true);
    const response = await fetch(`${API_URL}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data: GraphData = await response.json();
    console.log('Generated graph data:', data);
    if (data && data.nodes) {
      setNodes(data.nodes.map(n => ({ id: n.key, ...n.attributes })));
      setLinks(data.edges.map(e => ({ source: e.source, target: e.target })));
    }
    setIsGenerating(false);
  };

  const handleReset = async () => {
    setIsGenerating(true);
    await fetch(`${API_URL}/reset`, { method: 'POST' });
    setNodes([]);
    setLinks([]);
    setIsGenerating(false);
  };

  useEffect(() => {
    if (!mountRef.current || nodes.length === 0) return;

    const mount = mountRef.current;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 0;
    controls.maxDistance = Infinity;

    const simulationNodes = nodes.map(node => ({
      ...node,
      name: node.label,
    })) as NodeObject[];
    const simulationLinks = links.map(link => ({ ...link })) as LinkObject[];

    const simulation = d3
      .forceSimulation(simulationNodes)
      .force(
        'link',
        d3
          .forceLink(simulationLinks)
          .id(d => (d as NodeObject).id)
          .distance(50)
      )
      .force('charge', d3.forceManyBody().strength(-250))
      .force('center', d3.forceCenter(0, 0));

    // Run simulation for a bit to get a stable initial layout
    for (let i = 0; i < 150; ++i) {
      simulation.tick();
    }

    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const nodeGeometry = new THREE.SphereGeometry(0.5);
    const nodeMeshes = simulationNodes.map(
      () => new THREE.Mesh(nodeGeometry, nodeMaterial)
    );

    // Set initial positions before calculating camera zoom
    simulationNodes.forEach((node, i) => {
      if (node.x && node.y) {
        nodeMeshes[i].position.set(node.x, node.y, 0);
      }
    });

    nodeMeshes.forEach(mesh => scene.add(mesh));

    // --- Auto-zoom logic ---
    const box = new THREE.Box3();
    nodeMeshes.forEach(mesh => {
      box.expandByPoint(mesh.position);
    });

    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y);
    const fov = camera.fov * (Math.PI / 180);
    const cameraZ = Math.abs(maxDim / 1.5 / Math.tan(fov / 2));

    // Add padding and set a min distance
    camera.position.set(center.x, center.y, center.z + Math.max(cameraZ, 10));
    controls.target.copy(center);
    controls.update();

    const linkMaterial = new THREE.LineBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.5,
    });
    const linkMeshes: THREE.Line[] = [];

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      controls.update(); // required if damping is enabled

      simulation.tick();

      // Update node positions from simulation
      simulationNodes.forEach((node, i) => {
        if (node.x && node.y) {
          nodeMeshes[i].position.set(node.x, node.y, 0);
        }
      });

      const newLabels: Label[] = [];
      simulationNodes.forEach(node => {
        if (node.x && node.y) {
          const vector = new THREE.Vector3(node.x, node.y, 0);
          vector.project(camera);

          const x = (vector.x * 0.5 + 0.5) * renderer.domElement.clientWidth;
          const y = (vector.y * -0.5 + 0.5) * renderer.domElement.clientHeight;

          newLabels.push({ name: node.name, x, y, type: node.type });
        }
      });
      setLabels(newLabels);

      // Links need to be recreated each frame
      linkMeshes.forEach(link => {
        scene.remove(link);
        link.geometry.dispose();
      });
      linkMeshes.length = 0;

      simulationLinks.forEach(link => {
        const source = link.source as NodeObject;
        const target = link.target as NodeObject;
        if (source.x && source.y && target.x && target.y) {
          const geometry = new THREE.BufferGeometry().setFromPoints([
            new THREE.Vector3(source.x, source.y, 0),
            new THREE.Vector3(target.x, target.y, 0),
          ]);
          const line = new THREE.Line(geometry, linkMaterial);
          scene.add(line);
          linkMeshes.push(line);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (mountRef.current) {
        const newWidth = mountRef.current.clientWidth;
        const newHeight = mountRef.current.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [nodes, links]);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <Controls
        testCases={mockTestCases}
        selectedCase={selectedCase}
        onCaseChange={setSelectedCase}
        onPromptSelect={handleGenerate}
      />
      <PromptControls
        onGenerate={handleGenerate}
        onReset={handleReset}
        isGenerating={isGenerating}
      />
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      {labels.map((label, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: label.x,
            top: label.y,
            color: 'white',
            padding: '2px 5px',
            borderRadius: '3px',
            transform: 'translate(-50%, -150%)', // Adjust to float above the node
          }}
        >
          {label.name}
        </div>
      ))}
    </div>
  );
};

export default App;
