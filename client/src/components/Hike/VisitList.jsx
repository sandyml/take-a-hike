import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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
   <h2 className='etched-text'>
    <center>Users Trailheads Visited</center>
   </h2>
   <center>
    {visitCards}
   </center>
  </div>
 );
};
