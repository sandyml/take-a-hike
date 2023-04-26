import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addVisit } from '../actions/visits';
import { Box, Button, CardMedia, Typography } from '@mui/material';
import { FmdGoodRounded, Paid } from '@mui/icons-material';
import { Grid, Card } from '@mui/material';

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
        ✓{amenity}
      </Typography>
    </div>
  );
  // console.log(amenities.join('✓ '))

  // debugger 

  const isInVisited = currentUser.visits.find((vi) => vi.trailhead_id === th.id);

  const handleAddToVisit = () => {
    setLoading(true);
    dispatch(addVisit(th, navigate))
  }

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate])

  // if () {
  //   return <>Loading still...</>
  // }

  return (
    <Box>
      <Grid sx={{ flexGrow: 1 }} col={3} style={{ justifyContent: 'center' }}>
        {th.hikes.map((hike) =>
          <Grid key={hike.id} >
            {/* <Typography
              component={'div'}
              variant='h5'
              style={{ display: 'flex', justifyContent: 'center' }}
            >{th.name}
            </Typography><br /> */}

            <Grid
              sx={{ paddingLeft: 1, paddingBottom: 1 }}
              item xs={1} md={12}
              container
              justifyContent="center"
              spacing={-0.01}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ maxWidth: 593, height: 1000 }}>
                <div align='right'>
                  <Button
                    sx={{ width: 100, fontFamily: 'Google Sans, Roboto, arial, sans-serif' }}
                    // sx={{fontFamily: 'Fredoka, sans-serif' }}
                    size='small'
                    variant="contained"
                    disabled={!!isInVisited}
                    onClick={handleAddToVisit}
                  >
                    {loading ? "Adding..." : "Add To Visit"}
                  </Button>
                </div><br />
                <Typography
                  component={'div'}
                  variant='h5'
                  style={{ display: 'flex', justifyContent: 'center' }}
                >{th.name}
                </Typography><br />

                <CardMedia
                  sx={{ width: 593, height: 300 }}
                  image={hike.image_url}
                  title="yosemite"
                />
                <Typography
                  align='center'
                  variant='body1'
                  style={{ display: 'flex', justifyContent: 'center' }}
                >
                  <FmdGoodRounded />
                  {th.location}
                </Typography>

                {th.hikes.map((thh) =>
                  <Typography
                    key={thh.id}
                    variant='body1'
                    align='center'
                    component={'div'}
                  // style={{ display:'flex', justifyContent:'center' }} 
                  ><br />
                    <Typography style={{ display: 'flex', justifyContent: 'center', fontFamily: "Google Sans, Roboto, arial, sans-serif" }} component={'div'}>
                      {/* <Route /> {' '} */}
                      <Button onClick={toggleSeeMap}>Map/Directions</Button>
                      <>
                      {showMap ? 
                      <div>
                      <iframe
                        src={th.direction}
                        // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d403240.0035873217!2d-119.8312959809544!3d37.85297716348046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8096f09df58aecc5%3A0x2d249c2ced8003fe!2sYosemite%20National%20Park!5e0!3m2!1sen!2sus!4v1682533509259!5m2!1sen!2sus"
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
                    <b>lng:</b> {th.longitude} <b>lat:</b>{th.latitude}<br />
                    <b>elevation_gain:</b>&nbsp;{thh.elevation_gain} <b>distance:</b>&nbsp;{thh.distance}
                  </Typography>
                )}
                <Typography style={{ display: 'flex', justifyContent: 'center' }} component='div'>

                  <b>difficulty:</b>&nbsp;{difficulties.join(', ')}
                </Typography><br />
                <div style={{ width: '100%' }}>
                  {/* <Typography component='div' align='center' > */}
                  <Typography align='center' style={{ display: 'flex' }} component='div'>
                    {amenities}
                  </Typography>
                </div>
                <Typography variant='body2' align='center' component={'div'}>
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