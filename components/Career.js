import { makeStyles } from '@material-ui/core';
import Image from 'next/image';

const useStyles = makeStyles({
  imageSize: {
    borderRadius: "50%"
  }
});


const Career = () => {
  const classes = useStyles();

  return (
    <div className="career-content" id="career">
      <h1>My Tech Career</h1>
      <div className="careers">
        <ul className="timeline">
          <li>
            <div className="timeline-image">
              <Image src="/framgia-logo.png" width={160} height={160} className={classes.imageSize} />
            </div>
            <div className="timeline-panel">
              <div className="timeline-heading">
                <h4>2018 August - 2018 November</h4>
                <h4>Framgia Cebu</h4>
              </div>
              <div className="timeline-body">
                <p>I worked with Framgia as PHP developer.</p>
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
                <h4>RailLink Co.,Ltd</h4>
              </div>
              <div className="timeline-body">
                <p>I worked with RailLink as JavaScript developer.</p>
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
                <h4>Cornerstone </h4>
              </div>
              <div className="timeline-body">
                <p>I study Swift.</p>
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