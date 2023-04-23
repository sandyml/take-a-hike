import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addVisit } from '../actions/visits';
import { Box, Button, CardContent, CardMedia, Typography } from '@mui/material';
import { Check, FmdGoodRounded, Paid, Route } from '@mui/icons-material';
import { Grid, Card } from '@mui/material';



export const TrailheadCard = ({ th, isLoading }) => {
  const [loading, setLoading] = useState(false);

  const { currentUser } = useSelector((state) => state.usersReducer);
  const { loggedIn } = useSelector((state) => state.usersReducer);
  const errors = useSelector((state) => state.errorsReducer);

  const isInVisited = currentUser.visits.find((vi) => vi.trailhead_id === th.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

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
            <Card sx={{ maxWidth: 800 }}>

              <CardMedia
                sx={{ width: 800, height: 350 }}
                image={hike.image_url}
                title="yosemite"
              />
              <Typography
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
                    {/* TODO: Can't remove local host  */}
                    <NavLink component="a" href={th.direction} target="_blank" variant="body2" align='center'>
                      Directions
                    </NavLink>
                  </Typography>
                  <b>elevation_gain:</b> {thh.elevation_gain} <b>distance:</b> {thh.distance}
                </Typography>
              )}
              <div style={{ width: '100%' }}>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'nowrap',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    maxWidth: 300,
                    borderRadius: 1,
                  }}
                >


                  {th.amenities.map((amenity, index) =>
                    <Typography
                      key={index}
                      sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        p: 1,
                        m: 1,
                        bgcolor: 'background.paper',
                        maxWidth: 300,
                        borderRadius: 1,
                      }}
                      component={'div'}
                    >
                      <Check />{amenity}
                    </Typography>
                  )}
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
  );
};