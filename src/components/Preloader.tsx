// components/Preloader.tsx
import React from 'react';

const Preloader: React.FC = () => {
  return (
    <section className="preloader">
      <div className="spinner">
        <span className="spinner-rotate"></span>
      </div>
    </section>
  );
};

export default Preloader;
