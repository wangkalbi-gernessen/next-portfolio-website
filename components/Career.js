import { makeStyles, Typography } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles({
  content: {
    width: "100%",
    height: "100%",
    backgroundColor:"#ffffff",
    padding: "50px"
  },
  title: {
    fontWeight: 700
  },
  imageSize: {
    borderRadius: "50%"
  },
  careers: {
    position: "relative",
    minHeight: "1px",
    paddingLeft: "15px",
    paddingRight: "15px",
    width: "100%",
    margin: "auto"
  }
});

const Career = () => {
  const classes = useStyles();
  return (
    <div className={classes.content} id="career">
      <Typography variant="h2" align="center" className={classes.title}>My Tech Career</Typography>
      <div className={classes.careers}>
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <Image src="/framgia-logo.png" width={160} height={160} className={classes.imageSize} />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2018 August - 2018 November</h4>
                <h4>Framgia Cebu (Cebu, Philippines)</h4>
              </div>
              <div className="timeline-body">
                <p>I participated in a project for 5 months. The first project was developing a web application to manage questionnaires to the company using PHP, MySQL and Docker.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <Image src="/raillink-logo.jpeg" width={160} height={160} className={classes.imageSize} />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2018 December - 2020 March</h4>
                <h4>RailLink Co.,Ltd (Tokyo, Japan)</h4>
              </div>
              <div className="timeline-body">
                <p>RailLink is various website publisher in Japan. My role was client-side optimization of an existing system to register customer's insurance policy for Indian clients. For one and half year, I worked with a team of 10 System Engineers using HTML5, CSS3,  JavaScript and the company’s own framework,  mainly tested the system and performed user testing and troubleshooting.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="timeline-image">
              <Image src="/ciccc-logo.jpeg" width={160} height={160} className={classes.imageSize} />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2020 September - Present</h4>
                <h4>Cornerstone International Community College of Canada (Vancouver, BC, Canada)  </h4>
              </div>
              <div className="timeline-body">
                <p>I studied web and mobile software development for 1 years. The curriculum was mainly fundamental programming languages for developments and data structure. 1st year : learned knowledge of fundamental programming.</p>
              </div>
            </div>
          </li>
          <li className="timeline-inverted">
            <div className="timeline-image">
              <h4>
                Be part
                <br/>
                of my
                <br/>
                story!
              </h4>
            </div>
          </li>
        </ul>
      </div>
    </div>   
  );
}

export default Career;