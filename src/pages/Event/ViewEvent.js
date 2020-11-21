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
  const { id } = useParams();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const load = async () => {
      const result = await callService(getEvent(id));
      setEvent(result);
    }

    load();
  }, [id, setEvent])

  return (
    <div>
    <Grid container spacing={1}>
      <TopBar label='Initiative' backLinkTo="/feedpage" />
      <Grid container item spacing={3}>
        <Grid item xs={12}>
          {JSON.stringify({ event })}
        </Grid>
      </Grid>
    </Grid>
    </div>
  );
}

export default ViewEvent;