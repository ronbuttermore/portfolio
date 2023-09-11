import React from 'react';
import headshot from '../images/headshot.jpg'
import './AboutMe.css'

function AboutMe() {
    return (
        <div class="aboutMe">
            <h2>About Me: </h2>
            <img src={headshot} alt ="A picture of me, the creator of this web page" id="profile"></img>
            <p>My name is Ron Buttermore! I am an aspiring programmer and a lover of all things creative!</p>
        </div>
    );
};

export default AboutMe;