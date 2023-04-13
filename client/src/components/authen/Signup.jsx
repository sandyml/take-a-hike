import React, { useState, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { headers } from '../../Global';

// mui 
import { ThemeProvider } from '@mui/material/styles';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
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
// import { makeStyles } from '@material-ui/core';

// TODO: Remove useContext when done w Redux 
import { UserContext } from '../context/UserContext';
// import { setErrors, clearErrors, errors } from '../actions/errors'; // check errors in reducer and action 

// const useStyles = makeStyles(() => ({
//   root: {
//     flexGrow: 1,
//   },
//   title: {
//     flexGrow: 1,
//   },
//   sage: {
//     backgroundColor: "#6E7F62"
//   },
//   lightSage: {
//     backgroundColor: "#919F88"
//   },
//   lighterSage: {
//     backgroundColor: "#C3CDBF"
//   },
//   grey: {
//     backgroundColor: "#E0CD9"
//   },
// }));  

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

// const theme = createTheme({
//   status: {
//     danger: '#e53e3e',
//   },
//   palette: {
//     primary: {
//       main: '#0971f1',
//       darker: '#053e85',
//     },
//     neutral: {
//       main: '#6E7F62',
//       contrastText: '#fff',
//     },
//     lightersage: {
//       main: '#C3CDBF',
//       contrastText: '#fff',
//     },
//   },
// });

export const Signup = () => {
  // const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { handleLoginUser } = useContext(UserContext);
  // const { handleAddUser, handleLoginUser } = useContext(UserContext);
  const { loggedIn, setCurrentUser } = useSelector((state) => state.usersReducer)
  // const { loggedIn, setCurrentUser } = useSelector((state) => state.usersReducer)

  const handleSubmit = (e) => {
    // setErrors([]);
    e.preventDefault();
    setIsLoading(true);
    fetch('/signup', {
      method: 'POST',
      headers,
      body: JSON.stringify({ 
        username, 
        email,
        password 
      })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if(data.errors) {
          console.log(errors, "Signup: errors")
          dispatch((setErrors(data.errors)))
        } else {
          // handleAddUser(data)
          handleLoginUser(data)
          setCurrentUser(data)
          navigate('/visits')
        }
      })
  }

  useEffect(() => {
    if(!loading && loggedIn) {
      navigate("/")
    }
    return () => {
      setErrors([])
    }
  }, [loading, loggedIn, navigate, setErrors]);

  const togglePassword = () => {
    setShowPassword(!showPassword)
  };

  return (
    <ThemeProvider>
    {/* <ThemeProvider theme={theme}> */}
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
            <Link color="inherit" href="/termsandconditions">&nbsp;Terms & Privacy</Link>
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
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
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
      </Container>
    </ThemeProvider>
  );
};