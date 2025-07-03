import React from 'react';

interface SearchResult {
  id: string;
  name: string;
}

interface SearchControlsProps {
  onSearch: (query: string) => void;
  results: SearchResult[];
  onResultClick: (nodeId: string) => void;
}

const SearchControls = React.forwardRef<HTMLDivElement, SearchControlsProps>(
  ({ onSearch, results, onResultClick }, ref) => {
    return (
      <div
        ref={ref}
        style={{
          position: 'absolute',
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          padding: '8px',
          background: 'rgba(0,0,0,0.7)',
          borderRadius: 5,
          width: '300px',
          zIndex: 101,
        }}
      >
        <input
          type="text"
          placeholder="Search nodes..."
          onChange={e => onSearch(e.target.value)}
          style={{
            width: '100%',
            boxSizing: 'border-box',
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            border: '1px solid #555',
            borderRadius: 3,
            padding: '4px 8px',
            fontFamily: 'sans-serif',
            fontSize: '14px',
          }}
        />
        {results.length > 0 && (
          <div
            style={{
              marginTop: '8px',
              maxHeight: '150px',
              overflowY: 'auto',
            }}
          >
            {results.map(result => (
              <div
                key={result.id}
                onClick={() => onResultClick(result.id)}
                style={{
                  padding: '4px 8px',
                  cursor: 'pointer',
                  color: 'white',
                }}
                onMouseOver={e =>
                  (e.currentTarget.style.backgroundColor = '#555')
                }
                onMouseOut={e =>
                  (e.currentTarget.style.backgroundColor = 'transparent')
                }
              >
                {result.name}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default SearchControls;
