import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import { loginUser } from '../actions/users';
import { headers } from '../../Global';

import { sierra_image } from '../styles/LandingCSS';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import { Button } from '@mui/material';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#6E7F62',
      contrastText: '#fff',
    },
    lightsage: {
      main: '#919F88',
      contrastText: '#fff',
    },
    lightersage: {
      main: '#C3CDBF',
      contrastText: '#fff',
    },
    floralWhite: {
      main: '#f5f5f5',
      contrastText: '#fff',
    },
  },
});

export const Login = ({ isLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.errorsReducer);
  const { currentUser } = useSelector((state) => state.usersReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(headers, username, email, password, navigate))
  };

  const togglePassword = () => {
    setShowPassword(!showPassword)
  };

  return (
    <ThemeProvider theme={theme}>
      {
        currentUser && currentUser.id ?
          <Button variant='body1' onClick={() => navigate('/')}>
            Come back home! You're already logged in!
          </Button> : null
      }
      <Parallax
        style={sierra_image}
        bgImage="https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        strength={300}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '200%'
            }}
          >

            <Avatar sx={{ m: 1, bgcolor: 'lightersage.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography
              style={{
                fontSize: 47.6,
                color: 'white',
                fontFamily: 'Playfair Display, serif',
                letterSpacing: 0,
                fontWeight: 200
              }}
              variant="h3"
              component="h2"
              className="center"
              gutterBottom>
             Please Login
            </Typography>

            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    color="neutral"
                    autoComplete="given-name"
                    name="Username"
                    required
                    fullWidth
                    id="firstName"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    color="neutral"
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    color="neutral"
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    autoComplete="new-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>

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
                color="neutral"
                sx={{ mt: 3, mb: 2 }}
              >
                {isLoading ? "Loading..." : "Login"}
              </Button>

              {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                  {errors.map((error) => (
                    <Typography 
                    id='errors'
                    component={'li'} 
                    fontSize={13} 
                    variant='body2' 
                    key={error}>
                      {error}
                      </Typography>
                  ))}
                </ul>
              )}

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signup" variant="h6" >
                    <Typography style={{ color: "white" }} component={'div'}>
                      Don't have an account? Signup
                    </Typography>
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Container>
      </Parallax>
    </ThemeProvider>
  );
};