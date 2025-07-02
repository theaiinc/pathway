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

// --- Interfaces ---
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
  id: string;
  name: string;
  x: number;
  y: number;
  type: string;
}

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

// --- Helper Functions ---
const getWorkflowId = (nodeId: string): string | null => {
  const match = nodeId.match(/^([a-f0-9-]+)__/);
  return match ? match[1] : null;
};

// --- Main Component ---
const App: React.FC = () => {
  // --- Refs and State ---
  const mountRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<HTMLDivElement>(null);
  const promptControlsRef = useRef<HTMLDivElement>(null);
  const uiBoundsRef = useRef<DOMRect[]>([]);

  const [labels, setLabels] = useState<Label[]>([]);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Edge[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCase, setSelectedCase] = useState(mockTestCases[0].name);
  const [hoveredWorkflowId, setHoveredWorkflowId] = useState<string | null>(
    null
  );

  // Use a ref to pass the latest hovered ID to the animation loop without re-triggering the effect
  const hoveredWorkflowIdRef = useRef(hoveredWorkflowId);
  useEffect(() => {
    hoveredWorkflowIdRef.current = hoveredWorkflowId;
  }, [hoveredWorkflowId]);

  // --- API Handlers ---
  useEffect(() => {
    fetch(`${API_URL}/graph`)
      .then(res => res.json())
      .then((data: GraphData) => {
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

  // --- Main Render Effect ---
  useEffect(() => {
    if (!mountRef.current || nodes.length === 0) return;

    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x000000);
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 0;
    controls.maxDistance = Infinity;
    controls.enableZoom = false; // Disable default zoom for custom implementation

    // --- Custom Zoom ---
    const zoomSpeed = 0.02;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const zoomAmount = 1 - direction * zoomSpeed;
      const mouse = new THREE.Vector2(
        (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
        -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
      );
      const vector = new THREE.Vector3(mouse.x, mouse.y, 0.5)
        .unproject(camera)
        .sub(camera.position)
        .normalize();
      const distance = camera.position.distanceTo(controls.target);
      const newPosition = camera.position
        .clone()
        .add(vector.multiplyScalar(distance - distance * zoomAmount));
      camera.position.copy(newPosition);
      controls.update();
    };
    renderer.domElement.addEventListener('wheel', handleWheel, {
      passive: false,
    });

    // --- D3 Simulation ---
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
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(0, 0));
    simulation.tick(300);

    // --- Node Points ---
    const nodePositions = new Float32Array(simulationNodes.length * 3);
    const nodeColors = new Float32Array(simulationNodes.length * 3);
    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(nodePositions, 3)
    );
    nodeGeometry.setAttribute(
      'color',
      new THREE.BufferAttribute(nodeColors, 3)
    );
    const nodeMaterial = new THREE.PointsMaterial({
      size: 10,
      sizeAttenuation: false,
      vertexColors: true,
    });
    const nodePoints = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodePoints);

    // --- Link Lines ---
    const linkMaterial = new LineMaterial({
      color: 0xffffff,
      linewidth: 2,
      transparent: true,
      opacity: 0.6,
    });
    linkMaterial.resolution.set(width, height);
    const linkMeshes: Line2[] = [];

    // --- Hover/Highlighting Logic ---
    const raycaster = new THREE.Raycaster();
    raycaster.params.Points.threshold = 10;
    const highlightColor = new THREE.Color(0x00ffff); // Cyan
    const defaultColor = new THREE.Color(0xffffff); // White

    const handleMouseMove = (event: MouseEvent) => {
      const mouse = new THREE.Vector2(
        (event.clientX / width) * 2 - 1,
        -(event.clientY / height) * 2 + 1
      );
      raycaster.setFromCamera(mouse, camera);
      const intersections = raycaster.intersectObjects([
        nodePoints,
        ...linkMeshes,
      ]);

      if (intersections.length > 0) {
        const firstHit = intersections[0];
        let newHoverId = null;

        if (firstHit.object.type === 'Points' && firstHit.index !== undefined) {
          const hoveredNodeId = simulationNodes[firstHit.index].id;
          newHoverId = getWorkflowId(hoveredNodeId);
        } else if (firstHit.object.userData.workflowId) {
          newHoverId = firstHit.object.userData.workflowId;
        }
        setHoveredWorkflowId(newHoverId);
      } else {
        setHoveredWorkflowId(null);
      }
    };
    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    // --- UI Bounds for Occlusion ---
    const updateUiBounds = () => {
      const bounds: DOMRect[] = [];
      if (controlsRef.current)
        bounds.push(controlsRef.current.getBoundingClientRect());
      if (promptControlsRef.current)
        bounds.push(promptControlsRef.current.getBoundingClientRect());
      uiBoundsRef.current = bounds;
    };
    updateUiBounds();

    // --- Initial Camera Position ---
    const box = new THREE.Box3();
    simulationNodes.forEach(node => {
      if (node.x !== undefined && node.y !== undefined) {
        box.expandByPoint(new THREE.Vector3(node.x, node.y, 0));
      }
    });

    const center = new THREE.Vector3();
    box.getCenter(center);
    const size = new THREE.Vector3();
    box.getSize(size);
    const maxDim = Math.max(size.x, size.y);
    const fov = camera.fov * (Math.PI / 180);
    const cameraZ = Math.abs(maxDim / 1.5 / Math.tan(fov / 2));
    camera.position.set(center.x, center.y, center.z + Math.max(cameraZ, 50));
    controls.target.copy(center);
    controls.update();

    // --- Animation Loop ---
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      simulation.tick();

      // Update node positions and colors
      const positions = nodePoints.geometry.attributes.position
        .array as Float32Array;
      const colors = nodePoints.geometry.attributes.color.array as Float32Array;
      simulationNodes.forEach((node, i) => {
        positions[i * 3] = node.x ?? 0;
        positions[i * 3 + 1] = node.y ?? 0;
        positions[i * 3 + 2] = 0.1; // z-offset
        const wfId = getWorkflowId(node.id);
        const color =
          wfId && wfId === hoveredWorkflowIdRef.current
            ? highlightColor
            : defaultColor;
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      });
      nodePoints.geometry.attributes.position.needsUpdate = true;
      nodePoints.geometry.attributes.color.needsUpdate = true;

      // Update labels and check for occlusion
      const newLabels: Label[] = [];
      simulationNodes.forEach(node => {
        if (node.x && node.y) {
          const vector = new THREE.Vector3(node.x, node.y, 0).project(camera);
          const x = (vector.x * 0.5 + 0.5) * width;
          const y = (vector.y * -0.5 + 0.5) * height;
          const isOccluded = uiBoundsRef.current.some(
            bound =>
              x > bound.left &&
              x < bound.right &&
              y > bound.top &&
              y < bound.bottom
          );

          if (!isOccluded) {
            newLabels.push({
              id: node.id,
              name: node.name,
              x,
              y,
              type: node.type,
            });
          }
        }
      });
      setLabels(newLabels);

      // Links need to be recreated each frame for highlighting
      linkMeshes.forEach(link => {
        scene.remove(link);
        link.geometry.dispose();
      });
      linkMeshes.length = 0;

      simulationLinks.forEach(link => {
        const source = link.source as NodeObject;
        const target = link.target as NodeObject;
        if (source.x && source.y && target.x && target.y) {
          const geometry = new LineGeometry();
          geometry.setPositions([source.x, source.y, 0, target.x, target.y, 0]);

          const wfId = getWorkflowId(source.id);
          const isHighlighted = wfId && wfId === hoveredWorkflowIdRef.current;

          // Clone material to set unique color
          const currentMaterial = linkMaterial.clone();
          currentMaterial.color = isHighlighted ? highlightColor : defaultColor;

          const line = new Line2(geometry, currentMaterial);
          if (wfId) {
            line.userData.workflowId = wfId;
          }
          scene.add(line);
          linkMeshes.push(line);
        }
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Event Listeners and Cleanup ---
    const handleResize = () => {
      if (!mountRef.current) return;
      const mount = mountRef.current;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      linkMaterial.resolution.set(mount.clientWidth, mount.clientHeight);
      updateUiBounds();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('wheel', handleWheel);
      renderer.domElement.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
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
      {labels.map((label, index) => {
        const wfId = getWorkflowId(label.id);
        const isHovered = wfId ? wfId === hoveredWorkflowId : false;
        return (
          <div
            key={index}
            style={{
              position: 'absolute',
              left: label.x,
              top: label.y,
              color: label.type === 'Intent' ? 'cyan' : 'white',
              fontWeight: isHovered ? 'bold' : 'normal',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none',
              textShadow: '1px 1px 2px black',
              padding: '2px 5px',
            }}
          >
            {label.name}
          </div>
        );
      })}
    </div>
  );
};

export default App;
