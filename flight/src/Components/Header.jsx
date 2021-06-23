import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import {Button}  from "@material-ui/core";
import userService from "../services/UserService";
 import { Link } from "react-router-dom";
 import '../Components/Header.css';

 


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    shadows: 'none'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    shadows: 'none'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      shadows: 'none',
      
      
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
      shadows: 'none'
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadows: 'none'
  },
  inputRoot: {
    // color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
      shadows: 'none'
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      shadows: 'none'
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
      shadows: 'none'
    },
  },
  button:{
         color: "black",
         textDecoration: "none",
         shadows: 'none'
       },
       title:{
         color: "white",
         textDecoration:"none",
         shadows: 'none'
       }
    

}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
      // style={{marginRight:'10rem'}}
    >
      <MenuItem>  <Link to="/login" className={classes.button}>
                  Login
            </Link></MenuItem>
      <MenuItem>  <Link to="/register" className={classes.button}>
                   Register
                 </Link></MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static"  style={{ background: "#8b95d2"}} elevation={-10}>
      {/* <AppBar position="static" elevation={0}> */}
      {/* <AppBar position="static"> */}
        <Toolbar>
          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton> */}
          <Typography className={classes.title} variant="h6" >
          <Link to="/" className={classes.title} style={{color:'white', fontWeight: 'bold', fontSize:'1.8rem',    font:'Saira Stencil One' }}>
                  <span className='t'>The Flight Booker</span>
                  <style>
                  @import url('https://fonts.googleapis.com/css2?family=Saira+Stencil+One&display=swap');
                  </style>
               </Link>
          </Typography>
          {/* <div style={{display: 'flex', justifyContent:'space-between'}}> */}
          {/* <Typography className={classes.title} variant="h6" noWrap>
          <Link to="#today" className={classes.title} style={{color:'white', fontWeight: '', marginLeft: '33rem'}}>
          <span className='t2'> Flights</span>
               </Link>
          </Typography> */}
          <Typography className={classes.title} variant="h6" >
          <Link to="/about" className={classes.title} style={{color:'white', fontWeight: '', marginLeft:'4rem'}}>
          <span className='t2'> About</span>
               </Link>
          </Typography>
            <Typography className={classes.title} variant="h6" >
          <Link to="/contact-us" className={classes.title} style={{color:'white', fontWeight: '', marginLeft: '4rem'}}>
          <span className='t2'> Contact Us</span>
               </Link>
          </Typography>
          {/* </div> */}
          
          
{/* 
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}

        
          {userService.isAdmin() &&(
          <Typography className={classes.title} variant="h6" noWrap>
            <Button 
               variant="contained"
            color='primary'
            style={{marginLeft:'5rem'}}>
          <Link to="/newflight" className={classes.title} >
                 Add New Flight
               </Link>
               </Button>
          </Typography>)}
          {userService.isLoggedIn() &&(
          <Button
              variant="contained"
              color="primary"
              style={{marginLeft:'17rem'}}
              onClick={(e) => {
                userService.logout();
                window.location.reload();
              }}
            >
              LogOut {userService.getLoggedInUser().name}
            </Button>)}
          {/* <Typography className={classes.title} variant="h6" noWrap>
          <Link to="/update-flight" className={classes.title}>
                 Update Flight
               </Link>
          </Typography> */}
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            {/* <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton> */}

{!userService.isLoggedIn() &&(            
            <IconButton
            //  style={{marginRight:'40px'}}
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>)}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}