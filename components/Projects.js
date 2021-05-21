import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    width: "100%",
    height: "100vh",
    backgroundColor: "white",
    overflow: "hidden"
  }
});

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.content} id="projects">
        <div className="row">
          
        </div>
      </div>
  );
}

export default Projects;