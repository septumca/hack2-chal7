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
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  margin: {
    margin: theme.spacing(2),
  },
  bigmargin: {
    marginTop: theme.spacing(12),
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={clsx(classes.page)}>
      <Logo />
      <Button type="submit" variant="contained" color="primary" className={clsx(classes.bigmargin, classes.margin)} component={Link} to="/login">
        EINLOGGEN
      </Button>
      <Button type="submit" variant="contained" color="primary" className={clsx(classes.margin)} component={Link} to="/register">
        ANMELDEN
      </Button>
    </div>
  );
}