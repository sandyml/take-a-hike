import React from 'react'
import { useSelector } from 'react-redux';
import VisitCard from './VisitCard';

// [] TODO: card -> visitCards
// [] TODO: useEffect for extra auth 

export const VisitList = () => {
 const visits = useSelector((store) => store.visitsReducer);

 console.log(visits, "Visit redux state inside VisitList")

 // client-side auth
 // useEffect(() => {
 //  if (!loading && !loggedIn) {
 //   navigate('/login')
 //  }
 // }, [loading, loggedIn, navigate])

 // debugger
 // [] TODO: delete visit inside VisitCards
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
