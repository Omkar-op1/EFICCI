import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Us</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactSection;