import React from 'react';
import { useSelector } from 'react-redux';
import VisitCard from './VisitCard';

// [] TODO: useEffect for extra auth 
// [] TODO: tentative - add photo of self in navbar

export const VisitList = () => {

 const visits = useSelector((state) => state.visitsReducer);

 // const {visits} = useSelector((state) => state.visitsReducer);
 const visitCards = visits.map((visit, ix) =>
  <VisitCard key={ix} visit={visit} />
 );

 return (
  <div>
   <h2><center>Trailheads</center></h2>
   <center>
    {visitCards}
   </center>
  </div>
 );
};
