import image1 from '../pictures/43.jpg';
import image2 from '../pictures/Adventure.jpg';
import image3 from '../pictures/Frankfurt-cover.jpg';
import image4 from '../pictures/frankfurt-germany.jpg';
import image5 from '../pictures/marburg-lahn.jpg';

import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import { getEvents } from '../services/services';

const useStyles = makeStyles({
  root: {
    maxWidth: '80%',
    position: 'relative',
    height: 250,
    margin: 'auto',
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
  const [list, setList ] = useState([]);
  const tileData = [
    {
      img: image1,
      title: 'Boat on Main',
      author: 'author',
    },
    {
      img: image2,
      title: 'Adventure',
      author: 'author',
    },
    {
      img: image3,
      title: 'Boat on Main',
      author: 'author',
    },
    {
      img: image4,
      title: 'Frankfurt Germany',
      author: 'author',
    },
    {
      img: image5,
      title: 'Frankfurt Germany',
      author: 'author',
    },
  ];

  const handleGetEvents = async () => {
    const idP = '1e18e664-8923-4876-83c3-7942a109f918';
    let ev = await getEvents(idP);
    ev = ev.map(el => {
        return { 
          ...el,
          img: image3
        }
    } )
    console.log("ev");
    console.log(ev);
    setList(ev);
  }

  useEffect( () => {
    handleGetEvents()
  }, [])


  return (
    <div>
      {list.map((tile) => (
        <Grid container spacing={3}>
        <Grid item xs={1} ></Grid>
        <Grid item xs={10}>
          <div className={classes.root}>
          <div>
            <img style={{position: 'absolute'}}
              src={`localhost:7000${tile.img}`}
              alt={tile.name}
              className={classes.media}
            />

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

