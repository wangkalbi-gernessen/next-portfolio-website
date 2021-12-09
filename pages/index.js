import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Aboutme from '../components/Aboutme';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Grid, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: 0,
    minWidth: "100vw",
    minHeight: "100vh"
  }
});

export default function Home() {
  const classes = useStyle();
  return (
    <Container className={classes.content}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <Navbar />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <Main />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <Aboutme />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <Projects />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <Contact />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
          <Footer />
        </Grid>
      </Grid>
    </Container>
  )
}