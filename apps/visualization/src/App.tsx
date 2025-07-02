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

  // Refs for three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef3D = useRef<OrbitControls | null>(null);
  const nodePointsRef = useRef<THREE.Points | null>(null);
  const simulationNodesRef = useRef<NodeObject[]>([]);
  const intersectionPointRef = useRef<THREE.Vector3 | null>(null);
  const isPanningRef = useRef<boolean>(false);

  const [labels, setLabels] = useState<Label[]>([]);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [links, setLinks] = useState<Edge[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCase, setSelectedCase] = useState(mockTestCases[0].name);
  const [hoveredWorkflowId, setHoveredWorkflowId] = useState<string | null>(
    null
  );
  const [selectedWorkflowId, setSelectedWorkflowId] = useState<string | null>(
    null
  );

  // Use a ref to pass the latest hovered ID to the animation loop without re-triggering the effect
  const hoveredWorkflowIdRef = useRef(hoveredWorkflowId);
  useEffect(() => {
    hoveredWorkflowIdRef.current = hoveredWorkflowId;
  }, [hoveredWorkflowId]);

  // --- Camera Animation Effect ---
  useEffect(() => {
    if (selectedWorkflowId) {
      // Logic to animate camera to the selected workflow
    }
  }, [selectedWorkflowId]);

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
    setSelectedWorkflowId(null); // Clear previous selection
    const response = await fetch(`${API_URL}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    });
    const data = await response.json(); // { graph, highlightedNodeId }
    if (data.graph && data.graph.nodes) {
      setNodes(
        data.graph.nodes.map((n: GraphologyNode) => ({
          id: n.key,
          ...n.attributes,
        }))
      );
      setLinks(
        data.graph.edges.map((e: GraphologyEdge) => ({
          source: e.source,
          target: e.target,
        }))
      );
      if (data.highlightedNodeId) {
        setSelectedWorkflowId(getWorkflowId(data.highlightedNodeId));
      }
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
    sceneRef.current = scene;
    cameraRef.current = camera;

    // --- Controls ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.screenSpacePanning = false;
    controls.minDistance = 0;
    controls.maxDistance = Infinity;
    controls.enableZoom = false; // Disable default zoom for custom implementation

    // Prevent camera from going perfectly top-down or bottom-up
    controls.minPolarAngle = Math.PI / 4; // 45 degrees
    controls.maxPolarAngle = (3 * Math.PI) / 4; // 135 degrees
    controlsRef3D.current = controls;

    // --- Custom Zoom ---
    const zoomSpeed = 0.02;
    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      const direction = event.deltaY > 0 ? 1 : -1;
      const zoomAmount = 1 - direction * zoomSpeed;
      const camera = cameraRef.current;
      const controls = controlsRef3D.current;

      if (!camera || !controls) return;

      let targetPoint: THREE.Vector3;

      if (intersectionPointRef.current) {
        targetPoint = intersectionPointRef.current;
      } else {
        // Fallback: project mouse to a plane that contains the orbit controls target
        const plane = new THREE.Plane();
        const ray = new THREE.Ray();
        plane.setFromNormalAndCoplanarPoint(
          camera.getWorldDirection(new THREE.Vector3()),
          controls.target
        );
        const mouse = new THREE.Vector2(
          (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
          -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
        );
        ray.origin.copy(camera.position);
        ray.direction
          .set(mouse.x, mouse.y, 0.5)
          .unproject(camera)
          .sub(ray.origin)
          .normalize();

        const fallbackTarget = new THREE.Vector3();
        ray.intersectPlane(plane, fallbackTarget);
        targetPoint = fallbackTarget;
      }
      // Move camera and controls target
      const newCamPos = new THREE.Vector3().lerpVectors(
        camera.position,
        targetPoint,
        1 - zoomAmount
      );

      // Prevent zooming in too close
      if (direction > 0) {
        // Direction > 0 is zooming IN
        const newDistanceToTarget = newCamPos.distanceTo(targetPoint);
        if (newDistanceToTarget < 1) {
          return; // Abort zoom-in if it gets too close
        }
      }

      const delta = new THREE.Vector3().subVectors(newCamPos, camera.position);
      const newTarget = controls.target.clone().add(delta);

      camera.position.copy(newCamPos);
      controls.target.copy(newTarget);
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
    simulationNodesRef.current = simulationNodes;
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
    nodePointsRef.current = nodePoints;

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
      if (isPanningRef.current) return; // Don't update hover while panning

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
        intersectionPointRef.current = firstHit.point; // Store intersection point

        if (firstHit.object.type === 'Points' && firstHit.index !== undefined) {
          const hoveredNodeId = simulationNodes[firstHit.index].id;
          newHoverId = getWorkflowId(hoveredNodeId);
        } else if (firstHit.object.userData.workflowId) {
          newHoverId = firstHit.object.userData.workflowId;
        }
        setHoveredWorkflowId(newHoverId);
      } else {
        setHoveredWorkflowId(null);
        intersectionPointRef.current = null; // Clear intersection point
      }
    };
    renderer.domElement.addEventListener('mousemove', handleMouseMove);

    const handleMouseDown = () => {
      isPanningRef.current = true;
      // When clicking on a point, we want to make it the new center of rotation
      // without causing the view to "jump". To do this, we shift both the
      // camera and its target by the same amount.
      if (
        intersectionPointRef.current &&
        controlsRef3D.current &&
        cameraRef.current
      ) {
        const controls = controlsRef3D.current;
        const newTarget = intersectionPointRef.current;

        controls.target.copy(newTarget);
        controls.update();
      }
    };
    renderer.domElement.addEventListener('mousedown', handleMouseDown);

    const handleMouseUp = () => {
      isPanningRef.current = false;
    };
    renderer.domElement.addEventListener('mouseup', handleMouseUp);

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
    if (!selectedWorkflowId) {
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
    }

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

        const isHighlighted =
          (selectedWorkflowId && wfId === selectedWorkflowId) ||
          (!selectedWorkflowId &&
            wfId &&
            wfId === hoveredWorkflowIdRef.current);

        const color = isHighlighted ? highlightColor : defaultColor;
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;
      });
      nodePoints.geometry.attributes.position.needsUpdate = true;
      nodePoints.geometry.attributes.color.needsUpdate = true;

      // Update labels and check for occlusion
      const newLabels: Label[] = [];
      const frustum = new THREE.Frustum();
      const projScreenMatrix = new THREE.Matrix4();
      projScreenMatrix.multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse
      );
      frustum.setFromProjectionMatrix(projScreenMatrix);

      simulationNodes.forEach(node => {
        if (node.x && node.y) {
          const nodePosition = new THREE.Vector3(node.x, node.y, 0);

          if (!frustum.containsPoint(nodePosition)) {
            return; // Don't render label if node is outside the camera view
          }

          const vector = nodePosition.clone().project(camera);
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
          const isHighlighted =
            (selectedWorkflowId && wfId === selectedWorkflowId) ||
            (!selectedWorkflowId &&
              wfId &&
              wfId === hoveredWorkflowIdRef.current);

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
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      renderer.domElement.removeEventListener('mouseup', handleMouseUp);
      if (mountRef.current && mountRef.current.contains(renderer.domElement)) {
        mountRef.current.removeChild(renderer.domElement);
      }
      simulation.stop();
    };
  }, [nodes, links]);

  // --- Camera Animation Effect (Implementation) ---
  useEffect(() => {
    if (selectedWorkflowId) {
      const scene = sceneRef.current;
      const camera = cameraRef.current;
      const controls = controlsRef3D.current;
      const nodePoints = nodePointsRef.current;
      const simulationNodes = simulationNodesRef.current;

      if (!scene || !camera || !controls || !nodePoints || !simulationNodes)
        return;

      const selectedNodePositions: THREE.Vector3[] = [];
      simulationNodes.forEach((node, i) => {
        if (getWorkflowId(node.id) === selectedWorkflowId) {
          const positionArray = nodePoints.geometry.attributes.position.array;
          selectedNodePositions.push(
            new THREE.Vector3(
              positionArray[i * 3],
              positionArray[i * 3 + 1],
              positionArray[i * 3 + 2]
            )
          );
        }
      });

      if (selectedNodePositions.length === 0) return;

      const box = new THREE.Box3();
      selectedNodePositions.forEach(pos => {
        box.expandByPoint(pos);
      });

      const center = new THREE.Vector3();
      box.getCenter(center);
      const size = new THREE.Vector3();
      box.getSize(size);
      const maxDim = Math.max(size.x, size.y, size.z);
      const fov = camera.fov * (Math.PI / 180);
      const cameraZ = Math.abs(maxDim / 1.5 / Math.tan(fov / 2));

      // Simple animation (in a real app, use a library like GSAP)
      const startPos = camera.position.clone();
      const endPos = new THREE.Vector3(
        center.x,
        center.y,
        center.z + Math.max(cameraZ, 50)
      );
      const startTarget = controls.target.clone();
      const endTarget = center;

      let startTime: number | null = null;
      const duration = 1000; // 1 second

      const tick = (time: number) => {
        if (startTime === null) startTime = time;
        const elapsed = time - startTime;
        const alpha = Math.min(elapsed / duration, 1);

        camera.position.lerpVectors(startPos, endPos, alpha);
        controls.target.lerpVectors(startTarget, endTarget, alpha);
        controls.update();

        if (alpha < 1) {
          requestAnimationFrame(tick);
        }
      };
      requestAnimationFrame(tick);
    }
  }, [selectedWorkflowId]);

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
              fontWeight:
                (selectedWorkflowId && wfId === selectedWorkflowId) || isHovered
                  ? 'bold'
                  : 'normal',
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
