import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Copyright } from '../copyright/Copyright';
import BottomNavigation from '@mui/material/BottomNavigation';

// TODO: Customize a bit more 

export const MyVisitList = ({ isLoading }) => {
  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);
  console.log(currentUser, "currentUser");

  const navigate = useNavigate();

  useEffect(() => {
    if(!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate]);

  if (currentUser === null) {
    return <div></div>
  }

  return (
    <div>
      <center><h1>Trailheads I've Visited</h1>

        <h3> {currentUser.username}'s Account</h3>
        
        <div>
          {currentUser.visits.map((current, cid) =>
            <div key={cid}><h2>{current.trailhead.name}</h2>
              {current.trailhead.location}<br /><br />{' '}you visited on: {current.visited_date}<br />
            </div>)}
        </div><br/>

        <BottomNavigation sx={{ height: 250 }}/>
        <Copyright />

      </center>
    </div>
  )
}