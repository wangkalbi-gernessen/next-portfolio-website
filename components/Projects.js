import { CardActions, CardContent, CardHeader, CardMedia, Container, makeStyles, Button, Typography } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
  content: {
    minWidth: "100%",
    minHeight: "100vh",
    backgroundColor: "#F0F0F0",
    margin: 0,
    padding: 0
  },
  title: {
    fontWeight: "700",
    paddingTop: "45px",
    position: "relative",
    zIndex: 1,
    paddingBottom: "5px",
    '&::after': {
      content: "' '",
      position: "absolute",
      left: "50%",
      marginLeft: "-50px",
      bottom: 0,
      width: "100px",
      borderBottom: "3px solid magenta"
    }
  },
  images: {
    width: "100%",
    height: "150px",
    overflow: "hidden",
    transition: "0.5s all ease-in-out",
    '&:hover': {
      transform: "scale(1.2)"
    }
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: "70%",
    height: "70%",
    overflow: "scroll",
    boxShadow: "1px 1px gray",
    backgroundColor: "white",
    border: "1px solid black"
  }
});

const Projects = () => {
  // const [open, setOpen] = useState(false);
  // const [selectedProject, setSelectedProject] = useState(null);
  
  // const webHandleOpen = (web) => {
  //   setSelectedProject(web);
  //   setOpen(true);
  // }; 

  // const webHandleClose = () => {
  //   setSelectedProject(null);
  //   setOpen(false);
  // };

  // const mobileHandleOpen = (mobile) => {
  //   setSelectedProject(mobile);
  //   setOpen(true);
  // }; 

  // const mobileHandleClose = () => {
  //   setSelectedProject(null);
  //   setOpen(false);
  // };
  
  const classes = useStyles();

  const webs = [
    {id: 1, title: "Recipe and Calorie Manager", content: "JavaScript, React.js, Material UI, API, Ajax, Firebase", source: "GitHub", sourceHref: "https://github.com/wangkalbi-gernessen/React_Recipe_and_Calorie_Manager_App", image: "https://user-images.githubusercontent.com/37167797/126250654-9f98bb7a-99f0-49b3-9524-f43e68fa4058.png", language: "JavaScript, React.js, API, Material UI", library: "React.js"
    },
    {id: 2, title: "Black Jack", content: "Java, JavaFX", source: "GitHub", sourceHref: "https://github.com/YumiMachino/Black-Jack", image: "/blackjack.png", language: "Java", library: "JavaFX"
    },
    {id: 3, title: "First German Delivery System", content: "PHP, MySQL, CSS", source: "GitHub", sourceHref: "https://github.com/wangkalbi-gernessen/FirstGermanDeliverySystem", image: "/css.png", language: "PHP, MySQL",
    }
  ];

  const mobiles = [
    {id: 1, title: "Recipe and Calorie Manager", content: "Swift, XCode, Core Data", source: "GitHub", sourceHref: "https://github.com/Chihori-Suzuki/Recipe-and-Calorie-Manager-App", image: "/calorieProj.png", language: "Swift", library: "UIKit"
    },
    {id: 2, title: "To Do List", content: "Swift, XCode, Core Data", source: "GitHub", sourceHref: "https://github.com/wangkalbi-gernessen/ToDoList", image: "/todolist.png", language: "Swift", library: "UIKit, CoreData"
    }
  ];

  return (
    <Container className={classes.content} id="projects">
      <Typography align="center" gutterBottom="true" variant="h3" className={classes.title}>PROJECTS</Typography>
      <Typography align="center" gutterBottom="true" variants="h2" style={{fontSize:"45px", textDecoration: "underline", paddingTop: "50px", }}>Web Projects</Typography>
      {/* Web project area */}
      <Grid container spacing={16}  justify="space-evenly">
        { webs.map ((web) => (
        <Grid item xs={12} sm={6} md={3} lg={3} id={web.id} style={{marginBottom: "30px"}}>
          <Card className={classes.webCard}>
            <CardMedia image={web.image} className={classes.images} />
            <CardHeader title={web.title} titleTypographyProps={{variant: "h4"}} style={{textAlign: "center"}} />
            <CardContent>
              <Typography variant="h6" style={{textAlign: "center"}}>{web.content}</Typography>
            </CardContent>
            <CardActions>
              <Grid container direction="row" justify="space-evenly" alignItems="center" >
                <Button href={web.sourceHref} size="medium" variant="contained" target="_blank" style={{marginBottom: "20px"}}>{web.source}</Button>
                {/* <Button size="medium" variant="contained" onClick={() => webHandleOpen(web)} style={{marginBottom: "20px"}}>{web.detail}</Button> */}
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        ))}
        {/* <Modal open={open} onClose={webHandleClose} className={classes.modal}>
        <Container className={classes.paper}>
          <Typography variant="h4" align="center" gutterBottom="true">{selectedProject && selectedProject.title}</Typography>
          <Typography align="center" gutterBottom="true">Development language: {selectedProject && selectedProject.language}</Typography>
          <Typography align="center" gutterBottom="true">Using library: {selectedProject && selectedProject.library}</Typography>
          <Container style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", margin: "50px 50px"}}>
            <Image src={selectedProject && selectedProject.picture1} width={200} height={300} />
            <Image src={selectedProject && selectedProject.picture2} width={200} height={300} />
          </Container>
          <Typography align="center" gutterBottom="true" style={{margin: "50px 50px"}}>{selectedProject && selectedProject.description}</Typography>
          <Container style={{textAlign: "center", marginBottom: "50px", marginTop: "50px"}}>
            <Button onClick={mobileHandleClose} variant="contained" color="secondary">Close window</Button>
          </Container>
        </Container>
      </Modal> */}
      </Grid>
      {/* Mobile project area */}
      <Typography align="center" gutterBottom="true" variants="h1" style={{fontSize:"45px", textDecoration: "underline", marginTop: "100px"}}>Mobile Projects</Typography>
      <Grid container spacing={16}  justify="space-evenly">
        { mobiles.map ((mobile) => (
        <Grid item xs={12} sm={6} md={3} lg={3} id={mobile.id} style={{marginBottom: "30px"}}>
          <Card>
            <CardMedia image={mobile.image} className={classes.images}/>
            <CardHeader title={mobile.title} titleTypographyProps={{variant: "h4"}}  style={{textAlign: "center"}}/>
            <CardContent>
              <Typography variant="h6" style={{textAlign: "center"}}>{mobile.content}</Typography>
            </CardContent>
            <CardActions className={classes.buttonsLocation}>
              <Grid container direction="row" justify="space-evenly" alignItems="center" >
                <Button href={mobile.sourceHref} size="medium" variant="contained" target="_blank" style={{marginBottom: "20px"}}>{mobile.source}</Button>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
        ))}
        {/* <Modal open={open} onClose={mobileHandleClose} className={classes.modal}>
        <Container className={classes.paper}>
          <Typography variant="h4" align="center" gutterBottom="true">{selectedProject && selectedProject.title}</Typography>
          <Typography align="center" gutterBottom="true">Development language: {selectedProject && selectedProject.language}</Typography>
          <Typography align="center" gutterBottom="true">Using library: {selectedProject && selectedProject.library}</Typography>
          <Grid container alignItems="center" justify="space-evenly" direction="row">
            <Image src={selectedProject && selectedProject.picture1} width={100} height={300} />
            <Image src={selectedProject && selectedProject.picture2} width={100} height={300} />
          </Grid>
          <Typography align="center" gutterBottom="true" style={{margin: "50px 50px"}}>{selectedProject && selectedProject.description}</Typography>
          <Container style={{textAlign: "center", marginBottom: "50px", marginTop: "50px"}}>
            <Button onClick={mobileHandleClose} variant="contained" color="secondary">Close window</Button>
          </Container>
        </Container>
      </Modal> */}
      </Grid>
    </Container>
  );
}

export default Projects;