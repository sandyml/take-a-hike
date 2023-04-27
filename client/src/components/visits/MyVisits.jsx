import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import VisitCard from '../hike/VisitCard';
import '.././index.css';

import { Button, Typography } from '@mui/material';


export const MyVisits = () => {
  const { visits } = useSelector((state) => state.usersReducer);
  console.log(visits, "visits Visits");

  const navigate = useNavigate();

  const myVisitCards = visits.map((visit) => <VisitCard key={visit.id} visit={visit} />)

  return (
    <div>
      <center>

        <Button
          style={{ display: 'flex', justifyContent: 'center' }}
          align='left'
          variant='body1'
          component={'div'}
          onClick={() => navigate('/')}>
          Go back to homepage
        </Button>
        <Typography variant='h3'>
          My Visits Only
        </Typography>

        <div className='visit-list-scrollbar' >
          <Typography component={'div'}>
            {myVisitCards}
          </Typography>
        </div>

      </center>
    </div>
  )
};
