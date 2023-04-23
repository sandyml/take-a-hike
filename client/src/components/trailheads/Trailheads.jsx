import React from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { TrailheadCard } from './TrailheadCard';
import '.././index.css'

import { BottomNavigation, Button, Typography } from '@mui/material';

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
    return (
      <div>
        <center>
          {/* make it lower */}
          <BottomNavigation />
          <img className='loading' 
          src="https://media0.giphy.com/media/UrEfC5EKRp4eQZdLSS/giphy.gif?cid=6c09b9529c716e9af32d817070c701b08bf924ca8b329f02&rid=giphy.gif&ct=s"
          alt='trailheads-alt'/>
        </center>
      </div>
    )
  } else {

    const trailheadCards = trailheads.map((th) =>
      <TrailheadCard
        key={th.id}
        th={th}
        isLoading={isLoading}
      />
    )

    return (
      <div>
        <Typography
          component={'div'}
          align='center'
          variant='h2'
          style={{ display:'flex', justifyContent:'center' }}
          >
          Trailheads
        </Typography>
        <br />
        <Button
          style={{ display:'flex', justifyContent:'center' }}
          align='left'
          variant='body1'
          onClick={() => navigate('/homepage')}>
          Go back to homepage
        </Button>
        <br /><br />
        {trailheadCards}
      </div>
    )
  }
};