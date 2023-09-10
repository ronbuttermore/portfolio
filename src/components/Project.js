import React from 'react';

const screenshot = require('./screenshot-main-page.png');

export default function Project(props) {
  const projectStyle = {
    width: '18rem',
  };

  return (
    <div className="container">
      <div className="card" style={projectStyle}>
        <img className="card-img-top" src={screenshot} alt="Card cap" /> <div className="card-body">
        <h5 className="card-title">Name: {props.name}</h5>
          <p className="card-text">Description: {props.description}</p>
          <p className="card-text">ID: {props.id}</p>
          <a href="#" className="btn btn-primary">
            {props.name}
          </a>
        </div>
      </div>
    </div>
  );
}
