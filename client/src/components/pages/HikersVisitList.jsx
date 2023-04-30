import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VisitCard from './VisitCard';

import { Button, CssBaseline, Typography } from '@mui/material';

export const HikersVisitList = ({ isLoading }) => {

  // const { loggedIn, currentUser } = useSelector((state) => state.usersReducer);
  const visits = useSelector((state) => state.visitsReducer);

  console.log(visits, "Visit List")

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!isLoading && !loggedIn) {
  //     navigate('/visits')
  //   }
  // }, [isLoading, loggedIn, navigate])

  // if (visits.errors) { 
  //   return <div>Error!</div>
  // }

  const visitCards = visits.map((visit, ix) =>
    <VisitCard key={ix} visit={visit} isLoading={isLoading} />
  );

  return (
    <div id='visitlist-div'>
      <center>

        <Button
          style={{ display: 'flex' }}
          align='left'
          variant='body1'
          component={'div'}
          id='button-visitlist'
          onClick={() => navigate('/')}>
          Go back to homepage
        </Button>
        <CssBaseline />

        <Typography
        style={{
          marginLeft: 8,
          display: 'flex',
          fontSize: 90,
          color: 'white',
          fontFamily: 'aesthetica',
          letterSpacing: 0,
          fontWeight: 260,
        }}
        align='left'
        component={"h2"}
        gutterBottom>
        Places Hikers has Visited
      </Typography>

        <div className='visit-list-scrollbar' >
          <Typography component={'div'}>
            {visitCards}
          </Typography>
        </div>

      </center>
    </div>
  );
};
