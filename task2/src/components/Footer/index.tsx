import React from 'react';
import './footer.scss'

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto text-center">
      <div className="inner">
        <h6>
          Made with <span role="img" aria-label="Heart">❤</span>
          <span> by <a 
              href='https://www.linkedin.com/in/vladimir-gjorgievski-a9a0338a' 
              rel='noopener noreferrer' 
              target='_blank' 
              title='Vladimir Gjorgievski'
            >Vladimir
            </a>
          </span>
        </h6>
    </div>
  </footer>
  );
}

