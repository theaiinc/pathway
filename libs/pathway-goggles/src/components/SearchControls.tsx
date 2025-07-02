import React from 'react';

interface SearchControlsProps {
  onSearch: (query: string) => void;
}

const SearchControls = React.forwardRef<HTMLDivElement, SearchControlsProps>(
  ({ onSearch }, ref) => {
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
        }}
      >
        <input
          type="text"
          placeholder="Search nodes..."
          onChange={e => onSearch(e.target.value)}
          style={{
            background: 'rgba(255,255,255,0.1)',
            color: 'white',
            border: '1px solid #555',
            borderRadius: 3,
            padding: '4px 8px',
            fontFamily: 'sans-serif',
            fontSize: '14px',
          }}
        />
      </div>
    );
  }
);

export default SearchControls;
