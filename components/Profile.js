import { makeStyles } from '@material-ui/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyle = makeStyles({
  content: {
    margin: 0,
    padding: 0,
    minWidth: "100%",
    background: "white"
  }
});

const Profile = () => {
  const classes = useStyle();
  return(
    <Grid spacing={0} direction="column" alignItems="center" justify="center" className={classes.content}>
      <Grid item xs={11}>
        <Typography align="center" variant="h4">Profile</Typography>
        <Typography align="center" variant="h4">Profile</Typography>
      </Grid>
    </Grid>
  );
}

export default Profile;