import React from 'react';
import screenshot from '../images/screenshot-main-page.png';
import './Project.css';

export default function Project(props) {
  return (
    <div class="row">
        {props.projects.map(project => (
            <div class="card bg-dark text-white col-lg-4 col-sm-12 col-md-6">
            <img src={screenshot} class="card-img" alt="Screenshot of a project with a descriptive caption overlay." />
            <div class="card-img-overlay">
              <h5 class="card-title">{project.name}</h5>
              <p class="card-text">{project.description}</p>
              <p class="card-text">{project.id}</p>
            </div>
          </div>
        ))}
    </div>
  );
};