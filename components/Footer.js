import { makeStyles } from '@material-ui/styles';
import { Typography, Container, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    width: '100vw',
    bottom: 0,
    right: 0,
    height: '100%',
    position: 'relative',
    backgroundColor: "#FFFFFF",
  },
  copyright: {
    fontWeight: "700"
  } 
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.footer}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" className={classes.copyright}>&#169;2021 Kazunobu Someya</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;