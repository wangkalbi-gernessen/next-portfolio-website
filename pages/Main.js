import React from "react";
// import './home.css';
import github from '../img/github.png';
import email from '../img/email.png';
import call from '../img/call.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const Main = () => {
  return (
    <div className="main-content" id="main">
      <div className="introduction">
        <h1 className="position">Web Software Developer</h1>
        <h1 className="name">Kazunobu Someya</h1>
        <p className="contactIcon">
          <a href="https://github.com/wangkalbi-gernessen" target="_blank">
            <img src={github} />
          </a>
          <a href="mailto: guizhou08chishui@gmail.com" target="_blank">
            <img src={email}/>
          </a>
          <a href="tel: 778-689-7760" target="_blank">
            <img src={call}/>
          </a>
          <a href="https://www.facebook.com/kazunobu.someya" target="_blank">
            <img src={facebook}/>
          </a>
          <a href="https://www.instagram.com/kazukeks/" target="_blank">
            <img src={instagram}/>
          </a>
        </p>
      </div>
    </div>   
  );
}

export default Main;