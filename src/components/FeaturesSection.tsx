// components/FeaturesSection.tsx
import React from 'react';

const FeaturesSection: React.FC = () => {
  return (
    <section id="feature" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="section-title">
              <h1>What you get</h1>
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <ul className="nav nav-tabs" role="tablist">
              <li className="active">
                <a href="#tab01" aria-controls="tab01" role="tab" data-toggle="tab">
                  Responsive
                </a>
              </li>
              <li>
                <a href="#tab02" aria-controls="tab02" role="tab" data-toggle="tab">
                  Mobile
                </a>
              </li>
              <li>
                <a href="#tab03" aria-controls="tab03" role="tab" data-toggle="tab">
                  Support
                </a>
              </li>
            </ul>

            <div className="tab-content">
              <div className="tab-pane active" id="tab01" role="tabpanel">
                <div className="tab-pane-item">
                  <h2>Minimal Design</h2>
                  <p>
                    Nam feugiat a ante sollicitudin luctus. Quisque eget placerat massa. Ut quis ligula ornare,
                    pellentesque velit eget, vestibulum est. Donec pretium tristique elit eget sodales. Pellentesque
                    posuere.
                  </p>
                </div>
                <div className="tab-pane-item">
                  <h2>Easy to use</h2>
                  <p>
                    Aliquam massa massa, consectetur non mattis fringilla, sodales ac turpis. Morbi ac felis sagittis,
                    faucibus mauris vitae, placerat mauris.
                  </p>
                </div>
              </div>

              <div className="tab-pane" id="tab02" role="tabpanel">
                <div className="tab-pane-item">
                  <h2>Compatible Browsers</h2>
                  <p>
                    Nam maximus elit a metus luctus, a faucibus magna mattis. Ut malesuada viverra iaculis. Nunc euismod
                    sit amet neque a tincidunt.
                  </p>
                </div>
                <div className="tab-pane-item">
                  <h2>User Friendly</h2>
                  <p>
                    Maecenas maximus velit lorem, quis pharetra turpis fringilla id. Vestibulum tempor facilisis
                    efficitur. Sed nec nisi sit amet nibh pellentesque elementum.
                  </p>
                </div>
                <div className="tab-pane-item">
                  <h2>HTML5 &amp; CSS3</h2>
                  <p>
                    In viverra ipsum ornare sapien rhoncus ullamcorper. Vivamus vitae risus ac mi vehicula sagittis.
                    Nulla dictum magna sit amet pharetra aliquam.
                  </p>
                </div>
              </div>

              <div className="tab-pane" id="tab03" role="tabpanel">
                <div className="tab-pane-item">
                  <h2>Quick Support</h2>
                  <p>
                    Mauris rutrum est at fringilla pulvinar. Nam ligula urna, lobortis non scelerisque vel, molestie eu
                    massa. Nullam mattis elit at tortor accumsan.
                  </p>
                </div>
                <div className="tab-pane-item">
                  <h2>Managed Stuffs</h2>
                  <p>
                    Quisque ullamcorper sem quis sapien cursus efficitur. Sed id sodales ipsum. Morbi eleifend tempus
                    erat sit amet vehicula. Nulla at posuere tellus, non mattis erat. Nulla id massa gravida.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 col-sm-6">
            <div className="feature-image">
              <img
                src="/images/feature-mockup.png"
                className="img-responsive"
                alt="Thin Laptop"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
