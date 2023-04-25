import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addVisit } from '../actions/visits';
import { Box, Button, CardContent, CardMedia, Typography } from '@mui/material';
import { FmdGoodRounded, Paid, Route } from '@mui/icons-material';
import { Grid, Card } from '@mui/material';

export const TrailheadCard = ({ th, isLoading }) => {
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.usersReducer);
  const { loggedIn } = useSelector((state) => state.usersReducer);
  const errors = useSelector((state) => state.errorsReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const difficulties = th.difficulties.map(thd => thd.name);
  // console.log(difficulties.join(', '));
  const amenities = th.amenities.map((amenity, idxx) => <div key={idxx}>✓{amenity}</div>);
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
      <Grid sx={{ flexGrow: 1 }} col={3} style={{ display: 'flex', justifyContent: 'center' }}>
        {th.hikes.map((hike) =>
          <Grid key={hike.id} >
            <Typography
              component={'div'}
              variant='h5'
              style={{ display: 'flex', justifyContent: 'center' }}
            >{th.name}
            </Typography><br />

            <Grid
              item xs={1} md={12}
              container
              justifyContent="center"
              spacing={-0.01}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ maxWidth: 593 }}>

                <CardMedia
                  sx={{ width: 593, height: 350, display: 'flex' }}
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
                  >
                    <Typography style={{ display: 'flex', justifyContent: 'center' }} component={'div'}>
                      <Route /> {' '}
                      {/* <Card> */}
                      <div>
                        <a href={th.direction} target="_top">
                          <center>Directions</center>
                        </a>
                      </div>
                      <br />
                      {/* </Card> */}
                      <br />
                      <b>lng:</b> {th.longitude} <b>lat:</b>{th.latitude}
                    </Typography>
                    <b>elevation_gain:</b>&nbsp;{thh.elevation_gain} <b>distance:</b>&nbsp;{thh.distance}
                  </Typography>
                )}
                <Typography style={{ display: 'flex', justifyContent: 'center' }} component='div'>

                  <b>difficulty:</b>&nbsp;{difficulties.join(', ')}
                </Typography>
                <div style={{ width: '100%' }}>
                  <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'nowrap',
                      p: 1,
                      m: 1,
                      bgcolor: 'background.paper',
                      maxWidth: 200,
                      borderRadius: 1,
                    }}
                  >
                    <Typography align='center' style={{ display: 'flex' }} component='div'>
                      {amenities}
                    </Typography>
                  </Box>
                </div>



                <Typography variant='body2' align='center' component={'div'}>
                  <Paid />{th.fees}
                </Typography>

                <CardContent>

                  <Button
                    variant="contained"
                    disabled={!!isInVisited}
                    onClick={handleAddToVisit}
                  >
                    {loading ? "Adding..." : "Add To Visit"}
                  </Button>

                </CardContent>
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