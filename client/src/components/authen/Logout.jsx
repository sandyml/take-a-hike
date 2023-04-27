import { Button } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LogoutLanding from './LogoutLanding'

export const Logout = ({ isLoading }) => {
 const {  loggedIn } = useSelector((state) => state.usersReducer);

 const navigate = useNavigate();

 useEffect(() => {
  if (!isLoading && !loggedIn) {
   navigate('/login')
  }
  // eslint-disable-next-line
 }, [isLoading, loggedIn])

  return (
    <div>
     <Button onClick={() => navigate('/login')}>
      Take me to login
     </Button>
     <LogoutLanding/>
    </div>
  )
}
