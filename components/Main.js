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
});

const Main = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("I am a Full Stack Web Developer.");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if(index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, 80);
    }
  }, [index]);

  return (
    <Grid container spacing={0}direction="row" alignItems="center" justify="center" className={classes.mainContent} id="main">
      <Grid item xs={11}>
        <Typography align="center" style={{fontSize: "50px", fontWeight: 600, color: "white"}}>Hello, I'm <span style={{color: "red"}}>Kazunobu Someya</span>.<br /><span style={{fontSize: "40px"}}>{text}</span></Typography>
      </Grid>   
    </Grid>
  );
}

export default Main;