import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logoutUser } from '../actions/users';
import { useDispatch, useSelector } from 'react-redux';
import { Box, IconButton, Toolbar, Typography } from '@mui/material';
import ForestIcon from '@mui/icons-material/Forest';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';

export const HeaderNav = () => {
 const [anchorElNav, setAnchorElNav] = useState(null);
 const [anchorElUser, setAnchorElUser] = useState(null);

 const currentUser = useSelector((state) => state.usersReducer.currentUser);
 const dispatch = useDispatch();

 const handleLogout = () => {
  fetch('/logout', {
   method: 'DELETE'
  })
  dispatch(logoutUser())
 };

 return (
  <div>
   <div>
    <Toolbar disableGutters>
     <Typography
      variant="h5"
      noWrap
      component={'div'}
      href="/"
      sx={{
       mr: 2,
       display: { xs: 'none', md: 'flex' },
       fontFamily: 'Google Sans, Roboto, arial, sans-serif',
       fontWeight: 700,
       letterSpacing: '.3rem',
       color: 'inherit',
       textDecoration: 'none',
      }}
     >
      <ForestIcon /> TakeAHike
     </Typography>
     <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
       size="large"
       aria-label="account of current user"
       aria-controls="menu-appbar"
       aria-haspopup="true"
       onClick={(e) => setAnchorElNav(e.currentTarget)}
       color="inherit"
      >
       <MenuIcon />
      </IconButton>
      <Menu
       id="menu-appbar"
       anchorEl={anchorElNav}
       anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
       }}
       keepMounted
       transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
       }}
       open={Boolean(anchorElNav)}
       onClose={() => setAnchorElNav(null)}
       sx={{
        display: { xs: 'block', md: 'none' },
       }}
      >

       <Button color="inherit" to="/" component={Link}>Home</Button><br />
       <Button color="inherit" to="/visits" component={Link}>Trailheads Hikers Visited</Button><br />
       <Button color="inherit" to="/trailheads" component={Link}>All Trailheads</Button>

      </Menu>
     </Box>
     <Typography
      variant="h5"
      noWrap
      component={'div'}
      href=""
      sx={{
       mr: 2,
       display: { xs: 'flex', md: 'none' },
       flexGrow: 1,
       fontFamily: 'Google Sans, Roboto, arial, sans-serif',
       fontWeight: 700,
       letterSpacing: '.3rem',
       color: 'inherit',
       textDecoration: 'none',
      }}
     >
      <ForestIcon /> TakeAHike
     </Typography>
     {currentUser && currentUser.id ? (
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
       <Button color="inherit" to="/" component={Link}></Button>
       <Button color="inherit" to="/visits" component={Link}></Button>
       <Button color="inherit" to="/trailheads" component={Link}></Button>

      </Box>
     ) : (null)}
     {currentUser && currentUser.id ? (
      <Typography style={{ fontFamily: "Google Sans, Roboto, arial, sans-serif"}} variant='h5' component={'div'}>
       Welcome, {currentUser.username}! &emsp;&emsp;
      </Typography>)
      : (null)}

     <Box sx={{ flexGrow: 0 }}>
      {currentUser && currentUser.id ? (
       <Tooltip title="Open settings">
        <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
         <Avatar alt="Username" src="" />
        </IconButton>
       </Tooltip>
      ) : null}

      <Menu
       sx={{ mt: '45px' }}
       id="menu-appbar"
       anchorEl={anchorElUser}
       anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
       }}
       keepMounted
       transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
       }}
       open={Boolean(anchorElUser)}
       onClose={() => setAnchorElUser(null)}
      >

       <div>
        {currentUser && currentUser.id ? (
         <Typography variant='h5' component={'div'}>
          {/* <Button color="inherit" to="/me" component={Link}><FavoriteIcon sx={{ width: 10, height: 10 }} />&nbsp;I hiked</Button><br /> */}
          <Button color="inherit" to="/logout" component={Link} onClick={handleLogout}>&nbsp;Logout</Button>
         </Typography>
        ) : (
         <div>
          <Button color="inherit" to="/login" component={Link}>Login</Button><br />
          <Button color="inherit" to="/signup" component={Link}>SignUp</Button>
         </div>
        )}
       </div>

      </Menu>
     </Box>
    </Toolbar>
   </div>
  </div>
 );
}