import React from "react";
// import './Skills.css';
import  javascript from '../img/javascript.png';
import  php from '../img/php.png';
import  java from '../img/java.png';
import  python from '../img/python.png';
import  html5 from '../img/html5.png';
import  swift from '../img/swift.png';

const Skills = () => {
  return (
    <div className="skills-content" id="skills">
      <h1>Skills</h1>
      <div className="chart">
        <label for="javascript">
          <img src={javascript} width="30" height="30" />
        </label>
        <div class="container">
          <p class="skills javascript">80%</p>
        </div>
        <p>
          <img src={php} width="30" height="30" />
        </p>
        <div class="container">
          <div class="skills php">60%</div>
        </div>
        <p>
          <img src={java} width="30" height="30" />
        </p>
        <div class="container">
          <div class="skills java">50%</div>
        </div>
        <p>
          <img src={python} width="30" height="30" />
        </p>
        <div class="container">
          <div class="skills python">50%</div>
        </div>
        <p>
          <img src={html5} width="30" height="30" />
        </p>
        <div class="container">
          <div class="skills htmlcss">90%</div>
        </div>
        <p>
          <img src={swift} width="30" height="30" />
        </p>
        <div class="container">
          <div class="skills swift">60%</div>
        </div>
      </div>
    </div>   
  );
}

export default Skills;