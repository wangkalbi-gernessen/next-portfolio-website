import { makeStyles } from '@material-ui/styles';
import { Typography, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    width: '100%',
    bottom: 0,
    right: 0,
    height: '100%',
    position: 'relative',
    backgroundColor: "#FFFFFF",
    paddingTop: "45px"
  },
  copyright: {
    fontWeight: "700"
  } 
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Grid container>
        <Typography variant="h3" align="center" className={classes.copyright}>&#169;2021 Kazunobu Someya</Typography>
      </Grid>
    </Container>
  )
}

export default Footer;