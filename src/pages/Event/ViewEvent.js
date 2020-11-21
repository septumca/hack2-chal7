import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Chip, Popover, TextField, Typography } from '@material-ui/core';
import ItemContext from '../../context/ItemContext';
import TopBar from '../../components/TopBar';
import { createAbility, createEvent, getEvent } from '../../services/services';
import { useParams } from 'react-router-dom';
import { useServiceCall } from '../../services/hooks';
import ItemProvider from '../../context/ItemProvider';

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


const ViewEvent = () => {
  const callService = useServiceCall();
  const { abilities } = useContext(ItemContext);
  const abilityObj = abilities !== null ? abilities.reduce((acc, cur) => ({ ...acc, [cur.ability_id]: cur }), {}) : {};
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    const load = async () => {
      const result = await callService(getEvent(id));
      setEvent(result);
    }

    load();
  }, [id, setEvent])

  if(event === null) {
    return null;
  }

  const handleSelectAbility = () => {};
  const handleSubmitParticipation = () => {};

  return (
    <div>
    <TopBar label='Initiative' backLinkTo="/feedpage" />
    <Grid container spacing={0}>
      <Grid item xs={12} style={{position: 'relative', height: '260px'}}>
        <img src='https://via.placeholder.com/300x200' style={{ position: 'absolute', top: '0px', left: '0px', width: '100%'}} />
        <div style={{ position: 'absolute', top: '170px', left: '10px', textAlign: 'left'}}>
          <Typography variant="h6">{event.name}</Typography>
          <Typography>{event.location}</Typography>
          <Typography>{event.datetime}</Typography>
        </div>
      </Grid>
      <Grid item xs={12} style={{ textAlign: 'left', paddingLeft: '10px'}}>
        <Typography variant="caption">Beschreibung</Typography>
        <Typography>{event.description}</Typography>
      </Grid>
      <Grid item xs={10} style={{ paddingLeft: '10px'}}>
        {event.abilities && event.abilities.map(ea => {
          if(abilityObj[ea.ability_id]) {
            return (<Chip
              key={ea.abilityevent_id}
              label={abilityObj[ea.ability_id].value}
              color="primary"
              className={classes.abilityChips}
              onClick={() => { handleSelectAbility(ea.ability_id) }}
            />)
          }
          return null;
        })}
      </Grid>
      <Grid item xs={10} style={{ paddingTop: '10px'}}>
        <Button type="submit" variant="contained" color="primary" onClick={handleSubmitParticipation}>Hilfe anbieten</Button>
      </Grid>
    </Grid>
    </div>
  );
}

export default ViewEvent;