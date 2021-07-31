import { makeStyles } from '@material-ui/styles';
import { Container, IconButton, Typography, Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  mainContent: {
    minWidth: "100%",
    minHeight: "100vh",
    padding: 0,
    margin: 0
  },
  contactIcon: {
    marginTop: "100px",
    width: "100%"
  }, 
  images: {
    fontSize: "40px",
    color: "white",
    zIndex: "100",
    '&:hover': {
      backgroundColor: "black",
      borderRadius: "50%"
    }
  }
});

const Main = () => {
  const classes = useStyles();
  return (
    <Grid container spacing={0}direction="row" alignItems="center" justify="center" className={classes.mainContent} id="main">
      <Grid item xs={11}>
        <Typography align="center" variant="h4">Hello, I'm <span style={{color: "red"}}>Kazunobu Someya</span>.<br />I'm a full-stack web developer.</Typography>
      </Grid>   
    </Grid>
  );
}

export default Main;