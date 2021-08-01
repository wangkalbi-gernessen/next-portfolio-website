import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Avatar, Grid, Typography } from '@material-ui/core';

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
    <Grid spacing={0} direction="column" alignItems="center" justify="center" className={classes.content}>
      <Grid item xs={11} >
        <Typography align="center" variant="h4">Profile</Typography>
        <Grid container direction="column" justify="center" alignItems="center"> 
          <Grid item >
            <Container className={classes.avatar}>
              <Avatar alt="Kazunobu Someya" src="/Kazunobu_Someya.jpg" className={classes.large}/>
            </Container>
          </Grid>
          <Grid item>
            <Typography>I'm a front-end developer.</Typography>
          </Grid>
        </Grid>  
      </Grid>
    </Grid>
  );
}

export default Profile;