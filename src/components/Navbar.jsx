import React from "react";

export default function Navbar() {
  return (
    <div>
      <button className="btn btn-primary">Submit</button>
      <nav class="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
        <a href="#" class="navbar-brand">
          My Website
        </a>
        <button
          class="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="navbar-item">
              <a href="#" class="nav-link">
                Homepage
              </a>
            </li>
            <li class="navbar-item">
              <a href="#" class="nav-link">
                Blog
              </a>
            </li>
            <li class="navbar-item">
              <a href="#" class="nav-link">
                About Me
              </a>
            </li>
            <li class="navbar-item">
              <a href="#" class="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
