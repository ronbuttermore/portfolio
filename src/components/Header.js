import React from 'react';
import Navigation from './Navigation';

function Header() {
  return (
    <div className="main-container">
      <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <a  id="name" class="navbar-brand name" href="#">Ron Buttermore</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="links">
          <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link links" href="#">About Me</a>
            </li>
            <li class="nav-item">
              <a class="nav-link links" href="#">Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link links" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link links" href="#">Resume</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
      <Navigation />
    </div>
  );
}

export default Header;
