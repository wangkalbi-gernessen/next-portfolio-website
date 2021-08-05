import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';
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
      <Grid item xs={11}>
        <Typography align="center" style={{fontSize: "50px", fontWeight: 500, color: "white"}}>Hello, I'm <span style={{color: "red"}}>Kazunobu Someya</span>.<br /><span style={{fontSize: "40px"}}>{text}</span></Typography>
      </Grid>   
    </Grid>
  );
}

export default Main;