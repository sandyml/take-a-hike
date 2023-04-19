import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { headers } from '../../Global';

// mui 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { signupUser } from '../actions/users';

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
    lightersage: {
      main: '#C3CDBF',
      contrastText: '#fff',
    },
  },
});

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const errors = useSelector((state) => state.errorsReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signupUser(setIsLoading, headers, username, email, password, navigate));

    // setUsername("");
    // setEmail("");
    // setPassword("");
    // setErrors([]);
  }

  // useEffect(() => {
  //   if(!loading && loggedIn) {
  //     navigate("/")
  //   }
  //   return () => {
  //     setErrors([])
  //   }
  // }, [loading, loggedIn, navigate, setErrors]);

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

          <Avatar sx={{ m: 1, bgcolor: 'lightersage.main' }}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Please Create An Account
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
                <TextField
                  required
                  fullWidth
                  color="neutral"
                  name="password"
                  label="Confirm Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" onClick={togglePassword} />}
                  label="Show Password"
                />
              </Grid>
            </Grid>

            By creating an account you agree to our
            <Link color="inherit" href="/termsandconditions"> &nbsp;Terms & Privacy </Link>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="neutral"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading ? "Loading..." : "Signup"}
            </Button>

            {errors.length > 0 && (
              <ul style={{ color: "red" }}>
                {errors.map((error, index) => (
                  <li key={index}>{error}</li>
                  ))}
              </ul>
            )}

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
      <img src='https://media3.giphy.com/media/JB7gGCFk47LOURvjci/giphy.gif?cid=ecf05e473ogrjno7saew4q3wh5uufv0aq48c7qxtj54hxbw0&rid=giphy.gif&ct=s' alt='shoe' className='direction' />
      </Container>
    </ThemeProvider>
  );
};