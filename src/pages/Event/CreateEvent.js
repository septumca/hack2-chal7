import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Chip, Popover, TextField, Typography } from '@material-ui/core';
import ItemContext from '../../context/ItemContext';
import TopBar from '../../components/TopBar';
import { createAbility, createEvent } from '../../services/services';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useHistory } from 'react-router-dom';

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
      marginRight: theme.spacing(2)
    },
    abilityListItem: {

    },
    abilityChips: {
      marginLeft: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1),
    }
  }));


const CreateEvent = () => {
  const { abilities, loadAbilities, user }  = useContext(ItemContext);
  const history = useHistory();
  const classes = useStyles();
  const [name, setName] = useState('');
  const handleChangeName = event => {
    setName(event.target.value);
  }

  const [description, setDescription] = useState('');
  const handleChangeDescription = event => {
    setDescription(event.target.value);
  }

  const [datetime, setDatetime] = useState('');
  const handleChangeDateTime = event => {
    setDatetime(event.target.value);
  }

  const [location, setLocation] = useState('');
  const handleChangeLocation = event => {
    setLocation(event.target.value);
  }

  const [selectedAbilities, setSelectedAbilities] = useState([]);
  const [filteredAbilities, setFilteredAbilities] = useState(abilities);
  const [abilityFilter, setAbilityFilter] = useState('');
  const handleChangeAbilityFilter = event => {
    setAbilityFilter(event.target.value);
  }
  const handleOpenPopover = event => {
    setAnchorEl(event.currentTarget)
  }

  useEffect(() => {
    const filtered = abilityFilter !== '' ?
      abilities.filter(a => a.value.indexOf(abilityFilter) !== -1) :
      abilities;

    setFilteredAbilities(filtered)
  }, [abilityFilter, setFilteredAbilities, abilities]);

  const handleSelectAbility = (__, value) => {
    if (value) {
     value.ability_id ? setSelectedAbilities(sa => [...sa, value]) : handleCreateAbility(value);
    }
  }

  const handleDeselectAbility = (i) => {
    setSelectedAbilities(sa => sa.filter((sa, index) => i !== index));
  }

  const handleCreateAbility = async (value) => {
    const result = await createAbility({ value });
    const dump = null;
    await loadAbilities();
    handleSelectAbility(dump, result);
  };

  const handleCreateEvent = async () => {
    const payload = {
      name,
      description,
      datetime,
      location,
      account_id: user.account_id, //TODO change to currently logged in user
      abilities: selectedAbilities.map(a => ({ ability_id: a.ability_id, state: 1 }))
    };

    const result = await createEvent(payload);
    history.push('/feedpage');
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  return (
    <div>
    <Grid container spacing={1}>
      <TopBar label='Initiative starten' backLinkTo="/feedpage" />
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          <div className={classes.textField}>
            <TextField fullWidth={true} id="name" label="Was willst du starten" value={name} onChange={handleChangeName} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.textField}>
            <TextField fullWidth={true} id="description" label="Was wurderst du beschreiben?" value={description} onChange={handleChangeDescription} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.textField}>
            <TextField fullWidth={true} id="datetime" label="Wann?" value={datetime} onChange={handleChangeDateTime} />
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className={classes.textField}>
            <TextField fullWidth={true} id="location" label="Wo?" value={location} onChange={handleChangeLocation} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.textField}>
          <Autocomplete
          options={abilities}
          getOptionLabel={(ability) => ability.value}
          onChange={handleSelectAbility}
          selectOnFocus
          clearOnBlur
          handleHomeEndKeys
          freeSolo
      renderInput={(params) => <TextField {...params} label="Webei brauchst du Hilfe" required/>}
      fullWidth={true}
    />
          </div>
        </Grid>
        <Grid item xs={12}>
          {selectedAbilities.map((a, i) => <Chip
            key={i}
            label={a.value}
            color="primary"
            className={classes.abilityChips}
            onDelete={() => { handleDeselectAbility(i) }}
          />)}
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary" className={classes.textField} onClick={handleCreateEvent}>Initiative Starten</Button>
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default CreateEvent;