import React, { useState } from 'react';

interface UserPromptsProps {
  prompts: string[];
  onPromptSelect: (prompt: string) => void;
}

const UserPrompts = React.forwardRef<HTMLDivElement, UserPromptsProps>(
  ({ prompts, onPromptSelect }, ref) => {
    const [hoveredPrompt, setHoveredPrompt] = useState<string | null>(null);

    if (prompts.length === 0) {
      return null;
    }

    return (
      <div
        ref={ref}
        style={{
          position: 'absolute',
          bottom: 80,
          left: 10,
          padding: 10,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          borderRadius: 5,
          fontFamily: 'sans-serif',
          fontSize: '14px',
          maxHeight: '30vh',
          overflowY: 'auto',
        }}
      >
        <h3 style={{ margin: '0 0 10px', fontSize: '16px' }}>My Prompts</h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {prompts.map((prompt, index) => (
            <li
              key={`${prompt}-${index}`}
              onClick={() => onPromptSelect(prompt)}
              onMouseEnter={() => setHoveredPrompt(prompt)}
              onMouseLeave={() => setHoveredPrompt(null)}
              style={{
                cursor: 'pointer',
                padding: '2px 5px',
                borderRadius: 3,
                background: hoveredPrompt === prompt ? '#555' : 'transparent',
              }}
            >
              {prompt}
            </li>
          ))}
        </ul>
      </div>
    );
  }
);

export default UserPrompts;
