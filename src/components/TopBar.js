import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles(() => ({
  text: {
    fontWeight: '600',
    fontStyle: 'normal',
    fontColor: 'Black',
    textAlign: 'left'
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

const TopBar = ({label=''}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={1}>

        {/* back arrow could ggo here*/}
      </Grid>
      <Grid item xs={11}>
        <Typography variant="h6" className={classes.text} >{label}</Typography>
      </Grid>
    </Grid>
    )
}

export default TopBar;