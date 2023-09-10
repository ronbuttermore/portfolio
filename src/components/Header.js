import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <div className="main-container">
      <div className = "container">
        <div className="p-5 mb-4 bg-light">
          <h1>Header</h1>
          <ul>
            <li>Name</li>
            <li>About Me</li>
            <li>Portfolio</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </div>
        <Navigation />
      </div>
    </div>
  );
}

export default Header;
