import React from 'react';

const ProjectsSection: React.FC = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Our Projects</h2>
      <div className="project-list">
        <div className="project-card">
          <h3>Education for All</h3>
          <p>Providing free education to underprivileged children.</p>
        </div>
        <div className="project-card">
          <h3>Clean Water Initiative</h3>
          <p>Building wells in rural areas.</p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;