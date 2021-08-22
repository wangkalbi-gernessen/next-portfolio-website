import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Container, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: 0,
    minWidth: "100%",
    minHeight: "35vh",
    background: "white"
  }, 
  title: {
    fontWeight: 700,
    paddingTop: "40px",
    paddingBottom: "30px",
    textDecoration: "underline"
  },
  images: {
    fontSize: "45px"
  }
});

const Contact = () => {
  const classes = useStyle();
  return(
    <Container className={classes.content} id="contact">
      <Typography variant="h3" align="center" className={classes.title}>Contact</Typography>
      <Typography align="center" style={{fontSize: "40px"}}>Thanks for taking your time to reach out.</Typography>
      <Typography align="center" style={{fontSize: "40px"}}>How can I help you today?</Typography>
      <Grid container spacing={0}>
        <Grid item xs={6} sm={3} style={{textAlign: "center"}}>
          <IconButton href="https://github.com/wangkalbi-gernessen" target="_blank">
            <GitHubIcon className={classes.images} />
          </IconButton>
        </Grid>
        <Grid item xs={6} sm={3} style={{textAlign: "center"}}>
          <IconButton href="https://www.linkedin.com/in/kazunobu-someya-6b44901b6/" target="_blank">
            <LinkedInIcon className={classes.images} />
          </IconButton>
        </Grid>
        <Grid item xs={6} sm={3} style={{textAlign: "center"}}>
          <IconButton href={`mailto: guizhou08chishui@gmail.com`} target="_blank" >
            <EmailIcon className={classes.images} />
          </IconButton>
        </Grid>
        <Grid item xs={6} sm={3} style={{textAlign: "center"}}>
          <IconButton href={`tel: 778-689-7760`} target="_blank" >
            <CallIcon className={classes.images} />
          </IconButton>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;