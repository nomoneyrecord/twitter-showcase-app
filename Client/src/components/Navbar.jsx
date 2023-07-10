import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <nav id="navbar" className="navbar navbar-dark navbar-expand-lg">
        <a href="/" className="navbar-brand">
          <img src="/images/twitter-icon.jpeg" />
        </a>
        <div className="ml-auto collapse navbar-collapse" id="navbarCollapse">
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`navbar-nav ${isOpen ? "show" : ""}`}>
            <ul className="navbar-nav">
              <li className="navbar-item d-none d-lg-block">
                <a href="/Search" className="nav-link">
                  Search
                </a>
              </li>
              <li className="navbar-item d-none d-lg-block">
                <a href="/Random" className="nav-link">
                  Random
                </a>
              </li>
              <li className="navbar-item d-lg-none">
                <a href="/Search" className="nav-link dropdown-link">
                  Search
                </a>
              </li>
              <li className="navbar-item d-lg-none">
                <a href="/Random" className="nav-link dropdown-link">
                  Random
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
