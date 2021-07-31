import Image from 'next/image';
import { makeStyles, Typography, Grid, Paper, Container } from '@material-ui/core';
import Progressbar from './Progressbar';

const useStyles = makeStyles({
  content: {
    minHeight: "100vh",
    minWidth: "100%",
    backgroundColor: "#fff",
    padding: 0,
    margin: 0
  },
  title: {
    fontWeight: "700"
  }, 
  skills: {
    width: "100%",
    margin: "0 auto",
  },
  // languageIcon: {
  //   width: "10%",
  // }, 
  // images: {
  //   zIndex: "1"
  // },
  // container: {
  //   width: "90%",
  //   backgroundColor: "#ddd",
  //   borderRadius: "20px"
  // }, 
});

const Skills = () => {
  const classes = useStyles();
  const skills = [
    {image: "/javascript.png", progress: 80},
    {image: "/react.png", progress: 80},
    {image: "/nextjs.png", progress: 80},{image: "/php.png", progress: 60},
    {image: "/mysql.png", progress: 60},
    {image: "/java.png", progress: 70},
    {image: "/python.png", progress: 70},{image: "/html5.png", progress: 95},{image: "/css.png", progress: 95}


  ]

  return (
    <Grid spacing={0} container direction="column" justify="center" alignItems="center"className={classes.content} id="skills">
      <Typography align="center"  gutterBottom="true" variant="h3" className={classes.title}>Skills</Typography>
      <Grid item xs={11} style={{margin:"30px"}}>
        <Paper elevation={5}>
          <Container className={classes.skills}>
            <Typography align="center" variant="h5" gutterBottom="true" style={{paddingTop: "20px", textDecoration: "underline", fontWeight: "bold"}}>Web Technologies</Typography>
            { skills.map((skill) => (
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Image src={skill.image} width={20} height={20}/>
              </Grid>
              <Grid item xs={10}>
                <Progressbar bgcolor="orange" progress={skill.progress} height={20}/>
              </Grid>
            </Grid>
            ))}
            <Typography align="center" variant="h5" gutterBottom="true" style={{paddingTop: "20px", textDecoration: "underline", fontWeight: "bold"}}>Mobile Technologies</Typography>
        {/* <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/swift.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills swift">80%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/c.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills objective-c">60%</div>
          </div>
        </div> */}
        <Typography align="center" variant="h5" gutterBottom="true">Others</Typography>
        {/* <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/github.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills github">85%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/docker.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills docker">50%</div>
          </div>
        </div> */}
          </Container>
        </Paper>
      </Grid> 
    </Grid>     
  );
}

export default Skills;