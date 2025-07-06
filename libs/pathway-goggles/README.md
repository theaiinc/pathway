# @theaiinc/pathway-goggles

A powerful 3D visualization component for exploring and interacting with AI agent workflow graphs. Built with React, Three.js, and D3 force simulation, this library provides an immersive way to visualize the "mind map" of AI reasoning processes, making complex workflow structures transparent and navigable.

## 🎯 Overview

Pathway Goggles transforms abstract workflow graphs into interactive 3D visualizations where:

- **Nodes** represent intentions, steps, and decisions in AI workflows
- **Edges** show the flow and relationships between workflow components
- **3D Space** allows for intuitive exploration of complex knowledge structures
- **Real-time Interaction** provides immediate feedback and workflow selection

## 🌟 Key Features

### 🎨 **3D Visualization**

- **Three.js Rendering**: High-performance 3D graphics with WebGL
- **Force-Directed Layout**: D3 force simulation for natural node positioning
- **Interactive Camera**: Orbit controls for smooth navigation
- **Dynamic Lighting**: Realistic lighting and shadows for depth perception

### 🔍 **Smart Interaction**

- **Hover Effects**: Highlight workflows and show detailed information
- **Click Selection**: Select and focus on specific workflows
- **Search Functionality**: Find nodes by text search
- **Workflow Isolation**: Focus on specific workflow paths

### 📊 **Information Display**

- **Statistics Panel**: Real-time metrics about the knowledge graph
- **Workflow Details**: Step-by-step breakdown of selected workflows
- **User Prompts**: History of user interactions and queries
- **Search Results**: Filtered view of matching nodes

### 🎮 **Controls & Navigation**

- **Camera Controls**: Zoom, pan, and rotate around the 3D space
- **UI Overlays**: Non-intrusive control panels
- **Keyboard Shortcuts**: Quick access to common actions
- **Responsive Design**: Adapts to different screen sizes

## 🚀 Quick Start

### Installation

```bash
npm install @theaiinc/pathway-goggles
```

### Basic Usage

```tsx
import React from 'react';
import { PathwayGoggles } from '@theaiinc/pathway-goggles';

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <PathwayGoggles
        apiUrl="http://localhost:3000/api"
        onWorkflowSelect={workflowId => {
          console.log('Selected workflow:', workflowId);
        }}
      />
    </div>
  );
}
```

### Advanced Configuration

```tsx
import React from 'react';
import { PathwayGoggles } from '@theaiinc/pathway-goggles';

function App() {
  const config = {
    apiUrl: 'http://localhost:3000/api',
    theme: {
      backgroundColor: '#1a1a1a',
      nodeColors: {
        Intent: '#ff6b6b',
        Step: '#4ecdc4',
        Decision: '#45b7d1',
      },
      edgeColor: '#ffffff',
    },
    camera: {
      initialPosition: [0, 0, 100],
      fov: 75,
      near: 0.1,
      far: 1000,
    },
    simulation: {
      nodeCharge: -30,
      linkDistance: 50,
      alpha: 0.3,
    },
  };

  return (
    <PathwayGoggles
      {...config}
      onNodeHover={nodeId => console.log('Hovered:', nodeId)}
      onWorkflowSelect={workflowId => console.log('Selected:', workflowId)}
      onGenerateWorkflow={prompt => console.log('Generating:', prompt)}
    />
  );
}
```

## 🏗️ Architecture

### Core Components

#### **Main App Component** (`App.tsx`)

- Orchestrates the entire 3D visualization
- Manages state for nodes, edges, and interactions
- Handles API communication with the backend
- Coordinates between Three.js scene and React UI

#### **Three.js Scene Management**

- **Scene Setup**: Creates and configures the 3D environment
- **Camera Controls**: Implements orbit controls for navigation
- **Rendering Loop**: Handles continuous rendering and animations
- **Event Handling**: Processes mouse and keyboard interactions

#### **D3 Force Simulation**

- **Node Positioning**: Uses force-directed layout for natural positioning
- **Physics Simulation**: Implements attraction and repulsion forces
- **Real-time Updates**: Continuously updates node positions
- **Performance Optimization**: Efficient simulation with large graphs

#### **UI Components**

- **PromptControls**: Interface for generating new workflows
- **SearchControls**: Search functionality for finding nodes
- **Statistics**: Real-time metrics and information display
- **WorkflowDisplay**: Detailed view of selected workflows
- **UserPrompts**: History of user interactions

