import React from 'react';

interface ErrorProps {
  message: string
}

const Initial:React.FC = () => {
  return (
    <div className='text-center'>
      <span>Go on, type something <span role="img" aria-label="piano">🎹</span></span>
    </div>
  );
}

export default Initial;