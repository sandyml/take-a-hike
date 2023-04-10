// import React, { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { headers } from '../../Global';

// export const EditForm = () => {
//  const [isLoading, setIsLoading] = useState(false);
//  const [visited, setVisited] = useState("");
//  const [visited_date, setVisitedDate] = useState("");
//  const { id } = useParams();

//   const navigate = useNavigate();

//   useEffect(() => {
//    fetch("/visits")
//      .then((resp) => resp.json())
//      .then((data) => {
//        console.log(data, "Visits in Visit Edit")
//      })
//      .catch((error) => console.log(error, "An error occurred.")
//      );
//  }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setIsLoading(true); 
//     fetch(`/visits/${id}`, {
//       method: 'PATCH',
//       headers,
//       body: JSON.stringify({
//         // trailhead_id,
//         visited_date,
//         visited
//       }),
//     })
//       .then((r) => r.json())
//       .then(data => {
//         setIsLoading(false);
//         // editVisitDate(data)
//         console.log(data, "visit has been updated(edited)!")
//       });
//       navigate(`/locations`)
//   }

//   return (
//     <section>
//       <h3> Edit Your Previous Visit Date </h3>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             id="hikes"
//             // defaultValue={trailhead_id}
//             // onChange={(e) => setReview(e.target.value)}
//           />
//         </div>
//         <div>


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
import EventIcon from '@mui/icons-material/Event';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useSelector } from 'react-redux';
import { headers } from '../../Global';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

// import Background from '../../assets/mountains.png'

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

// TODO: When hovering the blue should be different color 

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
  const [isLoading, setIsLoading] = useState(false);
  const [visited, setVisited] = useState("");
  const [visited_date, setVisitedDate] = useState("");
  const [errors, setErrors] = useState([]);
  const { id } = useParams();

  const navigate = useNavigate();

  // const visit = useSelector((store) => store.visitssReducer);
  // console.log("inside editForm component!", visit);

    useEffect(() => {
   fetch('/visits')
     .then((resp) => resp.json())
     .then((data) => {
       console.log(data, "Visits in Visit Edit")
     })
     .catch((error) => console.log(error, "An error occurred.")
     );
 }, []);

 function handleSubmit(e) {
      e.preventDefault();
      setIsLoading(true); 
      fetch(`/visits/${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
          // trailhead_id,
          visited_date,
          visited
        }),
      })
        .then((r) => r.json())
        .then(data => {
          setIsLoading(false);
          // editVisitDate(data)
          console.log(data, "visit has been updated(edited)!")
        });
        navigate(`/visits`)
    }

  return (
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
            <EventIcon />
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
                  name="trailname"
                  required
                  fullWidth
                  id="firstName"
                  label="trailname"
                  // value={username}
                  // onChange={(e) => setUsername(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  color="neutral"
                  name="date"
                  label="date"
                  type="text"
                  id="date"
                  placeholder="DD-MM-YYYY"
                  autoComplete="new-date"
                  // value={date}
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
  );
};