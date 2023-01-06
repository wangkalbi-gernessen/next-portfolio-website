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
  textContent: {
    fontWeight: 600,
    color: "white"
  }
});

const Main = () => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [fullText, setFullText] = useState("Full-stack Developer");
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
        <Typography align="center" variant="h2" className={classes.textContent}>I 'm <span style={{color: "red"}}>Kazunobu Someya</span>.</Typography>
        <Typography align="center" variant="h3" style={{color: "white"}}>{text}</Typography>
      </Grid>   
    </Grid>
  );
}

export default Main;