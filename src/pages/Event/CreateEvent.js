import React, { useContext, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { TextField } from '@material-ui/core';
import ItemContext from '../../context/ItemContext';
import TopBar from '../../components/TopBar';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: '#FAEBD7',
    },
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
      width: '90%'
    }
  }));




const CreateEvent = () => {
  const { abilities }  = useContext(ItemContext);
  const classes = useStyles();
  const [name, setName] = useState('');
  const handleChangeName = event => {
    setName(event.target.value);
  }

  const [description, setDescription] = useState('');
  const handleChangeDescription = event => {
    setDescription(event.target.value);
  }


  return (
    <div>
    <Grid container spacing={1}>
      <TopBar label='Initiaive starten'/>
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <TextField className={classes.textField} id="name" label="Was willst du starten" value={name} onChange={handleChangeName} />
        </Grid>
        <Grid item xs={12}>
          <TextField className={classes.textField} id="description" label="Description" value={description} onChange={handleChangeDescription} />
        </Grid>
        <Grid item xs={12}>
          <TextField className={classes.textField} id="name" label="Webei brauchst do Hilfe" value={name} onChange={handleChangeName} />
        </Grid>
      </Grid>

    </Grid>
    </div>
  );
}

export default CreateEvent;