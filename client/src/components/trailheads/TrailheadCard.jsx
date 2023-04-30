import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import '.././index.css';

import { addVisit } from '../actions/visits';
import { Box, Button, Card, CardMedia, Grid, Typography } from '@mui/material';
import { FmdGoodRounded, Paid } from '@mui/icons-material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

export const TrailheadCard = ({ th, isLoading }) => {
  const [loading, setLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const { currentUser } = useSelector((state) => state.usersReducer);
  const { loggedIn } = useSelector((state) => state.usersReducer);
  const errors = useSelector((state) => state.errorsReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleSeeMap = () => {
    (showMap === false) ? setShowMap(true) :
      setShowMap(false);
  };

  const difficulties = th.difficulties.map(thd => thd.name);
  // console.log(difficulties.join(', '));
  const amenities = th.amenities.map((amenity, idxx) =>
    <div key={idxx}>
      <Typography align="center" color='inherit' component={'div'}>
        <DoneOutlinedIcon style={{ color: 'green', fontSize: 10 }} />{amenity}
      </Typography>
    </div>
  );
  // console.log(amenities.join('✓ '))

  const isInVisited = currentUser.visits.find((vi) => vi.trailhead_id === th.id);

  const handleAddToVisit = () => {
    setLoading(true);
    dispatch(addVisit(th, navigate))
  }

  useEffect(() => {
    if (!loading && !loggedIn) {
      navigate('/login')
    }
    // eslint-disable-next-line
  }, [loading, loggedIn])

  // if () {
  //   return <>Loading still...</>
  // }

  return (
    <Box>
      <Grid
        sx={{ flexGrow: 1 }}
        col={3}
        style={{
          justifyContent: 'center'
        }}
      >
        {th.hikes.map((hike) =>
          <Grid key={hike.id} >
            <Grid
              sx={{
                paddingRight: 2,
                paddingLeft: 2,
                paddingTop: 2,
                paddingBottom: 5
              }}
              item xs={1} md={12} sm={6}
              container
              justifyContent="center"
            // spacing={-0.01}
            // style={{ display: 'flex', justifyContent: 'center' }}
            >
              <Card
                sx={{
                  maxWidth: 593,
                  justifyContent: 'center'
                }}
              >
                <div align='right'>
                  <Button
                    sx={{
                      width: 100,
                      fontFamily: 'Google Sans, Roboto, arial, sans-serif'
                    }}
                    size='small'
                    variant="text"
                    disabled={!!isInVisited}
                    onClick={handleAddToVisit}
                  >
                    {/* {loading ? "Adding" : "Add To Visit"} */}
                    {loading ?
                      <LoadingButton
                        loading
                        loadingPosition="start"
                        startIcon={<SaveIcon />}
                        variant="text"
                      >
                        Save
                      </LoadingButton>
                      : "Add To Visit"}
                  </Button>
                </div><br />

                <CardMedia
                  sx={{ width: 593, height: 300 }}
                  image={hike.image_url}
                  title="hike images"
                />
                <Typography
                  component={'div'}
                  style={{
                    marginLeft: 10,
                    fontSize: 50,
                    marginBottom: 0,
                    fontWeight: 'bold',
                    color: 'black',
                    fontFamily: 'aesthetica',
                    letterSpacing: 0,
                    position: 'relative',
                    top: -320,
                    // display: 'flex',
                    // zIndex: 6,
                    justifyContent: 'left'
                  }}
                >{th.name}
                </Typography>
                {/* 
                <CardMedia
                  sx={{ width: 593, height: 300 }}
                  image={hike.image_url}
                  title="hike images"
                /> */}
                <Typography
                  align='center'
                  variant='body1'
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <FmdGoodRounded
                    style={{
                      color: 'red',
                      fontSize: 15
                    }}
                  />
                  {th.location}
                </Typography>

                {th.hikes.map((thh) =>
                  <Typography
                    key={thh.id}
                    variant='body1'
                    align='center'
                    component={'div'}
                  ><br />
                    <Typography
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: "Google Sans, Roboto, arial, sans-serif"
                      }}
                      component={'div'}
                    >

                      <Button onClick={toggleSeeMap}>Map | Directions</Button>
                      <>
                        {showMap ?
                          <div>
                            <iframe
                              src={th.direction}
                              width="600" height="450"
                              style={{ border: "0" }}
                              allowfullscreen=""
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                              title="hike google maps"
                            >
                              Directions/GoogleMaps
                            </iframe>
                          </div>
                          : null}
                      </>

                    </Typography>
                    {/* lng: {th.longitude} &emsp; lat: {th.latitude}<br /> */}
                    elevation gain:&nbsp;{thh.elevation_gain}&emsp; distance:&nbsp;{thh.distance}
                  </Typography>
                )}
                <Typography
                  style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}
                  component='div'
                >

                  difficulty:&nbsp;{difficulties.join(', ')}
                </Typography><br />
                <div style={{ width: '100%' }}>
                  <Typography
                    align='center'
                    style={{
                      display: 'flex'
                    }}
                    component='div'
                  >
                    {amenities}
                  </Typography>
                </div>
                <Typography
                  variant='body2'
                  align='center'
                  component={'div'}
                >
                  <Paid />{th.fees}
                </Typography>
              </Card>
            </Grid>
          </Grid>
        )}

        {errors.length > 0 && (
          <ul style={{ color: "red" }}>
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}

      </Grid>
    </Box>
  );
};