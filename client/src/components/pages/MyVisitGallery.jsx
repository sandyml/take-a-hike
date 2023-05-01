import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';
import { Grid, Stack } from '@mui/material';

import { mountain_image, mountain_imageURL } from '../styles/LandingCSS';
import { Parallax } from 'react-parallax';
import '.././index.css';


export const MyVisitGallery = ({ isLoading }) => {

  const { currentUser, loggedIn, visits } = useSelector((state) => state.usersReducer);

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
      <Parallax
        style={mountain_image}
        bgImage={mountain_imageURL}
        strength={680}
      >
        <Typography
          component='div'
          align='center'
          variant="h5"
          marginTop={1}
          sx={{ 
            marginTop: 2, 
            color: 'white'
           }}
          style={{
          fontSize: 99,
          color: 'white',
          fontFamily: 'aesthetica',
          letterSpacing: 0,
          fontWeight: 210
          }}
        >
          {currentUser.username}'s Gallery
        </Typography>
        <Stack direction="row" >
          <Grid
            direction='row'
            container
            justifyContent="flex-end"
            margin={6}
            marginRight={9}
          >
            {visits.map((current) =>
              <div key={current.id}>
                {current.hike.map((ch) =>
                  <img 
                  className='parks-img' 
                  key={ch.id} 
                  src={ch.image_url} 
                  alt='My Visit List Images' 
                  />
                  )}
              </div>
            )}
          </Grid>
        </Stack>
      </Parallax>
    </div>
  );
}