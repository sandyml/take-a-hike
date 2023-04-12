import React, { useContext, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { headers } from '../../Global';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch, useSelector } from 'react-redux';
import { editVisit } from '../actions/visits';
// users/:user_id/visits {user_id} useParams

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
  },
});

export const EditForm = () => {
  const { loggedIn, currentUser } = useContext(UserContext);

  const { visited_date } = useSelector((state) => state.visitsReducer);
  const visits = useSelector((store) => store.visitsReducer);
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(editVisit(headers, visited_date, navigate))
  }

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
            <Avatar sx={{ m: 1, bgcolor: 'neutral.main' }}>
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
                    placeholder="Will be set to default Value of hike name"
                    // defaultValue={visits.name}
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
                    onChange={(e) => setDate(e.target.value)}
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
              {errors.length > 0 && (
                <ul style={{ color: "red" }}>
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              )}
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
    </LocalizationProvider>
  );
};