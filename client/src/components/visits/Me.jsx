import React, { useEffect } from 'react';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button, Typography, createTheme } from '@mui/material';

import { mountain_image3 } from '../styles/LandingCSS';
import { Parallax } from 'react-parallax';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
 typography: {
   subtitle1: {
     fontSize: 20,
   },
   poster: {
     fontWeight: 500,
   },
   button: {
     fontStyle: 'Fredoka',
   },
 },
});

export default function Me({ isLoading }) {

 const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);
 console.log(currentUser, "currentUser")

 const navigate = useNavigate();

 useEffect(() => {
  if (!isLoading && !loggedIn) {
   navigate('/login')
  }
 }, [isLoading, loggedIn, navigate]);

 if (currentUser === null) {
  return <div></div>
 }

 return (
  <ThemeProvider theme={theme}>
   <Button onClick={() => navigate('/')}>Back</Button>
   <Parallax
    style={mountain_image3}
    bgImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
    strength={680}
   >
    
   <Typography style={{ fontFamily: 'Fredoka, sans-serif' }} component='div' align='center' margin={2}>Places {currentUser.username}'s Visited</Typography>

    <Stack align='left' direction={{ xs: 'column', sm: 'row' }}
     spacing={{ xs: 1, sm: 2, md: 0 }}
     justifyContent="center"
     alignItems="center">
     {currentUser.visits.map((current) => <div key={current.id}>
      {current.hike.map((ch) =>
       <img className='parks-img' key={ch.id} src={ch.image_url} alt='' />)}
     </div>
     )}
    </Stack>

   </Parallax>
   </ThemeProvider>
 );
}