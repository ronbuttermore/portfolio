import React from 'react';
import Project from './Project';

let state = 2;

const projects = [
    {
      name: 'Brewery Finder',
      description: 'A web application to find and navigate to local breweries',
      id: 1,
    },
    {
      name: 'Test2',
      description: 'safesfase',
      id: 2,
    },  {
      name: 'Test3',
      description: 'hgmfgym',
      id: 3,
    }
  ];

function Navigation() {
    if (state === 2) {
        return (
        <div>
            <h1>Navigation</h1>
            <ul>
                <li>Option 1</li>
            </ul>
            <Project projects={projects} />
        </div>
        );
    } else {
        return <p>not found</p>
    }
  }
  
  export default Navigation;
  