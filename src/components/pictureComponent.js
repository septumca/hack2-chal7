import image1 from '../pictures/43.jpg';
import image2 from '../pictures/Adventure.jpg';
import image3 from '../pictures/Frankfurt-cover.jpg';
import image4 from '../pictures/frankfurt-germany.jpg';
import image5 from '../pictures/marburg-lahn.jpg';

import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '80%',
    position: 'relative',
    maxHeight: 250,
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
    
  }
});



export default function PictureComponent() {
  const classes = useStyles();

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


  return (
    <div>
      {tileData.map((tile) => (
        <Grid container spacing={1}>
        <Grid  item xs={1} spacing={3}></Grid>
        <Grid  item xs={10} spacing={3}>
            <Card  container className={classes.root}>
          <CardActionArea>
           
            <CardMedia
              image={tile.img}
              title={tile.title}
              className={classes.media}
            />
            <CardContent className={classes.overlay}>
              <Typography   className= {"fontweight: 'bold'"}  gutterBottom variant="h5" component="h2">
                Event Titel
          </Typography>
              <Typography  className= {"fontweight: 'bold'" }variant="body2" color="textSecondary" component="p">
                Veranstalter:innen
              </Typography>
            </CardContent>
          
          </CardActionArea>

        </Card>
       
        </Grid>
        <Grid container item xs={1} spacing={3}></Grid>
        </Grid>
      ))}
    </div>
  );
}

