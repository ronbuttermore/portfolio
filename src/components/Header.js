import React from 'react';

function Header({ currentPage, handlePageChange }) {

  const handleNav = (e) => {
    var link = e.target.getAttribute("href");
    var aboutme = document.getElementById('aboutme');
    var portfolio = document.getElementById('portfolio');
    var contact = document.getElementById('contact');
    var resume = document.getElementById('resume');

    if (link === "#AboutMe") {
      aboutme.style.color = "yellow";
      if (portfolio.style.color === "yellow" || contact.style.color === "yellow" || resume.style.color === "yellow") {
        portfolio.style.color = "grey";
        contact.style.color = "grey";
        resume.style.color = "grey";
      }
      handlePageChange('#AboutMe');
    } else if (link === '#Portfolio') {
      portfolio.style.color = "yellow";
      if (aboutme.style.color === "yellow" || contact.style.color === "yellow" || resume.style.color === "yellow") {
        aboutme.style.color = "grey";
        contact.style.color = "grey";
        resume.style.color = "grey";
      }
      handlePageChange('#Portfolio');
    } else if (link === '#Contact') {
      contact.style.color = "yellow";
      if (aboutme.style.color === "yellow" || portfolio.style.color === "yellow" || resume.style.color === "yellow") {
        aboutme.style.color = "grey";
        portfolio.style.color = "grey";
        resume.style.color = "grey";
      }
      handlePageChange('#Contact');
    } else if (link === '#Resume') {
      resume.style.color = "yellow";
      if (aboutme.style.color === "yellow" || portfolio.style.color === "yellow" || contact.style.color === "yellow") {
        aboutme.style.color = "grey";
        portfolio.style.color = "grey";
        contact.style.color = "grey";
        handlePageChange('#Resume');
    }
  }
}

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark justify-content-end" id="content">
        <h1 class="navbar-brand" id="name">Ron Buttermore</h1>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="links">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link links" className={currentPage === "#AboutMe" ? 'nav-link active' : 'nav-link'} href="#AboutMe" id="aboutme" onClick={handleNav}>About Me</a>
              </li>
              <li class="nav-item">
                <a class="nav-link links" className={currentPage === "#Portfolio" ? 'nav-link active' : 'nav-link'} href="#Portfolio" id="portfolio" onClick={handleNav}>Portfolio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link links" className={currentPage === "#Contact" ? 'nav-link active' : 'nav-link'} href="#Contact" id="contact" onClick={handleNav}>Contact</a>
              </li>
              <li class="nav-item">
                <a class="nav-link links" className={currentPage === "#Resume" ? 'nav-link active' : 'nav-link'} href="#Resume" id="resume" onClick={handleNav}>Resume</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
