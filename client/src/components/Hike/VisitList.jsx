import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VisitCard from './VisitCard';

// [] TODO: useEffect for extra auth 

export const VisitList = ({ isLoading }) => {

 const visits = useSelector((state) => state.visitsReducer);
 const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);

 const navigate = useNavigate();

 useEffect(() => {
  if (!isLoading && !loggedIn) {
   navigate('/login')
  }
 }, [isLoading, loggedIn, navigate])

 const visitCards = visits.map((visit, ix) =>
  <VisitCard key={ix} visit={visit} isLoading={isLoading} />
 );

 return (
  <div>
   <h2 className='etched-text'><center>Users Trailheads Visited</center></h2>
   {currentUser && currentUser.id ?
    <center>
     {visitCards}
    </center>
    : <h1>Please Login In To Access Account</h1>
   }
  </div>
 );
};
