import Skills from './Skills';
import Career from './Career';
import { makeStyles } from '@material-ui/styles';
import { Container, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: 0,
    minWidth: "100%",
    background: "white"
  }
});

const Aboutme = () => {
  const classes = useStyle();
  return(
    <Container className={classes.content} id="aboutme">
      <Typography>About Me</Typography>
      <Skills/>
      <Career/>
    </Container>
  );
}

export default Aboutme;