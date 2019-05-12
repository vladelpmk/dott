import React from 'react';

interface ErrorProps {
  message: string
}

const Loading:React.FC<ErrorProps> = ({message}) => {
  return (
    <div className='text-center'>
      <span>Something went wrong</span>
      <span>more info: {message}</span>
    </div>
  );
}

export default Loading;