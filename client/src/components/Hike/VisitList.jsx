import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VisitCard from './VisitCard';

// [] TODO: useEffect for extra auth 
// [] TODO: tentative - add photo of self in navbar

export const VisitList = () => {
 const [loading, setLoading] = useState(true);

 const visits = useSelector((state) => state.visitsReducer);
 const loggedIn = useSelector((state) => state.usersReducer);

 const navigate = useNavigate();
 // const dispatch = useDispatch();

//  useEffect(() => {
//   if (!loading && !loggedIn) {
//     navigate('/')
//   }
//   // eslint-disable-next-line
// }, [loading, loggedIn, navigate]);

 const visitCards = visits.map((visit, index) =>
  <VisitCard key={index} visit={visit} />
 )

 return (
  <div>
   <h2><center>Trailheads</center></h2>
   <center >
    {visitCards}
   </center>
  </div>
 )
}
