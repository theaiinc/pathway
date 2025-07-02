import React from 'react';

interface StatisticsProps {
  nodeCount: number;
  edgeCount: number;
  workflowCount: number;
}

const Statistics = React.forwardRef<HTMLDivElement, StatisticsProps>(
  ({ nodeCount, edgeCount, workflowCount }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: 'absolute',
          top: 10,
          right: 10,
          padding: 10,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          borderRadius: 5,
          fontFamily: 'sans-serif',
          fontSize: '14px',
          width: '180px',
        }}
      >
        <h3 style={{ margin: '0 0 10px', fontSize: '16px' }}>Statistics</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '5px',
          }}
        >
          <span>Nodes:</span>
          <span style={{ textAlign: 'right' }}>{nodeCount}</span>
          <span>Edges:</span>
          <span style={{ textAlign: 'right' }}>{edgeCount}</span>
          <span>Workflows:</span>
          <span style={{ textAlign: 'right' }}>{workflowCount}</span>
        </div>
      </div>
    );
  }
);

export default Statistics;
