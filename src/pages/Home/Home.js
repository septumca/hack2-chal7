import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import Logo from '../../components/Logo'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  page: {
    marginTop: theme.spacing(3),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(2),
  },
  bigmargin: {
    marginTop: theme.spacing(25),
  },
  fullbleed: {
    position: 'absolute',
    width: 'auto',
    maxWidth: '110vw',
    height: 'auto',
    maxHeight: '100vh',
    left: '0',
    top: '0',
    zIndex: '-1',
  },
  unionsfooter: {
    position: 'absolute',
    width: '100vw',
    bottom: '0',
    left: '0',
  },
  meeUnion: {
    width: '45%',
    padding: theme.spacing(2),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img className={clsx(classes.fullbleed)} src="/LandingPage_BG.png"/>
    <div className={clsx(classes.page)}>
    <img className={clsx(classes.meeUnion)} src="/meeUnion.png"/>
      <Logo color='red'/>
      <Button type="submit" variant="contained" size="large" className={clsx(classes.bigmargin, classes.margin)} component={Link} to="/login">
        EINLOGGEN
      </Button>
      <Button type="submit" variant="contained" size="large" className={clsx(classes.margin)} component={Link} to="/register">
        ANMELDEN
      </Button>
    </div>
    <img className={clsx(classes.unionsfooter)} src="/DGB_landingpage_footer.png"/>
    </React.Fragment>
  );
}