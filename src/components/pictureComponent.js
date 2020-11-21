import image1 from '../pictures/43.jpg';
import image2 from '../pictures/Adventure.jpg';
import image4 from '../pictures/frankfurt-germany.jpg';
import image5 from '../pictures/marburg-lahn.jpg';

import React, { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import ItemContext from '../context/ItemContext';

const image3 = 'https://via.placeholder.com/300x200';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    height: 250,
    margin: 'auto',
    backgroundColor: 'wheat',
    cursor: 'pointer',
    paddingLeft: "80px"
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    opacity: '0.6',
    backgroundcolor: 'black'
  },
  overlay: {
    position: 'relative',
    color: 'black',
    alignContent: 'center',
    padding: "40px 40px"
  },
  addButon: {
    color: 'black',
    height: '50px',
    width: '50px',
    marginRight: '50px'
  },
  paramStyle: {
    fontweight: 'bold'
  },

});



export default function PictureComponent() {
  const classes = useStyles();
  const history = useHistory();
  const { events } = useContext(ItemContext);

  const onTileClick = (event) => {
    console.info('click');
    history.push(`/event/${event.event_id}`)
  }

  console.log(events);
  return (
    <div>
      {events.map((tile) => (
        
        <Grid key={tile.event_id} container spacing={3}>
        <Grid item xs={10} onClick={() => onTileClick(tile)} >
          <div className={classes.root}>
          <div>
            <img style={{position: 'absolute'}}
              src={tile.img}
              alt={tile.name}
              className={classes.media}
            />

            <div className={classes.overlay}>
              <Typography className={classes.paramStyle} variant="h5" >
                  {tile.name}
              </Typography>
                <Typography className={classes.paramStyle} variant="body1" color="textSecondary" component="p">
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

