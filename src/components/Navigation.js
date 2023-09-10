import React from 'react';
import Project from './Project';

let state = 2;

const projectInfo = {
    name: 'Brewery Finder',
    description: 'A web application to find and navigate to local breweries',
    id: 1,
  };

function Navigation() {
    if (state === 2) {
        return (
        <div>
            <h1>Navigation</h1>
            <ul>
                <li>Option 1</li>
            </ul>
            <Project name={projectInfo.name} description={projectInfo.description} id={projectInfo.id} />
        </div>
        );
    } else {
        return <p>not found</p>
    }
  }
  
  export default Navigation;
  