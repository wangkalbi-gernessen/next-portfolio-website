import { makeStyles } from '@material-ui/styles';
import { Typography, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    width: '100%',
    bottom: 0,
    right: 0,
    height: '100%',
    display: 'flex',
    position: 'relative',
    justifyContent: 'flex-start',
    backgroundColor: "#fff"
  },
  copyright: {
    width: '25%',
    textAlign: 'center',
    margin: 'auto'
  },
  icons: {
    width: '75%',
    padding: "20px"
  },
  images: {
    width: "50px",
    height: "50px",
    '&:hover': {
      backgroundColor: "#33BFDB",
      borderRadius: "50%"
    }
  }
});

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center" alignItems="center" direction="row" className={classes.footer}>
      <Grid item className={classes.copyright}>
        <Typography variant="h5" align="center">&#169;2021 Kazunobu Someya</Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;