import { Box, Button, Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeaderNav } from '../navigation/HeaderNav';
import VisitCard from './VisitCard';

// [] TODO: useEffect for extra auth 

export const VisitList = ({ isLoading }) => {

 const { loggedIn } = useSelector((state) => state.usersReducer);
 const visits = useSelector((state) => state.visitsReducer);
 console.log(visits, "visits list reducer")

 const navigate = useNavigate();

 useEffect(() => {
  if (!isLoading && !loggedIn) {
   navigate('/login')
  }
 }, [isLoading, loggedIn, navigate])

 if (visits.errors) {
  return <div></div>
 }
 const visitCards = visits.map((visit, ix) =>
  <VisitCard key={ix} visit={visit} isLoading={isLoading} />
 );

 return (
  <div>
   <HeaderNav />
   <Button align='right' variant='body2' onClick={() => navigate('/homepage')}>Back to the homepage I go..</Button>
   <Typography align='center' variant='h3' className='etched-text'>Users Trailheads Visited</Typography>
{visitCards}
  </div>
 );
};
