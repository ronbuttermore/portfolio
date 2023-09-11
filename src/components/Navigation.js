import React, { useState } from 'react';
import Header from './Header';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';

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

    const [currentPage, setCurrentPage] = useState(`#AboutMe`);

    const renderPage = () => {
        if (currentPage === '#Portfolio') {
            return (
            <div>
                <Project projects={projects} />
            </div>
            );
        } else if (currentPage === '#Contact') {
            return (
                <Contact />
            );
        } else if (currentPage === '#Resume') {
            return (
                <Resume />
            );
        } else {
            return (
                <AboutMe />
                );
            };
        };
  
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Header currentPage={currentPage} handlePageChange={handlePageChange} />
          {renderPage()}
        </div>
      );

};

export default Navigation;
  