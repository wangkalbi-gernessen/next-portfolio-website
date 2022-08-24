import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container, Avatar, Grid, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme =>({
  content: {
    margin: "0 auto",
    padding: 0,
    minWidth: "100%",
    minHeight: "100%",
    background: "white"
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: "0 auto",
      width: "100%"
    },
  }, 
  large: {
    width: theme.spacing(24),
    height: theme.spacing(24),
  }
}));

const Profile = () => {
  const classes = useStyle();
  return(
    <Grid spacing={0} container alignItems="flex-start" className={classes.content}>
      <Grid item xs={12}>
        <Typography align="center" variant="h4" style={{paddingTop: "20px", paddingBottom: "20px", fontWeight: "700"}}>Profile</Typography>
        <Grid container direction="column" justify="center" alignItems="center"> 
          <Grid item xs={12} >
            <Container className={classes.avatar}>
              <Avatar alt="Kazunobu Someya" src="/Kazunobu_Someya.jpg" className={classes.large}/>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h4" align="center" style={{ margin: "0.5em 0" }}>Kazunobu Someya</Typography>
            <Typography align="center">I am actively looking for new opportunities in web software developer. Full-stack web developer with a background in law and a passion for modern web app development. Able to quickly learn and apply new technologies to deliver optimal results as a team member. I am eager to leverage my knowledge gained thus far and continue to grow rapidly with the support of a professional development team.</Typography>
          </Grid>
        </Grid>  
      </Grid>
    </Grid>
  );
}

export default Profile;