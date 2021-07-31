import Navbar from '../components/Navbar';
import Main from '../components/Main';
import Aboutme from '../components/Aboutme';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: 0,
    minWidth: "100%",
  }
});

export default function Home() {
  const classes = useStyle();
  return (
    <Container className={classes.content}>
      <Navbar />
      <Main />
      <Aboutme />
      <Projects />
      <Contact />
      <Footer />
    </Container>
  )
}