// components/ContactSection.tsx
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" data-stellar-background-ratio="0.5">
      <div className="container">
        <div className="row">
          <div className="col-md-offset-1 col-md-10 col-sm-12">
            <form id="contact-form" role="form" action="" method="post">
              <div className="section-title">
                <h1>Say hello to us</h1>
              </div>

              <div className="col-md-4 col-sm-4">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full name"
                  name="name"
                  required
                />
              </div>
              <div className="col-md-4 col-sm-4">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email address"
                  name="email"
                  required
                />
              </div>
              <div className="col-md-4 col-sm-4">
                <input
                  type="submit"
                  className="form-control"
                  name="send message"
                  value="Send Message"
                />
              </div>
              <div className="col-md-12 col-sm-12">
                <textarea
                  className="form-control"
                  rows={8}
                  placeholder="Your message"
                  name="message"
                  required
                ></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
