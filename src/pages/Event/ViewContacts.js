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


const ViewContacts = ({ label='', name='', objContacts=[] }) => {
  const callService = useServiceCall();
  const { abilities } = useContext(ItemContext);
//   const abilityObj = abilities !== null ? abilities.reduce((acc, cur) => ({ ...acc, [cur.ability_id]: cur }), {}) : {};
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const classes = useStyles();
  const { events } = useContext(ItemContext);

  console.log("label name " , label, name );


  return (
   
    /* <Grid container spacing={0}>
       <Grid item xs={12} style={{position: 'relative', height: '260px'}}>
       <Typography>{label}</Typography>
       <Typography>{name}</Typography>
         {objContacts.map(con => {
           console.log(con);
          <Grid item xs={3}>
           <Typography>{con.value}</Typography>
           <Typography>{con.type}</Typography>
          </Grid>
         })}
        </Grid>
    </Grid> */
    
    <Grid item xs={11} style={{ paddingTop: '10px'}}>
        <div><Typography variant="h6">Organisator</Typography></div>
        <div><Typography>{ownerInfo.name}</Typography></div>
        {Array.isArray(ownerInfo.contacts) && ownerInfo.contacts.map(con => {
          return (<div style={{ display: 'inline-flex'}}>
            {con.type === 'Telefon' && <LocalPhoneIcon />}
            {con.type === 'Email' && <EmailIcon />}
            <Typography style={{ paddingLeft: '10px' }}>{con.contact}</Typography>
          </div>);
        })}

      </Grid>
      
   
  );
}

export default ViewContacts;