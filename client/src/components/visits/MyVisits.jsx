import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import VisitCard from '../hike/VisitCard';

import { Button, createTheme, ThemeProvider } from '@mui/material';

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
    black: {
      main: '##000000',
      contrastText: '#fff',
    },
  },
});

export const MyVisits = () => {
  const { visits } = useSelector((state) => state.usersReducer);
  console.log(visits, "visits Visits");

  const navigate = useNavigate();

  const myVisitCards = visits.map((visit) => <VisitCard key={visit.id} visit={visit} />)

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button component='div' align='left' color='black' onClick={() => navigate('/homepage')} >Back</Button>
        <center>
          <h1>My Visits ONLY</h1>
          {myVisitCards}
        </center>
      </div>
    </ThemeProvider>
  )
}
