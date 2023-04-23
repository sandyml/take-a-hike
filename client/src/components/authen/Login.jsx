import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../actions/users';
import { headers } from '../../Global';
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
import { Parallax } from 'react-parallax';
import { sierra_image } from '../styles/LandingCSS';

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
  },
});

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.errorsReducer);
  const { currentUser } = useSelector((state) => state.usersReducer);

  // TODO: Remove useEffect to test out if current_user is already logged in with error messages "You are already logged in!"
  // useEffect(() => {
  //   if (!loading && loggedIn) {
  //     navigate('/')
  //   }
  //   return () => {
  //     dispatch(clearErrors())
  //   }
  // }, [loading, loggedIn, navigate, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginUser(setLoading, headers, username, email, password, navigate))
    setUsername("");
    setEmail("");
    setPassword("");
  }

  const togglePassword = () => {
    setShowPassword(!showPassword)
  };

  return (
    <ThemeProvider theme={theme}>
      {
        currentUser && currentUser.id ?
          <Button align='right' variant='body1' onClick={() => navigate('/homepage')}>
            Come back home! You're already logged in!
          </Button> : null
      }
      <Parallax
        style={sierra_image}
        display="flex"
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
            }}
          >

            <Avatar sx={{ m: 1, bgcolor: 'lightersage.main' }}>
              <LockOutlinedIcon />
            </Avatar>

            <Typography component="h1" variant="h5">
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
                {loading ? "Loading..." : "Login"}
              </Button>

              {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}

              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/signup" variant="body2">
                    Don't have an account? Signup
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>

        </Container>
        {/* <img 
      src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDU1MGMyYjJlYzU5MDA4MjQwNTI3OWMzYmEwZmQ3M2M2NDZiMjdhMCZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PXM/y3dZQEKkbOwJPSSApQ/giphy.gif" 
      alt="gif" 
      className='direction'
      /> */}
      </Parallax>
    </ThemeProvider>
  );
};