## 📊 Data Models

### Node Structure

```typescript
interface Node {
  id: string;
  type: 'Intent' | 'Step' | 'Decision';
  label: string;
  x?: number;
  y?: number;
  z?: number;
}

interface NodeObject extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  type: string;
  x?: number;
  y?: number;
  z?: number;
}
```

### Edge Structure

```typescript
interface Edge {
  source: string;
  target: string;
  type?: string;
}

interface LinkObject extends d3.SimulationLinkDatum<NodeObject> {
  source: string | NodeObject;
  target: string | NodeObject;
  type?: string;
}
```

### Graph Data

```typescript
interface GraphData {
  nodes: GraphologyNode[];
  edges: GraphologyEdge[];
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
```

## 🎨 Styling & Theming

### Custom Themes

```typescript
const customTheme = {
  backgroundColor: '#0a0a0a',
  nodeColors: {
    Intent: '#ff4757',
    Step: '#2ed573',
    Decision: '#3742fa',
    SubTask: '#ffa502',
  },
  edgeColor: '#ffffff',
  edgeOpacity: 0.6,
  nodeSize: {
    Intent: 15,
    Step: 10,
    Decision: 12,
  },
  fontFamily: 'Inter, sans-serif',
  fontSize: 12,
};
```

### CSS Customization

```css
.pathway-goggles {
  --bg-color: #1a1a1a;
  --text-color: #ffffff;
  --accent-color: #4ecdc4;
  --border-color: #333333;
}

.pathway-goggles .controls {
  background: rgba(26, 26, 26, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid var(--border-color);
}
```

## 🔧 API Reference

### Props

#### **Required Props**

- `apiUrl: string` - Backend API endpoint for data fetching

#### **Optional Props**

- `theme?: ThemeConfig` - Custom theme configuration
- `camera?: CameraConfig` - Camera settings
- `simulation?: SimulationConfig` - D3 force simulation settings
- `onNodeHover?: (nodeId: string) => void` - Node hover callback
- `onNodeClick?: (nodeId: string) => void` - Node click callback
- `onWorkflowSelect?: (workflowId: string) => void` - Workflow selection callback
- `onGenerateWorkflow?: (prompt: string) => void` - Workflow generation callback

### Methods

#### **Public Methods**

- `focusOnNode(nodeId: string)` - Focus camera on specific node
- `highlightWorkflow(workflowId: string)` - Highlight specific workflow
- `resetView()` - Reset camera to default position
- `exportScreenshot()` - Export current view as image
- `getSelectedWorkflow()` - Get currently selected workflow

## 🎮 Interaction Guide

### **Mouse Controls**

- **Left Click + Drag**: Rotate camera around the scene
- **Right Click + Drag**: Pan camera
- **Scroll Wheel**: Zoom in/out
- **Hover over Nodes**: Highlight and show tooltips
- **Click on Nodes**: Select and focus on workflows

### **Keyboard Shortcuts**

- `R` - Reset camera view
- `F` - Focus on selected workflow
- `G` - Generate new workflow
- `S` - Toggle search panel
- `H` - Toggle help overlay
- `Escape` - Clear selection

### **Touch Controls**

- **Single Touch + Drag**: Rotate camera
- **Two Finger Pinch**: Zoom in/out
- **Two Finger Drag**: Pan camera
- **Tap**: Select nodes

## 🔌 Integration

### Backend API Requirements

The component expects a backend API with the following endpoints:

```typescript
// GET /api/graph
// Returns the complete workflow graph
interface GraphResponse {
  nodes: GraphologyNode[];
  edges: GraphologyEdge[];
}

// POST /api/workflows/generate
// Generates a new workflow from a prompt
interface GenerateRequest {
  prompt: string;
}

interface GenerateResponse {
  workflowId: string;
  success: boolean;
}

// DELETE /api/workflows/:id
// Deletes a specific workflow
interface DeleteResponse {
  success: boolean;
}
```

### React Integration

```tsx
import React, { useState, useCallback } from 'react';
import { PathwayGoggles } from '@theaiinc/pathway-goggles';

function WorkflowVisualizer() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleWorkflowSelect = useCallback((workflowId: string) => {
    setSelectedWorkflow(workflowId);
    console.log('Selected workflow:', workflowId);
  }, []);

  const handleGenerateWorkflow = useCallback(async (prompt: string) => {
    setIsGenerating(true);
    try {
      const response = await fetch('/api/workflows/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const result = await response.json();
      if (result.success) {
        console.log('Generated workflow:', result.workflowId);
      }
    } catch (error) {
      console.error('Failed to generate workflow:', error);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <PathwayGoggles
        apiUrl="/api"
        onWorkflowSelect={handleWorkflowSelect}
        onGenerateWorkflow={handleGenerateWorkflow}
      />
      {isGenerating && (
        <div className="loading-overlay">Generating workflow...</div>
      )}
    </div>
  );
}
```

