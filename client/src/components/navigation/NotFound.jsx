import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '.././index.css'
import NotFoundLanding from './NotFoundLanding';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => navigate('/')}>
        Take me back
      </Button>
      <NotFoundLanding />
    </>
  )
}

export default NotFound;