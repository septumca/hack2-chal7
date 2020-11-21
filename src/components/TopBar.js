import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  text: {
    fontWeight: '600',
    fontStyle: 'normal',
    fontColor: 'Black',
    textAlign: 'left',
    lineHeight: '48px'
  },
  root: {
    flexGrow: 1,
    marginTop: '10px',
    marginBottom: '10px',
    borderBottom: '2px solid gray'
  },
  icons: {
    paddingRight: '8px'
  },
  imageClass: {
   width:"10px"
  }

}));

const TopBar = ({label='', backLinkTo=null}, props) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={2}>
        {backLinkTo !== null && <IconButton aria-label="back" component={Link} to={backLinkTo}>
          <ArrowBackIcon />
        </IconButton>}
      </Grid>
      <Grid item xs={10}>
        <Typography variant="h6" className={classes.text} >{label}</Typography>
      </Grid>
      <div>{props.child2}</div>
    </Grid>
    )
}

export default TopBar;