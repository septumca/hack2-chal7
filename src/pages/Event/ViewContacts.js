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


const ViewContacts = ({ style={}, label=null, info={} }) => {
  return (
    <Grid item xs={11} style={{ ...style, paddingTop: '10px'}}>
        {label && <div><Typography variant="h6">{label}</Typography></div>}
        <div><Typography>{info.name}</Typography></div>
        {Array.isArray(info.contacts) && info.contacts.map(con => {
          return (<div key={con.type} style={{ display: 'inline-flex'}}>
            {con.type === 'Telefon' && <LocalPhoneIcon />}
            {con.type === 'Email' && <EmailIcon />}
            <Typography style={{ paddingLeft: '10px' }}>{con.contact || con.value}</Typography>
          </div>);
        })}
      </Grid>
  );
}

export default ViewContacts;