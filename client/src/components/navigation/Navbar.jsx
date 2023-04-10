// import React from 'react';
// import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import Box from '@mui/material/Box';

// const useStyles = makeStyles(() => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   },
//   pink: {
//     backgroundColor: "#ad6689"
//   }
// }));

// export const Navbar = () => {
//   const classes = useStyles();

//   // const loggedInLinks = () => {
//   //   return (
//   //     <>
//   //       <Button color="inherit" to="/" component={Link}>Home</Button>
//   //       <Button color="inherit" to="/parks" component={Link}>ParkList</Button>
//   //       <Button color="inherit" to="/#" component={Link}>Logout</Button>
//   //     </>
//   //   )
//   // }


//   // const loggedOutLinks = () => {
//   //   return (
//   //     <>
//   //       <Button color="inherit" to="/" component={Link}>Home</Button>
//   //       <Button color="inherit" to="/signup" component={Link}>SignUp</Button>
//   //       <Button color="inherit" to="/login" component={Link}>Login</Button>
//   //     </>
//   //   )
//   // }

//   return (
//     <AppBar position="static">
//       <Box sx={{ flexGrow: 1 }}>
//         <Toolbar>
//           <Toolbar>
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: 'none', md: 'flex' },
//                 fontFamily: 'monospace',
//                 fontWeight: 700,
//                 letterSpacing: '.3rem',
//                 color: 'inherit',
//                 textDecoration: 'none',
//               }}
//             >
//               SOMETRAILS
//             </Typography>

//             <Typography variant="h2">
//               <Button variant="contained" color="inherit" to="/" component={Link}>Home</Button>
//               <Button variant="contained" color="inherit" to="/login" component={Link}>Login</Button>
//               <Button variant="contained" color="inherit" to="/visits/:id/edit" component={Link}>Edit Form(tentative)</Button>
//             </Typography>
//             {/* {loggedIn ? loggedInLinks() : loggedOutLinks()} */}
//           </Toolbar>
//               <Button variant="contained" color="inherit" to="/signup" component={Link}>SignUp</Button>
//         </Toolbar>
//       </Box>
//     </AppBar>
//   )
// }

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
// import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

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
  const { handleOnLogout, currentUser } = useContext(UserContext);

  const handleLogout = () => {
    fetch('/logout', {
      method: "DELETE"
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
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
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
            LOGO
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
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
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
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button color="inherit" to="/" component={Link}>Home</Button>
            {/* <Button color="inherit" to="/trailheads" component={Link}>Trailheads</Button> */}
            {/* <Button color="inherit" to="/visits/:id" component={Link}>Places I've Visited (boolean)</Button> */}
            {/* <Button color="inherit" to="/visits/:id" component={Link}>Favorites</Button> */}
            <Button color="inherit" to="/visits/:id" component={Link}>Edit Form(tentative)</Button>
            <Button color="inherit" to="/visits" component={Link}>Visits List</Button>
          </Box>
          {/* TODO: username welcome! */}
          <span className='welcome-h1'>Welcome, *current user username* ! &nbsp;</span>
          {/* <span className='welcome-h1'>Welcome, {currentUser.username}! &nbsp;</span> */}
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
              {/* {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))} */}

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