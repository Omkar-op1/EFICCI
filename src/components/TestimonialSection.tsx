// components/AboutSection.tsx
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-3 col-md-6 col-sm-12">
            <div className="section-title">
              <h1>Professional Team for you</h1>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-thumb">
              <img
                src="/images/team-image1.jpg"
                className="img-responsive"
                alt="Andrew Orange"
              />
              <div className="team-info team-thumb-up">
                <h2>Andrew Orange</h2>
                <small>Art Director</small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-thumb">
              <div className="team-info team-thumb-down">
                <h2>Catherine Soft</h2>
                <small>Senior Manager</small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <img
                src="/images/team-image2.jpg"
                className="img-responsive"
                alt="Catherine Soft"
              />
            </div>
          </div>

          <div className="col-md-4 col-sm-4">
            <div className="team-thumb">
              <img
                src="/images/team-image3.jpg"
                className="img-responsive"
                alt="Jack Wilson"
              />
              <div className="team-info team-thumb-up">
                <h2>Jack Wilson</h2>
                <small>CEO / Founder</small>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
