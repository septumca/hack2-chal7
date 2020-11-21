import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  topBarContainer: {
    paddingBottom: '0px !important'
  },
  paddedContent: {
    paddingTop: '10px'
  },
  editorFieldsContainer: {
    paddingTop: '0px !important',
    paddingBottom: '0px !important',
  },
  editorContainer: {
    padding: '0px !important',
    background: '#ffffff'
  }
}));

function NavBar({
  secondaryContent=null
}) {
  const classes = useStyles();

  return (
    <Grid container className={classes.editorRoot}>
      <Grid item xs={12} className={classes.topBarContainer}>
       </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2} className={classes.paddedContent}>
          <Grid item xl={8} lg={7} md={6} xs={6} className={classes.editorContainer}>               
            <Button >Betrieb</Button>
            <Button >Region</Button>
            <Button >Deutschland</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NavBar;