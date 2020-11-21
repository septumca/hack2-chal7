import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
// import Logo from '../../Logo';
// import TopBar from '../components/TopBar';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';


const chipsStyles = makeStyles((theme) => ({
    allChips: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        bottom: '50px !important',
        top: '40px !important',
        paddingRight: '15px !important'
        },
    },
    chips: {
        paddingRight: '50px !important'
    }

}));

const useStyles = makeStyles(() => ({
    text: {
        fontWeight: '600',
        fontStyle: 'normal',
        fontColor: 'Black',
        bottom: '20px'
    },
    root: {
        flexGrow: 1,
        marginTop: '10px'
    },
    icons: {
        paddingRight: '8px'
    },
    imageClass: {
        width: "10px"
    }
}));



const SkillSettings = ({ label = '' }) => {

    const chipsStyles = useStyles();
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
      };
    
      const handleClick = () => {
        console.info('You clicked the Chip.');
      };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const classes = makeStyles();

    const handleClickBack = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleDone = () => {
        setAnchorEl(null);
    };



    return (
        <div>
            <Grid container className={classes.root} spacing={2}>

                <Grid contrainer item xs={2}>

                    <a onClick={handleClickBack} className= {"backgroundcolor: 'white', top: '20px'"}><ArrowBackIcon className={classes.icon} className={"position: 'absolute', paddingleft='20px'"}></ArrowBackIcon></a>
                </Grid>

                <Grid item xs={8}>
                    <Typography variant="h6" className={classes.text}>{"Fähigkeiten & Interessen"}</Typography>
                </Grid>
                <Grid item xs={2}>
                    <a onClick={handleDone} className= {"backgroundcolor: 'white', top: '20px'"}><DoneIcon className={classes.icon} className={"position: 'absolute', paddingright='20px'"}></DoneIcon></a>
                </Grid>

            </Grid>
            <Grid xs={6} spacing={1}>
                <Typography variant="h6" className={"fontWeight: '600', fontStyle: 'normal', fontColor: 'Black'"} color="textSecondary">

                    Fähigheiten
              </Typography>
            </Grid>
            <div className={chipsStyles.allChips}>
                <Chip className= {chipsStyles.chips} label="Basic" />
                <Chip className= {chipsStyles.chips}  label="Disabled" disabled />
                <Chip className= {chipsStyles.chips} avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
                <Chip className= {chipsStyles.chips}
                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                    label="Deletable"
                    onDelete={handleDelete}
                />
            </div>
            <div className = {"bottom: '50px'"}>
            <Grid xs={6} spacing={1}>
                <Typography variant="h6" className={"fontWeight: '600', fontStyle: 'normal', fontColor: 'Black'"} color="textSecondary">

                    Interessen
              </Typography>
            </Grid>
            <div className={chipsStyles.chips}>
                <Chip label="Basic" />
                <Chip label="Disabled" disabled />
                <Chip avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} />
                <Chip
                    avatar={<Avatar alt="Natacha" src="/static/images/avatar/1.jpg" />}
                    label="Deletable"
                    onDelete={handleDelete}
                />
            </div>
            </div>
        </div>
    )
}

export default SkillSettings;
