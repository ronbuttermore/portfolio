import React from 'react';
import './Project.css';

export default function Project(props) {
  return (
    <div class="row projects">
        {props.projects.map(project => (
            <div class="card bg-dark text-white col-lg-6 col-sm-12 col-md-6 p-5" id="frames">
            <img src={project.img} class="card-img" alt="Screenshot of a project with a descriptive caption overlay." />
            <div class="card-img-overlay">
              <h5 class="card-title">{project.name}</h5>
              <p class="card-text">{project.description}</p>
            </div>
          </div>
        ))}
    </div>
  );
};