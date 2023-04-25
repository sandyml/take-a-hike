import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { makeStyles } from '@material-ui/core/styles';
import ForestIcon from '@mui/icons-material/Forest';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import { logoutUser } from '../actions/users';
import Tooltip from '@mui/material/Tooltip';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import { cartoon_bear_gif } from '../styles/LandingCSS';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  sage: {
    backgroundColor: "#6E7F62"
  },
  lightSage: {
    backgroundColor: "#919F88"
  },
  lighterSage: {
    backgroundColor: "#C3CDBF"
  },
  grey: {
    backgroundColor: "#E0CD9"
  },
}));

export const Navbar = () => {
  const classes = useStyles();

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
    <AppBar position="static" >
      <Container maxWidth="xl" className={classes.lightSage} variant="outlined">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
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
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <ForestIcon /> TakeAHike
          </Typography>
          { currentUser && currentUser.id ? (
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button color="inherit" to="/" component={Link}>Home</Button>
              <Button color="inherit" to="/visits" component={Link}>Trailheads Hikers Visited</Button>
              <Button color="inherit" to="/trailheads" component={Link}>All Trailheads</Button>
              
            </Box>
          ) : ( null )}

          {currentUser && currentUser.id ? (
            <>
              <span>Welcome, {currentUser.username}! &emsp;&emsp;</span>
            </>)
            : (null)}

          <Box sx={{ flexGrow: 0 }}>
            { currentUser && currentUser.id ? (
              <Tooltip title="Open settings">
              <IconButton onClick={(e) => setAnchorElUser(e.currentTarget)} sx={{ p: 0 }}>
                <Avatar alt="Username" src="" />
              </IconButton>
            </Tooltip>
              ) : null }

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
                  <div>
                    {/* <Button color="inherit" to="/me" component={Link}><FavoriteIcon sx={{ width: 10, height: 10 }}/>&nbsp;I hiked</Button><br /> */}
                    <Button color="inherit" to="/logout" component={Link} onClick={handleLogout}>&nbsp;Logout</Button>
                  </div>
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
      </Container>
    </AppBar>
  );
}