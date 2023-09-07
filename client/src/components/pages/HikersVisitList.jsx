import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VisitCard from './VisitCard';

import { AppBar, Button, CssBaseline, Toolbar, Typography } from '@mui/material';
import { Copyright } from './MyVisits';

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
      <AppBar position="sticky" id='appbar'>
          <Toolbar>
            <Button 
            top={8}
            style={{ color: 'white' }}
            onClick={() => navigate('/')} 
            color="inherit"
            >
            
              Go back to homepage
              </Button>
            <Typography
            style={{
              color: 'white',
              marginLeft: 280,
              align: 'center',
              fontSize: 90,
              fontFamily: 'aesthetica',
              letterSpacing: 0,
              fontWeight: 260,
            }}
             component="h2"
             variant="h6"
             >
              Places Hikers has Visited
              </Typography>
          </Toolbar>
        </AppBar>
        <CssBaseline />
          <Typography component={'div'}>
            {visitCards}
          </Typography>
      </center>
      <Copyright />
    </div>
  );
};
