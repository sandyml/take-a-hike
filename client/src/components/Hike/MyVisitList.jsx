import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { Button, Grid, Stack } from '@mui/material';

import { mountain_image } from '../styles/LandingCSS';
import { Parallax } from 'react-parallax';
import '.././index.css';


export const MyVisitList = ({ isLoading }) => {

  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [isLoading, loggedIn]);

  if (currentUser === null) {
    return <div></div>
  }

  return (
    <div>
      <Button
        size="small"
        component='div'
        sx={{ fontFamily: 'Google Sans, Roboto, arial, sans-serif', borderRadius: 20, color: 'black' }}
        onClick={() => navigate('/')}
      >
       Back
      </Button>
      <Parallax
        style={mountain_image}
        bgImage="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80"
        strength={680}
      >
        <Typography component='div' align='center' variant="h5" marginTop={1} sx={{ marginTop: 2, fontFamily: 'Google Sans, Roboto, arial, sans-serif', color: 'white' }}>{currentUser.username}'s Gallery</Typography>
        <Stack direction="row" >

          <div className="objects-box">
            <div className="object">

            </div>
          </div>
          <Grid container justifyContent="flex-end" margin={5} marginLeft={-2}>
            {/* <div className='card-my-visit'> */}
            {
              currentUser.visits.map((current) => <div key={current.id}>
                {current.hike.map((ch) =>
                  <img className='parks-img' key={ch.id} src={ch.image_url} alt='' />)}
              </div>
              )}
            {/* </div> */}
          </Grid>
        </Stack>
      </Parallax>
    </div>
  );
}