import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Profile from './Profile';
import Skills from './Skills';

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: "20px",
    minWidth: "100vw",
    minHeight: "80vh",
    background: "white"
  },
  title: {
    fontWeight: "700",
    paddingTop: "40px",
    position: "relative",
    zIndex: 1,
    paddingBottom: "5px",
    '&::after': {
      content: "' '",
      position: "absolute",
      left: "50%",
      marginLeft: "-50px",
      bottom: 0,
      width: "100px",
      borderBottom: "3px solid magenta"
    }
  }
});

const Aboutme = () => {
  const classes = useStyle();
  return(
    <Grid container className={classes.content} id="aboutme">
      <Grid item xs={12} sm={12} md={12} xl={12} lg={12}>
        <Typography align="center" variant="h3" className={classes.title}>About Me</Typography>
        <Grid container>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
            <Profile/>  
          </Grid>
          <Grid item xs={12} sm={12} md={6} xl={6} lg={6}>
            <Skills/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Aboutme;