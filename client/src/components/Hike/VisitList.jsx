import React from 'react'
import { useSelector } from 'react-redux';
import VisitCard from './VisitCard';

// [] TODO: useEffect for extra auth 
// [] TODO: tentative - add photo of self in navbar

export const VisitList = () => {
 
 const visits = useSelector((store) => store.visitsReducer);
 console.log(visits, "Visit redux state inside VisitList")

 const visitCards = visits.map((visit, index) =>
  <VisitCard key={index} visit={visit} />
 )

 return (
  <div>
   <h2>Places I've been too (visited)</h2>
   {visitCards}
  </div>
 )
}
