import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Grid from '@material-ui/core/Grid';
// import MenuIcon from '@material-ui/icons/Menu';
import TopAppBar from './TopAppBar';
import PictureComponent from '../../components/pictureComponent';
import BottomAppBar from '../../components/BottomAppBar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
 
}));

const FeedPage = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  return (
    <div>
      <Grid container spacing={2}>
        <TopAppBar label='Feed'> </TopAppBar>
        <NavBar ></NavBar>
      </Grid>
      <PictureComponent />
      <Grid spacing={1}>
        <BottomAppBar />
      </Grid>
    </div>
  );
}




export default FeedPage; 