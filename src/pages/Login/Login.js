import React from 'react';
import { TextField } from '@material-ui/core';
import clsx from 'clsx';
import {Link} from 'react-router-dom';

import Logo from '../../components/Logo';


import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(2),
  },
  form: {
    marginTop: theme.spacing(4),
  },
  page: {
    marginTop: theme.spacing(7),
  },
  textField: {
    width: '85vw',
  },
}));


export default function Login() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    disabled: true,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    // @todo
  };
  return (
    <div className={clsx(classes.page)}>
      <Logo />
      <form onSubmit={handleSubmit} className={clsx(classes.form)}>
        <TextField label="Email" className={clsx(classes.margin, classes.textField)} />
        <FormControl
          className={clsx(classes.margin, classes.textField)}
        >
            <InputLabel htmlFor="standard-adornment-password">Passwort</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Link to='/feedpage'>
          <Button type="submit" variant="contained" color="primary" className={clsx(classes.margin)}  component={Link} to="/feedpage">
            EINLOGGEN
          </Button>
          </Link>
        </form>
      </div>
  );
}