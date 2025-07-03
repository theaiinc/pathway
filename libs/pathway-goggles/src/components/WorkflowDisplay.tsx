import React from 'react';

interface WorkflowNode {
  label: string;
}

interface WorkflowDisplayProps {
  nodes: WorkflowNode[];
}

const WorkflowDisplay: React.FC<WorkflowDisplayProps> = ({ nodes }) => {
  if (nodes.length === 0) {
    return null;
  }

  return (
    <div className="workflow-display">
      {nodes.map((node, index) => (
        <React.Fragment key={index}>
          <span className="workflow-node">{node.label}</span>
          {index < nodes.length - 1 && (
            <span className="workflow-arrow"> → </span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default WorkflowDisplay;
