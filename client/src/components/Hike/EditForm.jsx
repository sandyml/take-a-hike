import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { headers } from '../../Global';

// import { setErrors, errors } from '../actions/errors';
import { editVisit } from '../actions/visits';
// mui 
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import EditCalendarIcon from '@mui/icons-material/EditCalendar';

// users/:user_id/visits {user_id} useParams

export const EditForm = () => {
  const { visited_date, trailhead_id, trailhead } = useSelector((state) => state.visitsReducer);
  // const { currentUser, loggedIn } = useSelector((state) => state.usersReducer)
  // const errors = useSelector((state) => state.errorsReducer.errors);

  const [isLoading, setIsLoading] = useState(false);
  // const [date, setDate] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editVisit(id, setIsLoading, trailhead_id, trailhead, visited_date, navigate))
  }

  console.log(trailhead_id, "trailhead editform")
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>

      <ThemeProvider theme={theme}>
        {/* <img src={Background} className="bg-image" alt="background" /> */}
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
            <Avatar sx={{ m: 1, bgcolor: 'beige.main' }}>
              <EditCalendarIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Change Visit Date
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    color="neutral"
                    autoComplete="given-name"
                    name="name"
                    required
                    fullWidth
                    id="name"
                    label="name"
                    defaultValue={trailhead}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <TextField */}
                  {/* // required
                  // fullWidth
                  // color="neutral"
                  // name="date"
                  // label="date"
                  // type="text"
                  // id="date"
                  // placeholder="MM-DD-YYYY"
                  // autoComplete="new-date"
                  // defaultValue={visited_date} */}
                  {/* // onChange={(e) => setDate(e.target.value)} */}
                  {/* /> */}
                  <DatePicker
                    required
                    fullWidth
                    color="neutral"
                    name="date"
                    // label="date"
                    type="text"
                    id="date"
                    // placeholder="MM-DD-YYYY"
                    autoComplete="new-date"
                    defaultValue={visited_date}
                    // onChange={(e) => setDate(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="neutral"
                sx={{ mt: 3, mb: 2 }}
                value="Update Review"
              >{isLoading ? "Loading..." : "Submit"}
              </Button>
              {/* {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )} */}
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.neutral" align="center" {...props}>
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
      beige: {
        main: '#FODCD9',
        contrastText: '#fff',
      },
    },
  });