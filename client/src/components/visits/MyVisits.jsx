import React from 'react';
import { useSelector } from 'react-redux';
import VisitCard from '../hike/VisitCard';

export const MyVisits = () => {
 const { visits } = useSelector((state) => state.usersReducer);
 console.log(visits, "visits Visits");

 const myVisitCards = visits.map((visit) => <VisitCard key={visit.id} visit={visit}/> )

  return (
    <div>
     <h1><center>MyVisits</center></h1>
     {myVisitCards}
     </div>
  )
}
