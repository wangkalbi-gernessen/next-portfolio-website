import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Projects from '../components/Projects';
import Career from '../components/Career';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: 0,
    width: "100%",
  }
});

export default function Home() {
  const classes = useStyle();
  return (
    <Container className={classes.content}>
      <Navbar />
      <Main />
      <Projects />
      <Career />
      <Skills />
      <Footer />
    </Container>
  )
}