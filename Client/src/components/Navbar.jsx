import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  
  const handleToggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div>
      <nav id="navbar" className="navbar navbar-dark navbar-expand-lg ">
        <a href="/" className="navbar-brand"><img src="/images/X-icon.jpg" /></a>
        
        <div className="d-lg-none d-block" style={{ marginRight: '15px' }}>
          <button
            onClick={handleToggle}
            className="navbar-toggler"
            type="button"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {isOpen &&
            <div 
              className="dropdown-menu show" 
              style={{ 
                right: '15px', 
                left: 'auto', 
                backgroundColor: 'gray', 
                color: 'black'
              }}
            >
              <a href="/Search" className="dropdown-item" style={{ color: 'blue' }}>Search</a>
              <a href="/Random" className="dropdown-item" style={{ color: 'blue' }}>Random</a>
            </div>
          }
        </div>

        <div className={`collapse navbar-collapse ${!isOpen ? 'show' : ''}`} id="navbarCollapse">
          <ul className="navbar-nav ml-auto navbar-white">
            <li className="navbar-item d-none d-lg-block">
              <a href="/Search" className="nav-link">Search</a>
            </li>
            <li className="navbar-item d-none d-lg-block">
              <a href="/Random" className="nav-link">Random</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
