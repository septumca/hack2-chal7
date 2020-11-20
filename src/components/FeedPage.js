import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
// import MenuIcon from '@material-ui/icons/Menu';
import TopAppBar from './TopAppBar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: '#FAEBD7',
    },
  }));

const FeedPage = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);



  const FormRow = () => {
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }



  return (
    <div>
    <Grid container spacing={1}>
    <TopAppBar> </TopAppBar>
    <Grid container item xs={12} spacing={3}>
        <FormRow />
    </Grid>
  
    </Grid>
    </div>
  );
}

export default FeedPage; 