import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VisitCard from './VisitCard';

import { Button, Typography } from '@mui/material';

export const VisitList = ({ isLoading }) => {

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
          style={{ display:'flex', justifyContent:'center' }}
          align='left'
          variant='body1'
          component={'div'}
          id='button-visitlist'
          onClick={() => navigate('/')}>
          Go back to homepage
        </Button>

        TESTING!

        <div className='visit-list-scrollbar' >
        <Typography component={'div'}>
        {visitCards}
        </Typography>
        </div>

      </center>
  </div>
  );
};
