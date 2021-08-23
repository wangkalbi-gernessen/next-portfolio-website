import { makeStyles } from '@material-ui/styles';
import { Typography, Grid, Container } from '@material-ui/core';
import { useEffect, useState } from 'react';

const useStyles = makeStyles({
  mainContent: {
    minWidth: "100%",
    minHeight: "100vh",
    padding: 0,
    margin: 0,
    backgroundImage: "url('/vancouver_nightview.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  // shootingStars: {
  //   height: "100%",
  //   width: "100%",
  //   display: "grid",
  //   alignItems: "center",
  //   justifyItems: "center",
  //   margin: 0,
  //   padding: 0,
  //   backgroundColor: "black",
  // },
  // star: {
  //   position: "relative",
  //   width: "1px",
  //   height: "1px",
  //   backgroundColor: "white",
  //   position: "fixed",
  //   animation: "linear infinite particleAnimation",
  //   '&::before': {
  //     position: "absolute",
  //     display: "block",
  //     content: `''`,
  //     width: "100px",
  //     right: "1px",
  //     top: 0,
  //     height: "1px",
  //     backgroundColor: 'linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(255,255,255,0.4) 100%)'
  //   },
  //   'nth-of-type(1)': {
  //     top: "25%",
  //     animation: "10s"
  //   },
  //   'nth-of-type(2)': {
  //     top: "50%",
  //     animation: "5s"
  //   },
  //   'nth-of-type(3)': {
  //     top: "75%",
  //     animation: "20s"
  //   }
  // },
  // "@keyframes particleAnimation": {
  //   "from": {
  //     left: "-100px"
  //   },
  //   "to": {
  //     left: "calc(100% + 100px)"
  //   },
  // }
});

const Main = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("I'm a full-stack web developer.");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if(index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index]);

  return (
    <Grid container spacing={0}direction="row" alignItems="center" justify="center" className={classes.mainContent} id="main">
      {/* <Container className={classes.shootingStars}>
        <span className={classes.star}/>
        <span className={classes.star}/>
        <span className={classes.star}/>
      </Container> */}
      <Grid item xs={11}>
        <Typography align="center" style={{fontSize: "50px", fontWeight: 500, color: "white"}}>Hello, I'm <span style={{color: "red"}}>Kazunobu Someya</span>.<br /><span style={{fontSize: "40px"}}>{text}</span></Typography>
      </Grid>   
    </Grid>
  );
}

export default Main;