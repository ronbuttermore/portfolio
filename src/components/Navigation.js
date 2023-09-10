import React from 'react';
import Project from './Project';

let state = 2;

function Navigation() {
    if (state === 2) {
        return (
        <div>
            <h1>Navigation</h1>
            <ul>
                <li>Option 1</li>
            </ul>
            <Project />
        </div>
        );
    } else {
        return <p>not found</p>
    }
  }
  
  export default Navigation;
  