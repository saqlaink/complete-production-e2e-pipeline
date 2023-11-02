import React from 'react';
import { Link } from 'react-router-dom';

const Copyright = () => {
  return (
    <div className="twelve columns">
      <p className="copyright pl-5 pb-2">
        <Link
          to="https://github.com/tcchawla/final-portfolio.git"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          Template by tcchawla
        </Link>
      </p>
    </div>
  );
};

export default Copyright;
