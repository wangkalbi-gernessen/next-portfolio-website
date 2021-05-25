import { makeStyles } from '@material-ui/styles';
import { IconButton, Typography, Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  mainContent: {
    width: "100%",
    height: "100vh"
  },
  position: {
    fontFamily: "Helvetice Neue Droid Serif  Helvetica Arial sans-serif",
    fontWeight: 'bolder',
    fontSize: "40px",
    fontStyle: "italic",
  },
  name: {
    textTransform: "uppercase",
    fontSize: "70px",
    fontWeight: "700",
    marginBottom: "25px",
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
    <Grid container justify="center" alignItems="center" direction="column" className={classes.mainContent} id="main">
      <Grid item>
        <Typography className={classes.position} align="center">Web Software Developer</Typography>
      </Grid>
      <Grid item>
        <Typography className={classes.name} align="center">Kazunobu Someya</Typography>
      </Grid>
      <Grid container justify="center" alignItems="center" direction="row" className={classes.contactIcon}>
        <IconButton href="https://github.com/wangkalbi-gernessen" target="_blank">
          <GitHubIcon className={classes.images} fontSize="large" />
        </IconButton>
        <IconButton href="https://www.linkedin.com/in/kazunobu-someya-6b44901b6/" target="_blank">
          <LinkedInIcon className={classes.images} />
        </IconButton>
        <IconButton href={`mailto: guizhou08chishui@gmail.com`} target="_blank" >
          <EmailIcon className={classes.images} />
        </IconButton>
        <IconButton href={`tel: 778-689-7760`} target="_blank" >
          <CallIcon className={classes.images} />
        </IconButton>
        <IconButton href="https://www.facebook.com/kazunobu.someya" target="_blank" >
          <FacebookIcon className={classes.images} />
        </IconButton>
        <IconButton href="https://www.instagram.com/kazukeks/" target="_blank">
          <InstagramIcon className={classes.images} />
        </IconButton>
      </Grid>
    </Grid>   
  );
}

export default Main;