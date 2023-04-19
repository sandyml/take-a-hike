import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import TrailheadCarousel from './TrailheadCarousel';
// import { HikeCarousel } from './HikeCarousel';

export const Home = ({ isLoading }) => {

  const { loggedIn } = useSelector((state) => state.usersReducer);
 
  const navigate = useNavigate();
  
  useEffect(() => {
   if (!isLoading && !loggedIn) {
    navigate('/login')
   }
  }, [isLoading, loggedIn, navigate])

  return (
    <div>
      <h1>
        <center>
        {/* <HikeCarousel /> */}
        <TrailheadCarousel />
        </center>
      </h1>
    </div>
  )
}