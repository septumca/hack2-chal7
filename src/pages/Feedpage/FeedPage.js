import React, { useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import NavBar from './NavBar';
import Grid from '@material-ui/core/Grid';
// import MenuIcon from '@material-ui/icons/Menu';
import TopAppBar from './TopAppBar';
import PictureComponent from '../../components/pictureComponent';
import BottomAppBar from '../../components/BottomAppBar';
import ItemContext from '../../context/ItemContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

}));

const FeedPage = () => {
  const classes = useStyles();
  const { loadEvents } = useContext(ItemContext);

  useEffect(() => {
    loadEvents();
  }, [loadEvents]);

  return (
    <div>
      <Grid container spacing={3}>
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