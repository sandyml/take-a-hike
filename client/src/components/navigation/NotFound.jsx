import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '.././index.css'

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <center><h2 className='etched-text'>No Hike Routes Here. Not Found.</h2></center><br />
      <Button onClick={() => navigate('/homepage')}>Go back to homepage</Button>
      <div className="box-example">
      </div>
    </>
  )
}

export default NotFound;