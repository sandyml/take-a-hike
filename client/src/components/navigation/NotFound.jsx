// import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '.././index.css'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <center><h2 className='etched-text'>No Hike Routes Here. Not Found.</h2></center><br />
      {/* <a href='/' target="_parent">Go back to homepage</a> */}
      <button onClick={() => navigate('/')}>Go back to homepage</button>
      <div className="box-example">
      </div>
    </>
  )
}

export default NotFound;