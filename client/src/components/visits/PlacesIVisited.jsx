import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VisitCard from '../hike/VisitCard';
import { Button } from '@mui/material';

export const PlacesIVisited = () => {
 const { visits } = useSelector((state) => state.usersReducer);
 console.log(visits, "visits Visits");

 const navigate = useNavigate();

 const myVisitCards = visits.map((visit) => <VisitCard key={visit.id} visit={visit} />)

 return (
  <>
   <Button component='div' align='left' onClick={() => navigate('/')}>Back</Button>
   <div className="objects-box">
    <div className="object">
     {myVisitCards}
    </div>
   </div>
  </>
 )
}