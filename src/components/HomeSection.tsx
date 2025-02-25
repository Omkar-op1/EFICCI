// components/HomeSection.tsx
import React from 'react';

const HomeSection: React.FC = () => {
  return (
    <section id="home" data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-sm-12">
            <div className="home-info">
              <h3>professional landing page</h3>
              <h1>We help you manage your website successfully!</h1>
              <form action="" method="get" className="online-form">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
                <button type="submit" className="form-control">
                  Get started
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
