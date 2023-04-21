import { Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { Parallax } from 'react-parallax';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { HeaderNav } from '../navigation/HeaderNav';
import { mountain_image } from '../styles/LandingCSS';
import VisitCard from './VisitCard';


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
    //  debugger 
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
      {/* <Parallax
     style={mountain_image}
    //  bgImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
     strength={0}
    > */}
      {visitCards}
      {/* </Parallax> */}
    </div>
  );
};
