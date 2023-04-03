// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export const Signup = () => {
//   const [passwordShown, setPasswordShown] = useState(false)

//   const togglePassword = () => {
//     setPasswordShown(!passwordShown)
//   };

//   return (
//     <div>
//       Signup
//       <h1>Signup Form</h1>
//       <form>
//         <h2>Create An Account</h2>
//         <span>Username</span>
//         <input
//           type='text'
//           id='username'
//           placeholder='Create Username'
//         // value={username}
//         // onChange={handleChange}
//         // required={true} 
//         />

//         <span>Email</span>
//         <input
//           type='email'
//           id='email'
//           placeholder='Create Email'
//         // value={username}
//         // onChange={handleChange}
//         // required={true} 
//         />

//         <span>Password</span>
//         <input
//           placeholder="Create Password"
//           id='password'
//           // value={password}
//           // onChange={handlePassword}
//           autoComplete="current-password"
//         // type={passwordShown ? "text" : "password"}
//         // required={true}
//         />
//         <span>Confirm Password</span>
//         <input
//           placeholder="Confirm Password"
//           id='password'
//           // value={passwordConfirmation}
//           // onChange={handleConfirmPassword}
//           autoComplete="current-password"
//         // type={passwordShown ? "text" : "password"}
//         // required={true}
//         />

//         <button onClick={togglePassword}>Show Password</button>
//         <p>By creating an account you agree to our
//           <Link to="/termsandconditions">&nbsp;Terms & Privacy</Link>
//         </p><br />
//         <button type="submit" value="Submit" className="form-button">Register</button>

//         {/* TO DO: CHECK LINKS  
//         <p>
//          Already have an account? &nbsp;
//           <Link to="/login" className='signup'>
//             Login
//           </Link>
//         </p> */}
//         {/* <br /> */}
//         {/* <div>
//           { errors }
//         </div> */}

//       </form>
//     </div>
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

export const Signup = () => {
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
            Please Create An Account
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
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Confirm Password"
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Login
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