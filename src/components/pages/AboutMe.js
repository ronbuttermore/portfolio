import React from 'react';
import headshot from '../images/headshot.jpg'
import './AboutMe.css'

function AboutMe() {
    return (
        <div class="aboutMe row">
            <div class="col-lg-4 align-middle">
            <h2 id="heading">About Me: </h2>
            <img src={headshot} alt ="A picture of me, the creator of this web page" id="profile"></img>
            </div>
            <div class="col-lg-7 align-middle">
            <p id="blurb">My name is Ron Buttermore! I am an aspiring programmer and a lover of all things creative!</p>
            </div>
        </div>
    );
};

export default AboutMe;