import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editVisit } from '../actions/visits';
import '.././index.css'

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Avatar, Box, Button, Card, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import EditCalendarIcon from '@mui/icons-material/EditCalendar';
// users/:user_id/visits {user_id} useParams

export const EditForm = () => {
  const [visited_date, setVisitedDate] = useState("");
  const [loading, setLoading] = useState(false);

  const visits = useSelector((state) => state.visitsReducer);
  const errors = useSelector((state) => state.errorsReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    dispatch(editVisit(id, visited_date, navigate))
  };

  const vis = visits.find(visit => visit.id === parseInt(id, 10));

  return (
    <div>
      <center>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Card style={{
                borderColor: "black",
                margin: 3,
                marginBottom: 7,
                marginTop: 10
              }}>
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
                  <Typography component={"h1"} variant="h5">
                    Change Visit Date
                  </Typography>
                  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
                    <Grid container spacing={2}>
                      <Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Typography component={"h2"} style={{ fontSize: 20 }}>
                          {vis.trailhead.name}
                          {vis.trailhead.trailhead_id}
                        </Typography>
                        <Typography style={{ fontSize: 12 }}>
                          initial date: &nbsp; {vis.visited_date}
                        </Typography>

                        <center>


                          {/* <TextField
                            color="neutral"
                            autoComplete="given-name"
                            name="date"
                            required
                            fullWidth
                            id="name"
                            label="DD/MM/YYY"
                            selected={visited_date}
                            value={visited_date}
                            onChange={(e) => setVisitedDate(e.target.value)}
                            autoFocus
                          /> */}
                          <br />
                          <DatePicker
                            style={{ color: 'green' }}
                            label="Select date"
                            value={visited_date}
                            onChange={(newValue) => setVisitedDate(newValue)}
                            textField={(props) =>
                              <TextField {...props} />
                            }
                          />

                        </center>
                        <br /><br />
                      </Grid>
                    </Grid>

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="neutral"
                      sx={{ mt: 3, mb: 2 }}
                      value="Update Visitation"
                    >
                      {loading ? "Loading..." : "Submit"}
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
              </Card>
            </Container>
          </ThemeProvider>
        </LocalizationProvider>
      </center>
    </div>
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
    dark: {
      main: '#01579b',
      contrastText: '#fff',
    },
  },
});