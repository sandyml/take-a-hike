import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, CardContent, CardMedia, TextField } from '@mui/material';
import { Check, FmdGoodRounded } from '@mui/icons-material';
import RouteIcon from '@mui/icons-material/Route';
import Typography from '@mui/material/Typography';
import { addVisit } from '../actions/visits';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import PaidIcon from '@mui/icons-material/Paid';
import { NavLink } from 'react-router-dom';

export const TrailheadCard = ({ th, isLoading }) => {
  const [loading, setLoading] = useState(false);

  const { trailhead, visited_date, visited } = useSelector((state) => state.visitsReducer);
  const visits = useSelector((state) => state.visitsReducer);
  const { currentUser } = useSelector((state) => state.usersReducer);
  const { loggedIn } = useSelector((state) => state.usersReducer);
  const errors = useSelector((state) => state.errorsReducer);

  // debugger
  const vt = visits.find((vi) => vi={vi})
  // const vt = visits.find((vi) => vi.visited && vi.visited_date)
  const isInVisited = currentUser.visits.find((vi) => vi.trailhead_id === th.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();
// debugger
  const handleAddToVisit = () => {
    setLoading(true);
    const vt = visits.find((vi) => {

      dispatch(addVisit(th, vi, navigate))
      // dispatch(addVisit(th, vt, navigate))
    })
    console.log("Clicked!")
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
    <Grid sx={{ flexGrow: 1 }} col={3}>
      {th.hikes.map((hike) =>
        <Grid key={hike.id}>
          <Typography align='center' variant='h5'>{th.name}</Typography><br />

          <Grid
            item xs={1} md={12}
            container
            justifyContent="center"
            spacing={-0.01}>
            <Card sx={{ maxWidth: 800 }}>

                <CardMedia
                  sx={{ width: 800, height: 350 }}
                  image={hike.image_url}
                  title="yosemite"
                />
              <Typography variant='body1' align='center'>
                <FmdGoodRounded />
                {th.location}
              </Typography><br />

              {th.hikes.map((thh) =>
                <Typography variant='body1' align='center' key={thh.id}>
                  <RouteIcon /> {' '}
                
                {/* TODO: Can't remove local host  */}
                <NavLink component="a" href={th.direction} target="_blank" variant="body2" align='center'>
                 Directions 
                </NavLink><br /><br /> 

                  <b>elevation_gain:</b> {thh.elevation_gain} <b>distance:</b> {thh.distance}
                </Typography>
              )}

              {th.amenities.map((amenity, index) =>
                <Typography variant='body2' align='center' key={index}>
                  <Check />{amenity}
                </Typography>
              )}

              <Typography variant='body2' align='center'>
                <PaidIcon />{th.fees}
              </Typography>
              {/* <input type="visited_date" value={vt.visited_date} onChange={(e) => setVisited(e.target.value)}/> */}

              <CardContent>

                <Button
                  variant="contained"
                  disabled={!!isInVisited}
                  
                  onClick={handleAddToVisit}
                  // onClick={() => handleAddToVisit(visited_date)}
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