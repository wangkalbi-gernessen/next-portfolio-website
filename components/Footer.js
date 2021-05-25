import { makeStyles } from '@material-ui/styles';
import { IconButton, Typography, Grid } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  footer: {
    width: '100%',
    bottom: 0,
    right: 0,
    height: '100%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-start',
    backgroundColor: "#fff"
  },
  copyright: {
    width: '25%',
    textAlign: 'center',
    margin: 'auto'
  },
  icons: {
    width: '75%',
    padding: "20px"
  },
  images: {
    width: "50px",
    height: "50px",
    '&:hover': {
      backgroundColor: "#33BFDB",
      borderRadius: "50%"
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" direction="row" className={classes.footer}>
      <Grid item className={classes.copyright}>
        <Typography variant="h5" align="center">&#169;2021 Kazunobu Someya</Typography>
      </Grid>
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
    </Grid>
  )
}

export default Footer;