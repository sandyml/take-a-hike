import React from 'react'
// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import VisitCard from './VisitCard';
// import { UserContext } from '../context/UserContext';
// import { EditForm } from './EditForm';

// [] TODO: useEffect for extra auth 
// [] TODO: tentative - add photo of self in navbar

export const VisitList = () => {
 
 const visits = useSelector((store) => store.visitsReducer);
 console.log(visits, "Visit redux state inside VisitList")

 // const [loading, setLoading] = useState(false);
 // const { handleLoginUser } = useContext(UserContext);

 // const navigate = useNavigate();

 // client-side auth
 // useEffect(() => {
 //  if (!loading && !handleLoginUser) {
 //   navigate('/login')
 //  }
 // }, [loading, handleLoginUser, navigate])

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
