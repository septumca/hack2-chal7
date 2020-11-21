import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
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

  return (
    <div>
    <Grid container spacing={1}>
      <TopAppBar label='Feed'> </TopAppBar>
      <NavBar ></NavBar>
      <Grid container item xs={12} spacing={3}>
    
    </Grid>
  
    </Grid>
    </div>
  );
}

export default FeedPage; 