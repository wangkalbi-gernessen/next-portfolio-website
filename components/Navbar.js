import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';
import { Container, AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    width: '100%',
    position: '-webkit-sticky', /* Safari */
    position: 'sticky',
    margin: 0,
    padding: 0,
    top: 0,
    flexGrow: 1
  }, 
  navChange: {
    width: '100%',
    position: '-webkit-sticky', /* Safari */
    position: 'sticky',
    backgroundColor: 'black',
    zIndex: "9999",
    margin: 0,
    padding: 0,
    top: 0,
    flexGrow: 1
  },
  avatar: {
    width: "50px",
    height: "50px",
    backgroundColor: "red",
    marginLeft: "10px"
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
  const [value, setValue] = useState("0");

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

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  }
  
  return(
    <Container className={colorChange ? classes.navChange : classes.navbar}>
      <AppBar position="static" style={{background: "transparent", boxShadow: "none"}}>
        <Toolbar>
          <Tabs value={value} onChange={handleChange} indicatorColor="secondary">
            <Tab component={Link} to="main" className={classes.original} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label="HOME" value="0"/>
            <Tab component={Link} to="aboutme" className={classes.original}activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label="ABOUT ME" value="1" />
            <Tab component={Link} to="projects" className={classes.original}activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label="PROJECTS" value="2" />
            <Tab component={Link} to="contact" className={classes.original}activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label="CONTACT" value="3" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Navbar;