import React from "react";
// import './footer.css'
import github from '../img/github.png';
import email from '../img/email.png';
import call from '../img/call.png';
import facebook from '../img/facebook.png';
import instagram from '../img/instagram.png';

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <span>&#169;2021 Kazunobu Someya</span>
      </div>
      <div className="icons">
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
      </div>
    </div>
  );
}

export default Footer;
