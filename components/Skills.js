import Image from 'next/image';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    margin: "10px",
    height: "100vh",
    width: "100%",
    backgroundColor: "#fff"
  },
  title: {
    fontSize: "45px",
    fontWeight: "700"
  }, 
  chart: {
    margin: "auto",
    width: "50%",
    backgroundColor: "white",
    padding: "20px",
    height: "100%",
    overflow: "scroll"
  },
  language: {
    width: "100%",
    height: "30px", 
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "20px"
  }, 
  languageIcon: {
    width: "10%"
  }, 
  container: {
    width: "90%",
    backgroundColor: "#ddd",
    borderRadius: "20px"
  }, 
});

const Skills = () => {
  const classes = useStyles();
  return (
    <div className={classes.content} id="skills">
      <Typography align="center"  gutterBottom="true" variant="h1" className={classes.title}>Skills</Typography>
      <div className={classes.chart}>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/javascript.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills javascript">80%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/react.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills react">70%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/php.png" width={30} height={40}/>
          </div> 
          <div className={classes.container}>
            <div className="skills php">60%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/java.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills java">50%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/python.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills python">50%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/html5.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills html">90%</div> 
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/css.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills css">90%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/swift.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills swift">70%</div>
          </div>
        </div>
      </div> 
    </div>     
  );
}

export default Skills;