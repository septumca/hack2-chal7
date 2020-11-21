import image1 from '../pictures/43.jpg';
import image2 from '../pictures/Adventure.jpg';
import image4 from '../pictures/frankfurt-germany.jpg';
import image5 from '../pictures/marburg-lahn.jpg';

import React, { useContext, useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import { getEvents } from '../services/services';
import ItemContext from '../context/ItemContext';

const image3 = 'https://via.placeholder.com/300x200';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 250,
    margin: 'auto',
    backgroundColor: 'wheat',
    cursor: 'pointer'
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    opacity: '0.6',
    backgroundcolor: 'black'
  },
  overlay: {
    position: 'absolute',
    top: '150px',
    left: '20px',
    color: 'black',

  },
  addButon: {
    color: 'black',
    height: '40px',
    width: '40px'
  },
  paramStyle: {
    fontweight: 'bold',
    margin: ''
  }
});



export default function PictureComponent() {
  const classes = useStyles();
  const history = useHistory();
  const { events } = useContext(ItemContext);

  const onTileClick = (event) => {
    console.info('click');
    history.push(`/event/${event.event_id}`)
  }

  return (
    <div>
      {events.map((tile) => (
        <Grid key={tile.event_id} container spacing={3}>
        <Grid item xs={1} ></Grid>
        <Grid item xs={10} onClick={() => onTileClick(tile)} >
          <div className={classes.root}>
          <div>
            <div style={{position: 'absolute'}} className={classes.overlay}>
              <Typography className={classes.paramStyle} variant="h5" >
                  {tile.name}
              </Typography>
                <Typography className={"fontweight: 'bold'"} variant="body2" color="textSecondary" component="p">
                    {tile.description}
                </Typography>
            </div>
          </div>
         </div>

        </Grid>
        <Grid container item xs={1}></Grid>
        </Grid>
      ))}
        <IconButton aria-label="add event" component={Link} to="/event/new">
           <AddCircleIcon className={classes.addButon}   />
          </IconButton>
    </div>
  );
}

