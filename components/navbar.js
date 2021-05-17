import React from "react";
// import './Navbar.css'
import Link from 'next/link';
import {useState} from 'react';

const Navbar = () => {
  const [colorChange, setColorChange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 140) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  }

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link className={colorChange ? 'navbar colorChange' : 'navbar original'} href='/main' scroll='true'>HOME</Link>
          </li>
          <li>
            <Link className={colorChange ? 'navbar colorChange' : 'navbar original'}  href='/projects' scroll='true'>PROJECTS</Link>
          </li>
          <li>
            <Link className={colorChange ? 'navbar colorChange' : 'navbar original'}  href='/career' scroll='true'>CAREER</Link>
          </li>
          <li>
            <Link className={colorChange ? 'navbar colorChange' : 'navbar original'}  href='/skills' scroll='true'>SKILLS</Link>
          </li>
        </ul>
      </nav>
    </div>   
  );
}

export default Navbar;