import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { editVisit } from '../actions/visits';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import '.././index.css'

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import { TextField } from '@mui/material';

// users/:user_id/visits {user_id} useParams
// TODO: Add errors in edit form 

export const EditForm = () => {
  const [visited_date, setVisitedDate] = useState("");

  const visits = useSelector((state) => state.visitsReducer);
  const errors = useSelector((state) => state.errorsReducer);

  const [isLoading, setIsLoading] = useState(false);

  // useEffect cleanup function 

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editVisit(id, setIsLoading, visited_date, navigate))
  };
  
  const vis = visits.find(visit => visit.id === parseInt(id, 10));
  // const vi = visits.find(vis => vis.id > 10)
  console.log(vis, "visit find")
// debugger
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
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                <Grid container spacing={2}>

                  <Grid item xs={12}>
                    <center>
                    <h2>{vis.trailhead.name}</h2>
                    </center>
                  </Grid>
                  <Grid>
                    <center>
                    <h2>{vis.hike.map(visit => 
                      <img src={visit.image_url} alt="hike-img-visit" className='hike-img-visit' />)}</h2>
                    </center>
                  </Grid>
                  <Grid item xs={12}>
                  <h2>{vis.trailhead.trailhead_id}</h2>
                  {/* <TextField
                      color="neutral"
                      autoComplete="given-name"
                      name="trailhead name"
                      required
                      fullWidth
                      id="trailname"
                      label="trailhead name"
                      disabled
                      defaultValue={vis.trailhead.trailhead_id}
                      // onChange={(e) => setTrailhead(e.target.value)}
                      autoFocus
                    /> */}
                    <center>
                    initial date: &nbsp; {vis.visited_date}
                      {/* <input
                        id="initial date"
                        defaultValue={visit.visited_date}
                        disabled
                      /> */}
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
                      value={visited_date}
                      onChange={(e) => setVisitedDate(e.target.value)}
                      autoFocus
                    />
                    {/* <DatePicker
                      required
                      fullWidth
                      color="neutral"
                      name="visited_date"
                      type="text"
                      id="visited_date"
                      autoComplete="new-date"
                      value={visited_date}
                      selected={visited_date}
                      onChange={(e) => setVisitedDate(e.target.value)}
                      selectsStart  
                      visited_date={visited_date}
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