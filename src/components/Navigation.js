import React, { useState } from 'react';
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
    },
    {
        name: 'Test3',
        description: 'werwrewrew',
        id: 4,
      },
      {
        name: 'Test4',
        description: 'hmngdmghdbfg',
        id: 5,
      },  {
        name: 'Test5',
        description: 'xfvedfe',
        id: 6,
      }
  ];

function Navigation() {
    const [currentPage, setCurrentPage] = useState(
        'Projects'
    );

    if (currentPage === 'Projects') {
        return (
        <div>
            <Project projects={projects} />
        </div>
        );
    } else {
        return <p>not found</p>
    }
  }
  
  export default Navigation;
  