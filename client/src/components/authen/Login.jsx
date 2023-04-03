// import React, { useState } from 'react'
// import { Link } from 'react-router-dom';

// // TODO: logout, handleSubmit
// // form 

// export const Login = () => {
//   // const [loggedIn, setLoggedIn] = useState(false);
//   // const [user, setUser] = useState(null);
//   const [passwordShown, setPasswordShown] = useState(false);

//   const togglePassword = () => {
//     setPasswordShown(!passwordShown)
//   }

//   // TODO: fetch for login url 
//   // useEffect(() => {
//   //   // auto-login
//   //   fetch("/me").then((r) => {
//   //     if (r.ok) {
//   //       r.json().then((user) => setUser(user));
//   //     }
//   //   });
//   // }, []);

//   return (
//     <>
//       <h1>Login</h1>
//       <form 
//       // onSubmit={handleSubmit} 
//       className='main-form-log' action='#!' id='main-form'>
//         <h2>Login to your account</h2>
//           <label htmlFor='username'>Username</label>
//           <input
//             type='text'
//             id='username'
//             placeholder="Enter Username"
//             autoComplete="off"
//             // value={account_name}
//             // onChange={handleUsername}
//           />

//           <label htmlFor='email'>Email</label>
//           <input
//             type='text'
//             id='email'
//             placeholder="Enter Email"
//             autoComplete="current-password"
//             // value={email}
//             // onChange={handleEmail}
//           />

//           <label htmlFor='password'>Password</label>
//           <input
//             placeholder="Enter Password"
//             id='password'
//             // value={password}
//             // onChange={handlePassword}
//             type={passwordShown ? "text" : "password"}
//           />

//         <button onClick={togglePassword}>Show Password</button>
//         <button type='submit'>Login</button>

//         <p>
//           Don't have an account?  &nbsp;
//           <Link to="/signup" className='signup'>
//             Signup
//           </Link>
//         </p><br />
//         {/* <div>{errors}</div> */}

//       </form>

//     </>
//   )
// }

import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © Sandra Yun '}
      <Link color="inherit" href="https://github.com/sandyml/take-a-hike">
        Github
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const togglePassword = () => {
    setShowPassword(!showPassword)
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Please Login
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="Username"
                  required
                  fullWidth
                  id="firstName"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              {/* TODO: Show password  */}
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" onClick={togglePassword} />}
                  label="Show Password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Don't have an account? Signup
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
};