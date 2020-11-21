import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';
import Logo from '../../components/Logo';
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
  },
  imageClass: {
   width:"10px"
  }

  
}));

const MenuBar = ({label=''}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
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
      <Logo />
    </Grid>
      <Grid item xs={4}>
      <Typography variant="h6" className={classes.text}>{label}</Typography>
      </Grid>
      <Grid item xs={6}>
        <Button> 
          <FilterListIcon className={classes.icons} />
        </Button> 
        <Button> 
          <SearchIcon className={classes.icons} onClick={handleSeach}/> 
        </Button>
      </Grid>
    </Grid>
    )
}

export default MenuBar;