import React, { useContext, useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Chip, Popover, TextField, Typography } from '@material-ui/core';
import ItemContext from '../../context/ItemContext';
import TopBar from '../../components/TopBar';
import { createAbility, createEvent, getAccount, getEvent, register } from '../../services/services';
import { useHistory, useParams } from 'react-router-dom';
import { useServiceCall } from '../../services/hooks';
import DoneIcon from '@material-ui/icons/Done';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';

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
  const { abilities, user } = useContext(ItemContext);
  const abilityObj = abilities !== null ? abilities.reduce((acc, cur) => ({ ...acc, [cur.ability_id]: cur }), {}) : {};
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const classes = useStyles();
  const history = useHistory();
  const userIsAlreadyParticipating = event !== null && user !== null && Array.isArray(event.abilities) && event.abilities.some(ab => ab.accounts.some(ac => ac.account_id === user.account_id));
  const [ownerInfo, setOwnerInfo] = useState(null);
  const [selectedAbilities, setSelectedAbilities] = useState([]);

  useEffect(() => {
    const load = async () => {
      const result = await callService(getEvent(id));
      let resultOwner = null;
      if(result !== null) {
        resultOwner = await callService(getAccount(result.account_id));
      }

      if(resultOwner !== null) {
        setOwnerInfo(resultOwner);
      }

      setEvent(result);
    }

    load();
  }, [id, setEvent])

  if(event === null) {
    return null;
  }

  const handleSelectAbility = (abilityevent_id) => {
    if(userIsAlreadyParticipating) {
      return;
    }
    if(selectedAbilities.indexOf(abilityevent_id) === -1) {
      setSelectedAbilities(sa => [...sa, abilityevent_id]);
    } else {
      setSelectedAbilities(sa => sa.filter(id => id !== abilityevent_id));
    }
  };
  const handleSubmitParticipation = async () => {
    const data = {
      event_abilities: selectedAbilities,
      event_id: event.event_id,
      account_id: user.account_id
    };

    const result = await callService(register(data));
    history.push(`/events/${event.event_id}`);
  };

  console.info('userIsAlreadyParticipating', userIsAlreadyParticipating, ownerInfo);
  return (
    <div>
    <TopBar label='Initiative' backLinkTo="/feedpage" />
    <Grid container spacing={0}>
      <Grid item xs={11} style={{position: 'relative', height: '260px'}}>
        <img src='https://via.placeholder.com/300x200' style={{ position: 'absolute', top: '0px', left: '0px', width: '110%'}} />
        <div style={{ position: 'absolute', top: '150px', left: '10px', textAlign: 'left'}}>
          <Typography variant="h6">{event.name}</Typography>
          <Typography>{event.location}</Typography>
          <Typography>{event.datetime}</Typography>
        </div>
      </Grid>
      <Grid item xs={11} style={{ textAlign: 'left', paddingLeft: '10px'}}>
        <Typography variant="caption">Beschreibung</Typography>
        <Typography>{event.description}</Typography>
      </Grid>
      <Grid item xs={11}>
        {event.abilities && event.abilities.map(ea => {
          if(abilityObj[ea.ability_id]) {
            return (<Chip
              key={ea.abilityevent_id}
              label={abilityObj[ea.ability_id].value}
              color="primary"
              disabled={userIsAlreadyParticipating}
              className={classes.abilityChips}
              onClick={() => { handleSelectAbility(ea.abilityevent_id) }}
              onDelete={() => { handleSelectAbility(ea.abilityevent_id) }}
              deleteIcon={selectedAbilities.indexOf(ea.abilityevent_id) !== -1 && !userIsAlreadyParticipating ? <DoneIcon /> : null}
            />)
          }
          return null;
        })}
      </Grid>
      {!userIsAlreadyParticipating && <Grid item xs={11} style={{ paddingTop: '10px'}}>
        <Button disabled={selectedAbilities.length === 0} type="submit" variant="contained" color="primary" onClick={handleSubmitParticipation}>Hilfe anbieten</Button>
      </Grid>}
      {userIsAlreadyParticipating && ownerInfo !== null && <Grid item xs={11} style={{ paddingTop: '10px'}}>
        <div><Typography variant="h6">Organisator</Typography></div>
        <div><Typography>{ownerInfo.name}</Typography></div>
        {Array.isArray(ownerInfo.contacts) && ownerInfo.contacts.map(con => {
          return (<div style={{ display: 'inline-flex'}}>
            {con.type === 'Telefon' && <LocalPhoneIcon />}
            {con.type === 'Email' && <EmailIcon />}
            <Typography style={{ paddingLeft: '10px' }}>{con.contact}</Typography>
          </div>);
        })}

      </Grid>}
    </Grid>
    </div>
  );
}
export default ViewEvent;