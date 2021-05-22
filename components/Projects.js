import { CardActions, CardContent, CardHeader, CardMedia, Container, makeStyles, Button, Typography, Modal } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import {useState} from 'react';

const useStyles = makeStyles({
  content: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    overflow: "hidden",
    backgroundColor: "white"
  },
  title: {
    fontWeight: "700"
  },
  images: {
    width: "100px",
    height: "100px"
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: "60%",
    height: "60%",
    boxShadow: "5px 10px red",
    backgroundColor: "white",
    border: "2px solid #000"
  }
});

const Projects = () => {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  const handleOpen = (web) => {
    setSelectedProject(web);
    setOpen(true);
  }; 

  const handleClose = () => {
    setSelectedProject(null);
    setOpen(false);
  };
  
  const classes = useStyles();

  const webs = [
    {id: 1, title: "First German Delivery System", content: "This is PHP project.", source: "GitHub", sourceHref: "https://github.com/wangkalbi-gernessen/FirstGermanDeliverySystem", detail: "Detail", image: "/css.png"},
    {id: 2, title: "To Do List", content: "This is PHP project.", source: "GitHub", sourceHref: "https://github.com/wangkalbi-gernessen/JavaScript_Omikuji", detail: "Detail", image: "/c.png"},
    {id: 3, title: "Black Jack", content: "This is Java project.", source: "GitHub", sourceHref: "https://github.com/wangkalbi-gernessen/JavaScript_Omikuji", detail: "Detail", image: "/c.png"},
  ];

  const mobiles = [
    {id: 1, title: "Recipe and Calorie Manager App", content: "This is iOS project.", source: "GitHub", sourceHref: "https://github.com/Chihori-Suzuki/Recipe-and-Calorie-Manager-App", detail: "Detail", image: "/css.png"},
    {id: 2, title: "First German Delivery System", content: "This is PHP project.", source: "GitHub", detail: "Detail", image: "/c.png"},
    {id: 3, title: "First German Delivery System", content: "This is PHP project.", source: "GitHub", detail: "Detail", image: "/c.png"},
  ];

  return (
    <Container className={classes.content} id="projects">
      <Typography align="center" gutterBottom="true" variant="h2" className={classes.title}>PROJECTS</Typography>
      <Typography align="center" gutterBottom="true" variants="h2">Web Projects</Typography>
      <Grid container spacing={3} direction="row" justify="evenly-between" alignItems="center">
        { webs.map ((web) => (
        <Grid item xs={4} id={web.id}>
          <Card>
            <CardMedia image={web.image} className={classes.images} />
            <CardHeader title={web.title} />
            <CardContent>
              <Typography>{web.content}</Typography>
            </CardContent>
            <CardActions>
              <Button href={web.sourceHref} size="large" variant="contained">{web.source}</Button>
              <Button size="large" variant="contained" onClick={() => handleOpen(web)}>{web.detail}</Button>
            </CardActions>
          </Card>
        </Grid>
        ))}
        <Modal open={open} onClose={handleClose} className={classes.modal}>
        <Container className={classes.paper}>
          <Typography>{selectedProject && selectedProject.title}</Typography>
          <Button onClick={handleClose} variant="contained" color="secondary">Close window</Button>
        </Container>
      </Modal>
      </Grid>
      <Typography align="center" gutterBottom="true" variants="h1">Mobile Projects</Typography>
      <Grid container spacing={3} direction="row" justify="evenly-between" alignItems="center">
        { mobiles.map ((mobile) => (
        <Grid item xs={4}>
          <Card>
            <CardMedia image={mobile.image} className={classes.images} />
            <CardHeader title={mobile.title} />
            <CardContent>
              <Typography>{mobile.content}</Typography>
            </CardContent>
            <CardActions>
              <Button href={mobile.sourceHref} size="large" variant="contained">{mobile.source}</Button>
              <Button size="large" variant="contained" onClick={handleOpen}>{mobile.detail}</Button>
            </CardActions>
          </Card>
        </Grid>
        ))}
      </Grid>
      {/* <Modal open={open} onClose={handleClose} className={classes.modal}>
        <Container className={classes.paper}>
          <Typography>Mobile</Typography>
          <Button onClick={handleClose} variant="contained" color="secondary">Close window</Button>
        </Container>
      </Modal> */}
    </Container>
  );
}

export default Projects;