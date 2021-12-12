import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';
import { Container, AppBar, Toolbar, Tabs, Tab } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    minWidth: '100vw',
    position: '-webkit-sticky', /* Safari */
    position: 'sticky',
    background: "transparent",
    margin: 0,
    padding: 0,
    top: 0,
    flexGrow: 1,
    backgroundColor: "black",
    opacity: "0.8"
  }, 
  navChange: {
    minWidth: '100vw',
    position: '-webkit-sticky', /* Safari */
    position: 'sticky',
    backgroundColor: 'black',
    zIndex: "9999",
    margin: 0,
    padding: 0,
    top: 0,
    flexGrow: 1
  },
  original: {
    margin: "10px 1rem",
    width: "5rem",
    fontWeight: "700",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    textDecoration: "none",
    '&:hover, &:active': {
      color: "#95bcf0",
      paddingBottom: "0.25rem",
      cursor: "pointer"
    }
  }, 
  tabLabel: {
    fontSize: "15px"
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
    <Container className={colorChange ? classes.navChange : classes.navbar}>
      <AppBar position="static" style={{background: "transparent", boxShadow: "none"}}>
        <Toolbar>
          <Tabs variant="scrollable" scrollButtons="on" textColor="secondary">
            <Tab component={Link} to="main" className={classes.original} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label={<span className={classes.tabLabel}>HOME</span>}/>
            <Tab component={Link} to="aboutme" className={classes.original}activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label={<span className={classes.tabLabel}>ABOUT ME</span>} />
            <Tab component={Link} to="projects" className={classes.original}activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label={<span className={classes.tabLabel}>PROJECTS</span>} />
            <Tab component={Link} to="contact" className={classes.original}activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label={<span className={classes.tabLabel}>CONTACT</span>} />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Navbar;