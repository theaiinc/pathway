export const mockGraphData = {
  nodes: [
    { id: '1', name: 'Start' },
    { id: '2', name: 'Step 1' },
    { id: '3', name: 'Step 2' },
    { id: '4', name: 'Step 3' },
    { id: '5', name: 'End' },
  ],
  links: [
    { source: '1', target: '2' },
    { source: '2', target: '3' },
    { source: '2', target: '4' },
    { source: '3', target: '5' },
    { source: '4', target: '5' },
  ],
};
