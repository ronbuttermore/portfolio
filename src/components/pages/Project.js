import React from 'react';
import screenshot from '../images/screenshot-main-page.png'

export default function Project(props) {
  const projectStyle = {
    width: '18rem',
  };

  return (
    <div>
        {props.projects.map(project => (
            <div className="container">
                <div className="card" style={projectStyle}>
                    <img className="card-img-top" src={screenshot} alt="Card cap" />
                    <div className="card-body">
                        <h5 className="card-title">Name: {project.name}</h5>
                        <p className="card-text">Description: {project.description}</p>
                        <p className="card-text">ID: {project.id}</p>
                        <a href="#" className="btn btn-primary">
                            {project.name}
                        </a>
                    </div>
                </div>
            </div>
        ))}
    </div>
  );
};