import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';
import { Avatar } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  navbar: {
    width: '100%',
    height: '5rem',
    position: '-webkit-sticky', /* Safari */
    position: 'sticky',
    top: 0,
  }, 
  navChange: {
    width: '100%',
    height: '5rem',
    position: '-webkit-sticky', /* Safari */
    position: 'sticky',
    top: 0,
    backgroundColor: 'black',
    zIndex: "9999"
  },
  nav: {
    height: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  avatar: {
    width: "50px",
    height: "50px",
    backgroundColor: "red",
    marginLeft: "10px"
  },
  ul: {
    padding: 0,
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: "60%"
  }, 
  original: {
    margin: "10px 1rem",
    width: "5rem",
    fontWeight: "600",
    backgroundColor: "transparent",
    color: "white",
    textDecoration: "none",
    '&:hover, &:active': {
      color: "#95bcf0",
      paddingBottom: "0.25rem",
      cursor: "pointer"
    }
  }
});

const Navbar = () => {
  const classes = useStyles()
  const [colorChange, setColorChange] = useState(false);
  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 140) {
        setColorChange(true);
      } else {
        setColorChange(false);
      }
    };
    window.addEventListener('scroll', changeNavbarColor);

    return () => window.addEventListener('scroll', changeNavbarColor);
  }, [colorChange]);
  
  return(
    <div className={colorChange ? classes.navChange : classes.navbar}>
      <nav className={classes.nav}>
        <Avatar className={classes.avatar}> 
          <Link className={classes.original} activeClass="active" to='main' spy={true} smooth={true} offset={-70} duration={500}>
            <HomeIcon />
          </Link>
        </Avatar>
        <ul className={classes.ul}>
          <li>
            <Link className={classes.original}activeClass="active" to='projects' spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</Link>
          </li>
          <li>
            <Link className={classes.original} activeClass="active" to='career' spy={true} smooth={true} offset={-70} duration={500}>CAREER</Link>
          </li>
          <li>
            <Link className={classes.original} activeClass="active" to='skills' spy={true} smooth={true} offset={-70} duration={500}>SKILLS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;