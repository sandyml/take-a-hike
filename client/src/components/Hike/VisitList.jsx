import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VisitCard from './VisitCard';

import { Button, Typography } from '@mui/material';


export const VisitList = ({ isLoading }) => {

  const { loggedIn } = useSelector((state) => state.usersReducer);
  const visits = useSelector((state) => state.visitsReducer);

  const navigate = useNavigate();

  const visitCards = visits.map((visit, ix) =>
    <VisitCard key={ix} visit={visit} isLoading={isLoading} />
  );

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/visits')
    }
  }, [isLoading, loggedIn, navigate])

  if (visits.errors) { 
    return <div></div>
  }

  return (
    <div>
      <center>
        
        <Button
          style={{ display:'flex', justifyContent:'center' }}
          align='left'
          variant='body1'
          component={'div'}
          onClick={() => navigate('/')}>
          Go back to homepage
        </Button>

        <div className='visit-list-scrollbar' >
        <Typography component={'div'}>
        {/* <Grid container justifyContent="flex-end" margin={5} marginLeft={-2}> */}
        {visitCards}
        {/* </Grid> */}
        </Typography>
        </div>

      </center>
  </div>
  );
};
