import React, { useState } from 'react';

interface PromptControlsProps {
  onGenerate: (prompt: string) => void;
  onReset: () => void;
  isGenerating: boolean;
}

const PromptControls = React.forwardRef<HTMLDivElement, PromptControlsProps>(
  ({ onGenerate, onReset, isGenerating }, ref) => {
    const [prompt, setPrompt] = useState('');

    const handleGenerateClick = () => {
      if (prompt.trim()) {
        onGenerate(prompt);
        setPrompt('');
      }
    };

    return (
      <div
        ref={ref}
        style={{
          position: 'absolute',
          bottom: 20,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          maxWidth: '800px',
          background: 'rgba(0,0,0,0.7)',
          padding: '15px',
          borderRadius: '10px',
          display: 'flex',
          gap: '10px',
        }}
      >
        <textarea
          value={prompt}
          onChange={e => setPrompt(e.target.value)}
          placeholder="Enter a prompt to generate a workflow..."
          style={{
            width: '100%',
            height: '50px',
            borderRadius: '5px',
            border: 'none',
            padding: '10px',
            fontFamily: 'sans-serif',
            fontSize: '16px',
          }}
          disabled={isGenerating}
        />
        <button
          onClick={handleGenerateClick}
          disabled={isGenerating || !prompt.trim()}
        >
          {isGenerating ? 'Generating...' : 'Generate'}
        </button>
        <button onClick={onReset} disabled={isGenerating}>
          Reset
        </button>
      </div>
    );
  }
);

export default PromptControls;
