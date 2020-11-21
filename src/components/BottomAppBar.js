import React from 'react';
import {Link} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
const useStyles = makeStyles(() => ({

    icon: {
        position: 'relative',
        paddingLeft: '20%',
        height: '50px',


    },
    topBarContainer: {
        paddingBottom: '0px !important'
    },
    paddedContent: {
        paddingTop: '10px'
    },
    editorFieldsContainer: {
        paddingTop: '0px !important',
        paddingBottom: '0px !important',
    },
    editorContainer: {
        padding: '0px !important',
        background: '#ffffff'
    }
}));

function BottomAppBar({}) {
    const classes = useStyles();

    return (
        <div>
             <Grid container spacing={1}>
                <Grid item xs={6}><div></div></Grid>

                <Grid item xs={6} className={classes.editorContainer}>
                    <Button >
                        <AddAlertIcon className={classes.icon} ></AddAlertIcon>
                    </Button>
                    <Button component={Link} to="/Profile">
                        <SettingsIcon className={classes.icon} ></SettingsIcon>
                    </Button>
                </Grid>
            </Grid>
        </div>

    );
}

export default BottomAppBar;