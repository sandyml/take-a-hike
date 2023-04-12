import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { useSelector } from 'react-redux';

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
  const { handleOnLogout } = useContext(UserContext);

  const currentUser = useSelector((state) => state.usersReducer.currentUser)

  // TODO: usersReducer to extract currentUser 
  // console.log(currentUser.username, "currentUser")
  // useEffect to prevent from logging out after refreshing 

  const handleLogout = () => {
    fetch('/logout', {
      method: 'DELETE'
    }).then((resp) => {
      if (resp.ok) {
        handleOnLogout()
      }
    });
  };

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl" className={classes.sage}>
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
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
            TakeAHike
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
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
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >


              <Button color="inherit" to="/" component={Link}>Home</Button><br />
              {/* <Button color="inherit" to="/trailheads" component={Link}>Trailheads</Button> <br/>*/}
              <Button color="inherit" to="/visits/:id" component={Link}>Places I've Visited (boolean)</Button><br />
              {/* <Button color="inherit" to="/visits/:id" component={Link}>Favorites</Button><br/> */}
              <Button color="inherit" to="/visits" component={Link}>Visits List</Button><br />

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
            TakeAHike
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" to="/" component={Link}>Home</Button>
            {/* <Button color="inherit" to="/trailheads" component={Link}>Trailheads</Button> */}
            <Button color="inherit" to="/visits/:id" component={Link}>Places I've Visited (boolean)</Button>
            {/* <Button color="inherit" to="/visits/:id" component={Link}>Favorites</Button> */}
            <Button color="inherit" to="/visits" component={Link}>Visits List</Button>
          </Box>
          {/* TODO: username welcome! */}
          <span>Welcome, *current user username* ! &nbsp;</span>
          {/* <span>Welcome, {currentUser.username}! &nbsp;&nbsp;</span> */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Username" src="" />
              </IconButton>
            </Tooltip>

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
              onClose={handleCloseUserMenu}
            >
              <div>
                {currentUser && currentUser.id ? (
                  <div>
                    <Button color="inherit" to="/logout" component={Link} onClick={handleLogout}>Logout</Button><br />
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