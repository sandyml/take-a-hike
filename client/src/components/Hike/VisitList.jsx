import React from 'react'
import { useSelector } from 'react-redux';
import VisitCard from './VisitCard';

// [] TODO: useEffect for extra auth 
// [] TODO: tentative - add photo of self in navbar

export const VisitList = () => {

 const visits = useSelector((store) => store.visitsReducer);

 const visitCards = visits.map((visit, index) =>
  <VisitCard key={index} visit={visit} />
 )

 return (
  <div>
   <h2><center>Trailheads</center></h2>
   <center>
    {visitCards}
   </center>
  </div>
 )
}
