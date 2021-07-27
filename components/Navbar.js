import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';
import { Container, AppBar, Avatar, Toolbar, Tabs, Tab } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles({
  navbar: {
    width: '100%',
    height: '5rem',
    position: '-webkit-sticky', /* Safari */
    position: 'sticky',
    top: 0,
    margin: 0,
    padding: 0,
    flexGrow: 1
  }, 
  navChange: {
    width: '100%',
    height: '5rem',
    position: '-webkit-sticky', /* Safari */
    position: 'sticky',
    top: 0,
    backgroundColor: 'black',
    zIndex: "9999",
    margin: 0,
    padding: 0,
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
      <AppBar position="static" style={{background: "transparent"}}>
        <Toolbar>
          <Tabs indicatorColor="secondary">
            <Tab component={Link} to="main" className={classes.original} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label="HOME">
              {/* <Avatar className={classes.avatar}> 
                <Link className={classes.original} activeClass="active" to='main' spy={true} smooth={true} offset={-70} duration={500}>
                  <HomeIcon />
                </Link>
              </Avatar> */}
            </Tab>
            <Tab component={Link} to="projects" className={classes.original}activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label="PROJECTS"></Tab>
            <Tab component={Link} to="career" className={classes.original} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label="CAREER"></Tab>
            <Tab component={Link} to="skills" className={classes.original} activeClass="active" spy={true} smooth={true} offset={-70} duration={500} label="SKILLS"></Tab>
          </Tabs>          
        </Toolbar>
      </AppBar>
    </Container>
  );
}

export default Navbar;