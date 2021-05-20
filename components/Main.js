import Image from 'next/image';
// import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  mainContent: {
    width: "100%",
    height: "100vh",
    color: "#ffffff",
    overflow: "hidden"
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
    fontStyle: "italic"
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
  }
});

const Main = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContent} id="main">
      <div className={classes.introduction}>
        {/* <Typography variant="h1" align="center" className={classes.position}>Web Software Developer</Typography> */}
        <h1 className={classes.position}>Web Software Developer</h1>
        <h1 className={classes.name}>Kazunobu Someya</h1>
        <p className={classes.contactIcon}>
          <a href="https://github.com/wangkalbi-gernessen" target="_blank">
            <Image src="/github.png" width={60} height={60} />
          </a>
          <a href="mailto: guizhou08chishui@gmail.com" target="_blank">
            <Image src="/email.png" width={60} height={60} />
          </a>
          <a href="tel: 778-689-7760" target="_blank">
            <Image src="/call.png" width={60} height={60} />
          </a>
          <a href="https://www.facebook.com/kazunobu.someya" target="_blank">
            <Image src="/facebook.png" width={60} height={60} />
          </a>
          <a href="https://www.instagram.com/kazukeks/" target="_blank">
            <Image src="/instagram.png" width={60} height={60} />
          </a>
        </p>
      </div>
    </div>   
  );
}

export default Main;