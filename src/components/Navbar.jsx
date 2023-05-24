import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav id="navbar" className="navbar navbar-dark navbar-expand-lg ">
        <a href="/" className="navbar-brand"><img src="/images/twitter-icon.jpeg" />
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto navbar-white">
            <li className="navbar-item">
              <a href="/Search" className="nav-link">
                Search 
              </a>
            </li>
            <li className="navbar-item">
              <a href="/Random" className="nav-link">
                Random Tweet
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
