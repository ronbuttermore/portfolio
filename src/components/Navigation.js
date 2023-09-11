import React, { useState } from 'react';
import Header from './Header';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import breweryfinder from './images/brewery-finder.png';
import passwordgenerator from './images/password-generator.PNG';
import queersource from './images/queer-source.PNG';
import socialnetworkapi from './images/social-network-api.PNG';
import techblog from './images/tech-blog.PNG';
import weatherdashboard from './images/weather-dashboard.PNG';

const projects = [
    {
      name: 'Brewery Finder',
      description: 'A web application to find and navigate to local breweries',
      id: 1,
      img: breweryfinder
    },
    {
      name: 'Weather Dashboard',
      description: 'A web application to find up-to-date weather information',
      id: 2,
      img: weatherdashboard
    },  {
      name: 'Tech Blog',
      description: 'A simple blog website allowing users to post and comment',
      id: 3,
      img: techblog
    },
    {
        name: 'Social Network API',
        description: 'A database application to modify user data',
        id: 4,
        img: socialnetworkapi
      },
      {
        name: 'Queer Source Resource Database',
        description: 'Counseling and therapy support for the LGBTQ+ community ',
        id: 5,
        img: queersource
      },  {
        name: 'Password Generator',
        description: 'A simple javascript password generator',
        id: 6,
        img: passwordgenerator
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
  