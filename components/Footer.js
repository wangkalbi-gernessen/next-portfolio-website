// import { makeStyles } from '@material-ui/styles';
import Image from 'next/image';

// const useStyles = makeStyles({
//   footer: {
//     width: '100%',
//     bottom: 0,
//     right: 0,
//     height: '100%',
//     display: 'flex',
//     position: 'relative',
//     marginTop: '150px', 
//     justifyContent: 'flex-start'
//   },
//   copyright: {
//     width: '20%',
//     textAlign: 'center',
//     margin: 'auto'
//   }, 
//   icons: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//     width: '80%'
//   },
// });

const Footer = () => {
  return (
    <div className="footer">
      <div className="copyright">
        <span>&#169;2021 Kazunobu Someya</span>
      </div>
      <div className="icons">
        <a href="https://github.com/wangkalbi-gernessen" target="_blank">
          <Image src="/github.png" width={60} height={60} />
        </a>
        <a href="mailto: guizhou08chishui@gmail.com" target="_blank">
          <Image src="/email.png" width={60} height={60} />
        </a>
        <a href="tel: 778-689-7760" target="_blank">
          <Image src="/call.png" width={60} height={60} />
        </a>
        <a href="https://www.facebook.com/kazunobu.someya" target="_blank">
          <Image src="/facebook.png" width={60} height={60} />
        </a>
        <a href="https://www.instagram.com/kazukeks/" target="_blank">
          <Image src="/instagram.png" width={60} height={60} />
        </a>
      </div>
    </div>
  )
}

export default Footer;