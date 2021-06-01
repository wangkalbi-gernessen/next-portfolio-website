import Image from 'next/image';
import { makeStyles, Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  content: {
    height: "100%",
    width: "100%",
    backgroundColor: "#fff",
    padding: 0,
    margin: 0
  },
  title: {
    fontWeight: "700"
  }, 
  chart: {
    margin: "auto",
    width: "80%",
    backgroundColor: "white",
    padding: "20px",
    height: "100%",
    border: "1px solid gray",
    boxShadow: "1px 1px gray"
  },
  language: {
    width: "100%",
    height: "30px", 
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "20px"
  }, 
  languageIcon: {
    width: "10%",
  }, 
  images: {
    zIndex: "1"
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
    <Grid container direction="column" justify="center" alignItems="center"className={classes.content} id="skills">
      <Typography align="center"  gutterBottom="true" variant="h2" className={classes.title}>Skills</Typography>
      <div className={classes.chart}>
        <Typography align="center" variant="h5" gutterBottom="true">Web Technologies</Typography>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/javascript.png" width={30} height={30} className={classes.images}/>
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
            <div className="skills react">80%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/nextjs.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills next">80%</div>
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
            <Image src="/mysql.png" width={30} height={40}/>
          </div> 
          <div className={classes.container}>
            <div className="skills mysql">60%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/java.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills java">70%</div>
          </div>
        </div>
        <div className={classes.language}>
          <div className={classes.languageIcon}>
            <Image src="/python.png" width={30} height={30}/>
          </div> 
          <div className={classes.container}>
            <div className="skills python">70%</div>
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
        <Typography align="center" variant="h5" gutterBottom="true">Mobile Technologies</Typography>
        <div className={classes.language}>
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
        </div>
        <Typography align="center" variant="h5" gutterBottom="true">Others</Typography>
        <div className={classes.language}>
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
        </div>
      </div> 
    </Grid>     
  );
}

export default Skills;