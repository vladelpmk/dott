import React from 'react';

interface ErrorProps {
  message: string
}

const Empty:React.FC = () => {
  return (
    <div className='text-center'>
      <span>We found nothing <span role="img" aria-label="eyes">👀</span></span>
    </div>
  );
}

export default Empty;