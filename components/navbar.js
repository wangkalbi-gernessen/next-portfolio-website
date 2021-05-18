import { Link } from 'react-scroll';
import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles({
//   navbar: {
//     width: '100%',
//     height: '5rem',
//     position: '-webkit-sticky', /* Safari */
//     position: 'sticky',
//     top: 0,
//     overflow: 'hidden',
//   }, 
//   nav: {
//     height: '100%'
//   },
//   ul: {
//     margin: '10px auto',
//     padding: 0,
//     listStyle: 'none',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-end'
//   }
// });

const Navbar = () => {
  // const classes = useStyles()
  return(
    <div className="navbar">
      <nav>
        <ul>
          <li>
            <Link className="navbar original" activeClass="active" to='main' spy={true} smooth={true} offset={-70} duration={500}>HOME</Link>
          </li>
          <li>
            <Link className="navbar original" activeClass="active" to='projects' spy={true} smooth={true} offset={-70} duration={500}>PROJECTS</Link>
          </li>
          <li>
            <Link className="navbar original" activeClass="active" to='career' spy={true} smooth={true} offset={-70} duration={500}>CAREER</Link>
          </li>
          <li>
            <Link className="navbar original" activeClass="active" to='skills' spy={true} smooth={true} offset={-70} duration={500}>SKILLS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;