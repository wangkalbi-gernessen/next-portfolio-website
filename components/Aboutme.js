import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Profile from './Profile';
import Skills from './Skills';

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: 0,
    minWidth: "100%",
    minHeight: "130vh",
    background: "white"
  },
  title: {
    fontWeight: "750",
    paddingTop: "45px",
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
    <Container className={classes.content} id="aboutme">
      <Typography align="center" variant="h3" className={classes.title}>About Me</Typography>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Profile/>  
        </Grid>
        <Grid item xs={12} sm={6}>
          <Skills/>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Aboutme;