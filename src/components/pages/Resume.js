import React from "react";
import './Resume.css';

function Resume() {
    return (
        <div class="resumePage">
            <a href='#' id ="resumelink">Here's a link to my resume!</a>
            <h3 class="listtitle">Front-end Proficiencies: </h3>
            <ul class="tech">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3 class="listtitle">Back-end Proficiencies: </h3>
            <ul class="tech">
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
        </div>
    )
}

export default Resume;