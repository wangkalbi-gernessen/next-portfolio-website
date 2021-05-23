// import Image from 'next/image';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Typography } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles({
  mainContent: {
    width: "100%",
    height: "87vh",
    margin: 0,
    padding: 0, 
  },
  introduction: {
    paddingTop: "100px",
    paddingBottom: "50px",
    margin: "auto",
    width: "80%"
  },
  position: {
    fontFamily: "Helvetice Neue Droid Serif  Helvetica Arial sans-serif",
    fontSize: "40px",
    lineHeight: "22px",
    textAlign: "center",
    fontStyle: "italic",
    marginBottom: "40px"
  },
  name: {
    textTransform: "uppercase",
    fontSize: "70px",
    textAlign: "center",
    fontWeight: "700",
    marginBottom: "25px",
    lineHeight: "50px"  
  },
  contactIcon: {
    marginTop: "100px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",   
    width: "80%"
  }, 
  images: {
    fontSize: "50px",
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
    <div className={classes.mainContent} id="main">
      <div className={classes.introduction}>
        <Typography className={classes.position}>Web Software Developer</Typography>
        <Typography className={classes.name}>Kazunobu Someya</Typography>
        <p className={classes.contactIcon}>
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
        </p>
      </div>
    </div>   
  );
}

export default Main;