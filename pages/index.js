import Navbar from "../components/Navbar";
import Main from "./main";
import Aboutme from "./aboutme";
import Projects from "./projects";
import Contact from "./contact";
import Footer from "./footer";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: 0,
    minWidth: "100vw",
    minHeight: "100vh",
  },
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
  );
}
