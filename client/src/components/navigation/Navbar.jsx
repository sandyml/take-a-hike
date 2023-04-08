import React from 'react';
import { Link } from 'react-router-dom';
// import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@mui/material/Box';

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

export const Navbar = () => {
  // const classes = useStyles();

  // const loggedInLinks = () => {
  //   return (
  //     <>
  //       <Button color="inherit" to="/" component={Link}>Home</Button>
  //       <Button color="inherit" to="/parks" component={Link}>ParkList</Button>
  //       <Button color="inherit" to="/#" component={Link}>Logout</Button>
  //     </>
  //   )
  // }


  // const loggedOutLinks = () => {
  //   return (
  //     <>
  //       <Button color="inherit" to="/" component={Link}>Home</Button>
  //       <Button color="inherit" to="/signup" component={Link}>SignUp</Button>
  //       <Button color="inherit" to="/login" component={Link}>Login</Button>
  //     </>
  //   )
  // }

  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Toolbar>
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
              SOMETRAILS
            </Typography>

            <Typography variant="h2">
              <Button variant="contained" color="inherit" to="/" component={Link}>Home</Button>
              <Button variant="contained" color="inherit" to="/signup" component={Link}>SignUp</Button>
              <Button variant="contained" color="inherit" to="/login" component={Link}>Login</Button>
              <Button variant="contained" color="inherit" to="/visits/:id/edit" component={Link}>Edit Form(tentative)</Button>
            </Typography>
            {/* {loggedIn ? loggedInLinks() : loggedOutLinks()} */}
          </Toolbar>
        </Toolbar>
      </Box>
    </AppBar>
  )
}