import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import { Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
const useStyles = makeStyles(() => ({
  text: {
    fontWeight: '600',
    fontStyle: 'normal',
    fontColor: 'Black'
  },
  root: {
    flexGrow: 1,
    marginTop: '10px'
  },
  icons: {
    paddingRight: '8px'
  }
}));

const MenuBar = ({label=''}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const label2='Heading';
    const classes = useStyles();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

      const handleSeach = () => {
        
      }

    return ( 
  <Grid container className={classes.root} spacing={2}>
    <Grid item xs={2}>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <MenuIcon />
      </Button>
    </Grid>
    <Menu
      id="simple-menu"
      anchorEl={anchorEl}
      keepMounted
      open={Boolean(anchorEl)}
      onClose={handleClose}
      >
      <MenuItem onClick={handleClose}>Profile</MenuItem>
      <MenuItem onClick={handleClose}>My account</MenuItem>
      <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>        
      <Grid item xs={6}>
      <Typography variant="h6" className={classes.text} >{label2}</Typography>
      </Grid>
      <Grid  item xs={4}>
        <NotificationsIcon className={classes.icons}>  </NotificationsIcon>
        <FilterListIcon className={classes.icons} />
        <Button> 
            <SearchIcon className={classes.icons} onClick={handleSeach}/> 
        </Button>
      <MoreVertIcon className={classes.icons} />
      </Grid>
    </Grid>
    )
}

export default MenuBar;