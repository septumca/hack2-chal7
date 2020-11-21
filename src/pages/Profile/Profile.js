import React, { useContext } from 'react';
import { TextField, MenuItem, IconButton, Input } from '@material-ui/core';
import clsx from 'clsx';
import {Link, useHistory} from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Logo from '../../components/Logo';


import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import cities from '../../assets/de.json';
import { useServiceCall } from '../../services/hooks';
import ItemContext from '../../context/ItemContext';
import { createProfile } from '../../services/services';

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


export default function Profile() {
  const classes = useStyles();
  const { setUser }  = useContext(ItemContext);
  const history = useHistory();
  const callService = useServiceCall();
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
    disabled: true,
    email: '',
    phone: '',
    name: '',
    org: ''
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

  const handleCreateProfile = async (event) => {
    const { name, phone: contact_phone, email: contact_email, org: organisation } = values;
    const data = {
      name,
      contact_phone,
      contact_email,
      organisation,
      location: 'Frankfurt'
    };

    const user = await callService(createProfile(data));

    if(user !== null) {
      setUser(user);
      history.push('/feedpage');
    }
  };


  return (
    <div className={clsx(classes.page)}>
      <Logo />
      <div className={clsx(classes.form)}>
        <TextField label="Name" value={values.name} onChange={handleChange('name')} className={clsx(classes.margin, classes.textField)} />
        <FormControl
          className={clsx(classes.margin, classes.textField)}
        >
            <InputLabel htmlFor="standard-adornment-password">Passwort</InputLabel>
            <Input
              id="standard-adornment-password"
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              required
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


          <Autocomplete
            options={cities.slice(0,10000)}
            getOptionLabel={(option) => option.city}
            renderInput={(params) => <TextField {...params} label="Stadt" required />}
            className={clsx(classes.margin, classes.textField)}
          />

          <TextField value={values.org} onChange={handleChange('org')} required label="Betrieb" className={clsx(classes.margin, classes.textField)} />
          <TextField value={values.email} onChange={handleChange('email')} label="Email" className={clsx(classes.margin, classes.textField)} />
          <TextField value={values.phone} onChange={handleChange('phone')} label="Handynummer" className={clsx(classes.margin, classes.textField)} />

          <Button type="submit" variant="contained" color="primary" className={clsx(classes.margin)}  onClick={handleCreateProfile}>
            FÄHIGKEITEN & INTERESSEN
          </Button>
          <Button type="submit" variant="contained" color="primary" className={clsx(classes.margin)}  component={Link} to="/profile/skills">
            GEWERKSCHAFTSDATEN
          </Button>
        </div>
      </div>
  );
}