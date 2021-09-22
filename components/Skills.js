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
    fontWeight: "650",
    paddingTop: "50px"
  }, 
  skills: {
    width: "100%",
    margin: "0 auto",
  },
});

const Skills = () => {
  const classes = useStyles();
  const webSkills = [
    {image: "/Skills/javascript.png", progress: 90},
    {image: "/Skills/react.png", progress: 85},
    {image: "/Skills/nextjs.png", progress: 80},
    {image: "/Skills/php.png", progress: 75},
    {image: "/Skills/mysql.png", progress: 75},
    {image: "/Skills/java.png", progress: 70},
    {image: "/Skills/python.png", progress: 70},
    {image: "/Skills/html5.png", progress: 95},
    {image: "/Skills/css.png", progress: 95}
  ];
  const mobileSkills = [
    {image: "/Skills/swift.png", progress: 80},
    {image: "/Skills/c.png", progress: 60},
  ];
  const toolSkills = [
    {image: "/Skills/github.png", progress: 90},
    {image: "/Skills/docker.png", progress: 50},
  ];

  return (
    <Grid spacing={0} container direction="column" justify="center" alignItems="center"className={classes.content} id="skills">
      <Typography align="center"  gutterBottom="true" variant="h3" className={classes.title}>Skills</Typography>
      <Grid item xs={11}>
        <Paper elevation={5}>
          <Container className={classes.skills}>
            <Typography align="center" variant="h5" gutterBottom="true" style={{paddingTop: "20px", textDecoration: "underline", fontWeight: "bold"}}>Web Technologies</Typography>
            { webSkills.map((webSkill) => (
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Image src={webSkill.image} width={20} height={20}/>
              </Grid>
              <Grid item xs={10}>
                <Progressbar bgcolor="orange" progress={webSkill.progress} height={20}/>
              </Grid>
            </Grid>
            ))}
            <Typography align="center" variant="h5" gutterBottom="true" style={{paddingTop: "20px", textDecoration: "underline", fontWeight: "bold"}}>Mobile Technologies</Typography>
            { mobileSkills.map((mobileSkill) => (
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Image src={mobileSkill.image} width={20} height={20}/>
              </Grid>
              <Grid item xs={10}>
                <Progressbar bgcolor="yellow" progress={mobileSkill.progress} height={20}/>
              </Grid>
            </Grid>
            ))}
            <Typography align="center" variant="h5" gutterBottom="true" style={{paddingTop: "20px", textDecoration: "underline", fontWeight: "bold"}}>Tools</Typography>
            { toolSkills.map((toolSkill) => (
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <Image src={toolSkill.image} width={20} height={20}/>
              </Grid>
              <Grid item xs={10}>
                <Progressbar bgcolor="skyblue" progress={toolSkill.progress} height={20}/>
              </Grid>
            </Grid>
            ))}
          </Container>
        </Paper>
      </Grid> 
    </Grid>     
  );
}

export default Skills;