// components/Navbar.tsx
import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
      <div className="container">
        <div className="navbar-header">
          <button className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
            <span className="icon icon-bar"></span>
          </button>
          <Link href="/">
            <a className="navbar-brand">Soft Landing</a>
          </Link>
        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav">
            <li>
              <a href="#home" className="smoothScroll">
                Home
              </a>
            </li>
            <li>
              <a href="#feature" className="smoothScroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="smoothScroll">
                About us
              </a>
            </li>
            <li>
              <a href="#pricing" className="smoothScroll">
                Pricing
              </a>
            </li>
            <li>
              <a href="#contact" className="smoothScroll">
                Contact
              </a>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                Say hello - <span>info@soft.co</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
