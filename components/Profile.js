import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Container, Avatar, Grid, Typography } from '@material-ui/core';

const useStyle = makeStyles(theme =>({
  content: {
    margin: 0,
    padding: 0,
    minWidth: "100%",
    background: "white"
  },
  avatar: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(3),
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
    <Grid spacing={0} container direction="column" alignItems="center" justify="center" className={classes.content}>
      <Grid item xs={11}>
        <Typography align="center" variant="h3" style={{paddingTop: "30px", fontWeight: "700"}}>Profile</Typography>
        <Grid container direction="column" justify="center" alignItems="center"> 
          <Grid item >
            <Container className={classes.avatar}>
              <Avatar alt="Kazunobu Someya" src="/Kazunobu_Someya.jpg" className={classes.large}/>
            </Container>
          </Grid>
          <Grid item>
            <Typography variant="h4" align="center" gutterBottom="true">Kazunobu Someya</Typography>
            <Typography align="center">I am actively looking for new opportunities in web software developer. Full-stack web developer with a background in law and a passion for modern web app development. Able to quickly learn and apply new technologies to deliver optimal results as a team member. I am eager to leverage my knowledge gained thus far and continue to grow rapidly with the support of a professional development team.</Typography>
          </Grid>
        </Grid>  
      </Grid>
    </Grid>
  );
}

export default Profile;