## 🎨 Customization Examples

### Custom Node Rendering

```tsx
import React from 'react';
import { PathwayGoggles } from '@theaiinc/pathway-goggles';

const customNodeRenderer = (node: NodeObject) => {
  const geometry = new THREE.SphereGeometry(node.size || 5);
  const material = new THREE.MeshPhongMaterial({
    color: getNodeColor(node.type),
    transparent: true,
    opacity: 0.8,
  });
  return new THREE.Mesh(geometry, material);
};

function CustomVisualizer() {
  return (
    <PathwayGoggles
      apiUrl="/api"
      nodeRenderer={customNodeRenderer}
      theme={{
        nodeColors: {
          Intent: '#ff6b6b',
          Step: '#4ecdc4',
          Decision: '#45b7d1',
        },
      }}
    />
  );
}
```

### Custom Controls

```tsx
import React from 'react';
import { PathwayGoggles } from '@theaiinc/pathway-goggles';

function CustomControls() {
  const gogglesRef = useRef(null);

  const handleCustomAction = () => {
    if (gogglesRef.current) {
      gogglesRef.current.focusOnNode('specific-node-id');
    }
  };

  return (
    <div>
      <button onClick={handleCustomAction}>Focus on Specific Node</button>
      <PathwayGoggles ref={gogglesRef} apiUrl="/api" />
    </div>
  );
}
```

## 🔧 Development

### Building

```bash
# Development build
npm run dev

# Production build
npm run build

# Build web component
npm run build:wc
```

### Testing

```bash
npm run test
npm run test:watch
```

### Linting

```bash
npm run lint
npm run lint:fix
```

## 📈 Performance Optimization

### **Rendering Optimizations**

- **Level of Detail**: Reduce node detail for distant objects
- **Frustum Culling**: Only render visible nodes
- **Instanced Rendering**: Batch similar geometry
- **Texture Atlasing**: Combine multiple textures

### **Simulation Optimizations**

- **Barnes-Hut Algorithm**: Efficient force calculation
- **Adaptive Timestep**: Adjust simulation speed based on performance
- **Spatial Partitioning**: Optimize collision detection
- **Web Workers**: Offload computation to background threads

### **Memory Management**

- **Object Pooling**: Reuse Three.js objects
- **Texture Compression**: Reduce memory usage
- **Garbage Collection**: Minimize object creation
- **Lazy Loading**: Load data on demand

## 🐛 Troubleshooting

### Common Issues

#### **Performance Problems**

- Reduce the number of nodes displayed
- Lower the simulation complexity
- Enable level-of-detail rendering
- Use WebGL2 if available

#### **Rendering Issues**

- Check WebGL support in the browser
- Verify Three.js version compatibility
- Ensure proper lighting setup
- Check for z-fighting issues

#### **Interaction Problems**

- Verify event listener setup
- Check camera controls configuration
- Ensure proper raycasting setup
- Validate node selection logic

### Debug Mode

```tsx
<PathwayGoggles
  apiUrl="/api"
  debug={true}
  onError={error => console.error('Goggles error:', error)}
/>
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

```bash
git clone https://github.com/theaiinc/pathway-goggles.git
cd pathway-goggles
npm install
npm run dev
```

## 📄 License

**The AI INC @ 2025** - All rights reserved.

This software is proprietary and confidential. While it is provided free of charge, usage is subject to subscription plans and terms of service. Redistribution, modification, or commercial use without proper licensing is prohibited.

For licensing inquiries, please contact The AI INC.

## 🔗 Related Projects

- **@theaiinc/pathway**: Core CBR system and workflow management
- **Three.js**: 3D graphics library
- **D3.js**: Data visualization and force simulation
- **React**: UI framework
- **TypeScript**: Type-safe JavaScript

## 📚 Resources

- [Three.js Documentation](https://threejs.org/docs/)
- [D3 Force Simulation](https://github.com/d3/d3-force)
- [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- [WebGL Fundamentals](https://webglfundamentals.org/)
