import { makeStyles } from '@material-ui/styles';
import { Typography, Container } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    width: '100%',
    bottom: 0,
    right: 0,
    height: '100%',
    position: 'relative',
    backgroundColor: "#fff",
    paddingTop: "40px"
  },
  copyright: {
    fontWeight: "bold"
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Typography variant="h5" align="center" className={classes.copyright}>&#169;2021 Kazunobu Someya</Typography>
    </Container>
  )
}

export default Footer;