import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AddAlertIcon from '@material-ui/icons/AddAlert';
import SettingsIcon from '@material-ui/icons/Settings';
import SearchIcon from '@material-ui/icons/Search';

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

function BottomAppBar({
    secondaryContent = null
}) {
    const classes = useStyles();

    return (
        <div>
             <Grid container spacing={1}>
                <Grid item xs={6}><div></div></Grid>

                <Grid item xs={6} className={classes.editorContainer}>
                    <AddAlertIcon className={classes.icon} ></AddAlertIcon>
                    <SettingsIcon className={classes.icon} ></SettingsIcon>
                    <SearchIcon className={classes.icon}></SearchIcon>
                </Grid>
            </Grid>
        </div>

    );
}

export default BottomAppBar;