import React from 'react';
import './Project.css';

export default function Project(props) {
  return (
    <div class="container-fluid">
      <div class="row" id="projects">
          {props.projects.map(project => (
              <div class="card bg-dark text-white col-lg-6 col-sm-12 col-md-6 p-5" id="frames">
              <img src={project.img} class="card-img" alt="Screenshot of a coding project."></img>
              <div class="card-img-overlay">
                <h5 class="card-title"><a href={project.link} class="links">{project.name}</a></h5>
                <p class="card-text">{project.description}<a href={project.git} class="links">GitHub</a></p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};