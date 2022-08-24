import { makeStyles } from '@material-ui/styles';
import { Typography, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    width: '100vw',
    padding: '20px 0',
    bottom: 0,
    right: 0,
    height: '100%',
    position: 'relative',
    backgroundColor: "#0C1042",
  },
  copyright: {
    color: "#fff"
  } 
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center" className={classes.copyright}>&#169;2021 Kazunobu Someya</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;