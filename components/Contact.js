import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Container, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: 0,
    minWidth: "100%",
    background: "white"
  }
});

const Contact = () => {
  const classes = useStyle();
  return(
    <Container className={classes.content} id="contact">
      <Typography>Contact</Typography>
      <Grid container justify="center" alignItems="center" direction="row" className={classes.icons}>
        <IconButton href="https://github.com/wangkalbi-gernessen" target="_blank">
          <GitHubIcon className={classes.images} />
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
    </Container>
  );
}

export default Contact;