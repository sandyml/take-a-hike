import React, { useContext, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import VisitCard from './VisitCard';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { EditForm } from './EditForm';

// [] TODO: card -> visitCards
// [] TODO: useEffect for extra auth 

export const VisitList = () => {
 const visits = useSelector((store) => store.visitsReducer);
 const [loading, setLoading] = useState(false);
 const { handleLoginUser } = useContext(UserContext);

 const navigate = useNavigate();

 console.log(visits, "Visit redux state inside VisitList")

 // client-side auth
 useEffect(() => {
  if (!loading && !handleLoginUser) {
   navigate('/login')
  }
 }, [loading, handleLoginUser, navigate])

 const visitCards = visits.map((visit, index) =>
  <VisitCard key={index} visit={visit} />
 )
 
 const editCard = visits.map((visit, index) =>
  <EditForm key={index} visit={visit} />
 )

 return (
  <div>
   <h2>Places I've been too (visited)</h2>
   {visitCards}
  </div>
 )
}
