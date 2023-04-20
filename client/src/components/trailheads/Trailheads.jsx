import { BottomNavigation, Button, Typography } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Copyright } from '../copyright/Copyright';
import { HeaderNav } from '../navigation/HeaderNav';
import { TrailheadCard } from './TrailheadCard';

export const Trailheads = ({ isLoading }) => {
  const trailheads = useSelector((state) => state.trailheadsReducer);
  const { loggedIn } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate])

  if (trailheads.errors) {
    return <div></div>
  }

  const trailheadCards = trailheads.map((th) =>
    <TrailheadCard
      key={th.id}
      th={th}
      isLoading={isLoading}
    />
  )

  return (
    <div>
      {/* <HeaderNav /> */}
      <Typography align='center' variant='h2'>Trailheads All Users Has Visited</Typography><br/>
      <Button align='left' variant='body1' onClick={() => navigate('/homepage')}>Go back to homepage</Button><br /><br />
      {trailheadCards}
      <BottomNavigation/>
      <Copyright />
    </div>
  )
};