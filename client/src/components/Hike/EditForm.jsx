import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editVisit } from '../actions/visits';
import '.././index.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import EditCalendarIcon from '@mui/icons-material/EditCalendar';

// users/:user_id/visits {user_id} useParams

export const EditForm = ({ isLoading }) => {
  const [visited_date, setVisitedDate] = useState("");

  const visits = useSelector((state) => state.visitsReducer);
  const errors = useSelector((state) => state.errorsReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editVisit(id, visited_date, navigate))
  };
  
  const vis = visits.find(visit => visit.id === parseInt(id, 10));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
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
            <Avatar sx={{ m: 1, bgcolor: 'beige.main' }}>
              <EditCalendarIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Change Visit Date
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <center>
                    <h2>{vis.trailhead.name}</h2>
                    </center>
                  </Grid>
                  <Grid >
                    <center>
                    <h2>{vis.hike.map(visit => 
                      <img key={visit.id} src={visit.image_url} alt="hike-img-visit" className='hike-img-visit' />)}</h2>
                    </center>
                  </Grid>
                  <Grid item xs={12}>
                  <h2>{vis.trailhead.trailhead_id}</h2>
                    <center>
                    initial date: &nbsp; {vis.visited_date}
                    </center>

                    <center>
                    <TextField
                      color="neutral"
                      autoComplete="given-name"
                      name="date"
                      required
                      fullWidth
                      id="name"
                      label="Date"
                      selected={visited_date}
                      value={visited_date}
                      onChange={(e) => setVisitedDate(e.target.value)}
                      autoFocus
                    />
                      {/* <DatePicker
                        label="Select date"
                        value={visited_date}
                        // onChange={(e) => setVisitedDate(e.target.value)}
                        onChange={(newValue) => setVisitedDate(newValue)}
                        textField={(props) => 
                          <TextField {...props} />
                        }
                       /> */}

                    </center>
                    <br /><br />
                  </Grid>
                </Grid>
              {/* ))} */}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="neutral"
                sx={{ mt: 3, mb: 2 }}
                value="Update Visitation"
              >{isLoading ? "Loading..." : "Submit"}
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="neutral"
                sx={{ mt: 3, mb: 2 }}
                value="Update Visitation"
                onClick={() => navigate('/visits')}
              >Cancel - Take me back
              </Button>

              {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                {errors.map((error) => (
                  <li key={error}>{error}</li>
                  ))}
                  </ul>
                )}

            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
};

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