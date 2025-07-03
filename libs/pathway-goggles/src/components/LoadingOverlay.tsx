import React from 'react';

const LoadingOverlay: React.FC = () => {
  return (
    <div className="loading-overlay">
      <div className="spinner"></div>
      <p>Generating...</p>
    </div>
  );
};

export default LoadingOverlay;
