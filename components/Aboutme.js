import React from 'react';
import Career from './Career';
import { makeStyles } from '@material-ui/styles';
import { Grid, Container, Typography } from '@material-ui/core';
import Profile from './Profile';
import Skills from './Skills';

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: 0,
    minWidth: "100%",
    minHeight: "100vh",
    background: "white"
  }
});

const Aboutme = () => {
  const classes = useStyle();
  return(
    <Container className={classes.content} id="aboutme">
      <Typography align="center" variant="h4">About Me</Typography>
      <Grid container spacing={16}>
        <Grid item xs={14} sm={10} md={4} lg={4}>
          <Profile/>  
        </Grid>
        <Grid item xs={14} sm={10} md={4} lg={4}>
          <Skills/>
        </Grid>
      </Grid>
      <Career/>
    </Container>
  );
}

export default Aboutme;