import React from 'react';
import headshot from '../images/headshot.jpg'
import './AboutMe.css'

function AboutMe() {
    return (
        <div class="aboutMe row">
            <div class="col-lg-3 sidebar" align='center'>
            <h2 id="heading">About Me: </h2>
            <img src={headshot} alt ="Me, the creator of this web page" id="profile"></img>
            </div>
            <div class="col-lg-7 align-middle">
            <p id="blurb">Hello! My name is Ron Buttermore. I am an aspiring programmer and a lover of all things creative!</p>
            <p>Thanks for stopping by! There's lots of great things to come.</p>
            </div>
        </div>
    );
};

export default AboutMe;