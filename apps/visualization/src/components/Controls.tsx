import React, { useState } from 'react';

interface Prompt {
  name: string;
}

interface TestCase {
  name: string;
  prompts: Prompt[];
}

interface ControlsProps {
  testCases: TestCase[];
  selectedCase: string;
  onCaseChange: (caseName: string) => void;
  onPromptSelect: (promptName: string) => void;
  onShowOverview: () => void;
}

const Controls = React.forwardRef<HTMLDivElement, ControlsProps>(
  (
    { testCases, selectedCase, onCaseChange, onPromptSelect, onShowOverview },
    ref
  ) => {
    const selectedTestCase = testCases.find(tc => tc.name === selectedCase);
    const [hoveredPrompt, setHoveredPrompt] = useState<string | null>(null);

    return (
      <div
        ref={ref}
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          padding: 10,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          borderRadius: 5,
          fontFamily: 'sans-serif',
          fontSize: '14px',
        }}
      >
        <div style={{ marginBottom: 10 }}>
          <button onClick={onShowOverview}>Show Overview</button>
        </div>
        <div>
          <strong>Test Case:</strong>
          <select
            value={selectedCase}
            onChange={e => onCaseChange(e.target.value)}
            style={{ marginLeft: 5 }}
            aria-label="Select Test Case"
          >
            {testCases.map(tc => (
              <option key={tc.name} value={tc.name}>
                {tc.name}
              </option>
            ))}
          </select>
        </div>
        {selectedTestCase && (
          <div style={{ marginTop: 10 }}>
            <strong>Prompts:</strong>
            <ul style={{ listStyle: 'none', padding: 0, margin: '5px 0 0' }}>
              {selectedTestCase.prompts.map(prompt => (
                <li
                  key={prompt.name}
                  onClick={() => onPromptSelect(prompt.name)}
                  onMouseEnter={() => setHoveredPrompt(prompt.name)}
                  onMouseLeave={() => setHoveredPrompt(null)}
                  style={{
                    cursor: 'pointer',
                    padding: '2px 5px',
                    borderRadius: 3,
                    background:
                      hoveredPrompt === prompt.name ? '#555' : 'transparent',
                  }}
                >
                  {prompt.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
);

export default Controls;
