import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import * as d3 from 'd3-force';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import PromptControls from './components/PromptControls';
import Controls from './components/Controls';
import { Line2 } from 'three/examples/jsm/lines/Line2.js';
import { LineMaterial } from 'three/examples/jsm/lines/LineMaterial.js';
import { LineGeometry } from 'three/examples/jsm/lines/LineGeometry.js';

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
  x?: number;
  y?: number;
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
  const controlsRef = useRef<HTMLDivElement>(null);
  const promptControlsRef = useRef<HTMLDivElement>(null);
  const uiBoundsRef = useRef<DOMRect[]>([]);

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
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);

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
    controls.enableZoom = false; // Disable default zoom

    // --- Custom Zoom Logic ---
    const zoomSpeed = 0.02;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();

      const direction = event.deltaY > 0 ? 1 : -1;
      const zoomAmount = 1 - direction * zoomSpeed;

      // Get mouse position in normalized device coordinates
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
      mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      vector.sub(camera.position).normalize();

      const distance = camera.position.distanceTo(controls.target);
      const newDistance = distance * zoomAmount;

      // Move camera along the vector towards the mouse
      const newPosition = camera.position
        .clone()
        .add(vector.multiplyScalar(distance - newDistance));

      camera.position.copy(newPosition);
      controls.update();
    };

    renderer.domElement.addEventListener('wheel', handleWheel, {
      passive: false,
    });
    // --- End Custom Zoom Logic ---

    const updateUiBounds = () => {
      const bounds: DOMRect[] = [];
      if (controlsRef.current) {
        bounds.push(controlsRef.current.getBoundingClientRect());
      }
      if (promptControlsRef.current) {
        bounds.push(promptControlsRef.current.getBoundingClientRect());
      }
      uiBoundsRef.current = bounds;
    };

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
    for (let i = 0; i < 300; ++i) {
      simulation.tick();
    }

    // --- Create Points for Nodes ---
    const nodePositions = new Float32Array(simulationNodes.length * 3);
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(nodePositions, 3)
    );

    simulationNodes.forEach((node, i) => {
      nodePositions[i * 3] = node.x ?? 0;
      nodePositions[i * 3 + 1] = node.y ?? 0;
      nodePositions[i * 3 + 2] = 0.1; // z-offset to appear above lines
    });

    const nodeMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 8,
      sizeAttenuation: false, // Ensures points are same size regardless of distance
    });

    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // --- Auto-zoom logic ---
    const box = new THREE.Box3();
    simulationNodes.forEach(node => {
      if (node.x !== undefined && node.y !== undefined) {
        box.expandByPoint(new THREE.Vector3(node.x, node.y, 0));
      }
    });

    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);

    const maxDim = Math.max(size.x, size.y);
    const fov = camera.fov * (Math.PI / 180);
    const cameraZ = Math.abs(maxDim / 1.5 / Math.tan(fov / 2));

    // Add padding and set a min distance
    camera.position.set(center.x, center.y, center.z + Math.max(cameraZ, 50));
    controls.target.copy(center);
    controls.update();

    // --- Create Lines ---
    const linkMaterial = new LineMaterial({
      color: 0xffffff,
      linewidth: 2, // in pixels
      transparent: true,
      opacity: 0.6,
    });
    linkMaterial.resolution.set(width, height); // Set resolution

    const linkMeshes: Line2[] = [];

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      controls.update(); // required if damping is enabled

      simulation.tick();

      // Update node positions from simulation
      const currentPositions = nodePoints.geometry.attributes.position
        .array as Float32Array;
      simulationNodes.forEach((node, i) => {
        currentPositions[i * 3] = node.x ?? 0;
        currentPositions[i * 3 + 1] = node.y ?? 0;
        // z is already 0.1
      });
      nodePoints.geometry.attributes.position.needsUpdate = true;

      const newLabels: Label[] = [];
      simulationNodes.forEach(node => {
        if (node.x && node.y) {
          const vector = new THREE.Vector3(node.x, node.y, 0);
          vector.project(camera);

          const x = (vector.x * 0.5 + 0.5) * renderer.domElement.clientWidth;
          const y = (vector.y * -0.5 + 0.5) * renderer.domElement.clientHeight;

          const isOccluded = uiBoundsRef.current.some(
            bound =>
              x > bound.left &&
              x < bound.right &&
              y > bound.top &&
              y < bound.bottom
          );

          if (!isOccluded) {
            newLabels.push({ name: node.name, x, y, type: node.type });
          }
        }
      });
      setLabels(newLabels);

      // Links need to be recreated each frame
      linkMeshes.forEach(link => {
        scene.remove(link);
        link.geometry.dispose();
      });
      linkMeshes.length = 0; // Clear the array

      simulationLinks.forEach(link => {
        const source = link.source as NodeObject;
        const target = link.target as NodeObject;
        if (source.x && source.y && target.x && target.y) {
          const geometry = new LineGeometry();
          // Keep lines at z=0
          geometry.setPositions([source.x, source.y, 0, target.x, target.y, 0]);

          const line = new Line2(geometry, linkMaterial);
          scene.add(line);
          linkMeshes.push(line);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!mountRef.current) return;
      const mount = mountRef.current;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      linkMaterial.resolution.set(mount.clientWidth, mount.clientHeight); // Update on resize
      updateUiBounds();
    };

    window.addEventListener('resize', handleResize);
    updateUiBounds(); // Initial call

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('wheel', handleWheel);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }

      // Cleanup simulation
      simulation.stop();
    };
  }, [nodes, links]);

  return (
    <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          color: 'white',
          background: 'rgba(0,0,0,0.5)',
          padding: '10px',
          borderRadius: '5px',
        }}
      >
        {isGenerating ? 'Generating...' : ''}
      </div>
      <Controls
        ref={controlsRef}
        testCases={mockTestCases}
        selectedCase={selectedCase}
        onCaseChange={setSelectedCase}
        onPromptSelect={handleGenerate}
      />
      <PromptControls
        ref={promptControlsRef}
        onGenerate={handleGenerate}
        onReset={handleReset}
        isGenerating={isGenerating}
      />
      {labels.map((label, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            left: label.x,
            top: label.y,
            color: label.type === 'Intent' ? 'cyan' : 'white',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            textShadow: '1px 1px 2px black',
          }}
        >
          {label.name}
        </div>
      ))}
    </div>
  );
};

export default App;
