import Image from 'next/image';
// import { Typography } from '@material-ui/core;'

const Skills = () => {
  return (
    <div className="skills-content" id="skills">
      <h1>Skills</h1>
      <div className="chart">
        {/* <Typography>Web</Typography> */}
        <div className="language">
          <div className="languageIcon">
            <Image src="/javascript.png" width={30} height={30}/>
          </div> 
          <div className="container">
            <div className="skills javascript">80%</div>
          </div>
          </div>
        <div className="language">
          <div className="languageIcon">
            <Image src="/react.png" width={30} height={30}/>
          </div> 
          <div className="container">
            <div className="skills react">70%</div>
          </div>
          </div>
        <div className="language">
          <div className="languageIcon">
            <Image src="/php.png" width={30} height={40}/>
          </div> 
          <div className="container">
            <div className="skills php">60%</div>
          </div>
          </div>
        <div className="language">
          <div className="languageIcon">
            <Image src="/java.png" width={30} height={30}/>
          </div> 
          <div className="container">
            <div className="skills java">50%</div>
          </div>
          </div>
        <div className="language">
          <div className="languageIcon">
            <Image src="/python.png" width={30} height={30}/>
          </div> 
          <div className="container">
            <div className="skills python">50%</div>
          </div>
          </div>
        <div className="language">
          <div className="languageIcon">
            <Image src="/html5.png" width={30} height={30}/>
          </div> 
          <div className="container">
            <div className="skills html">90%</div> 
          </div>
          </div>
        <div className="language">
          <div className="languageIcon">
            <Image src="/css.png" width={30} height={30}/>
          </div> 
          <div className="container">
            <div className="skills css">90%</div>
          </div>
        </div>
        <div className="language">
          <div className="languageIcon">
            <Image src="/swift.png" width={30} height={30}/>
          </div> 
          <div className="container">
            <div className="skills swift">70%</div>
          </div>
        </div>
      </div> 
    </div>     
  );
}

export default Skills;