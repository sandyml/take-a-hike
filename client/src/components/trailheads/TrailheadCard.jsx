import React, { useEffect, useState } from 'react';
import { Check, HikingRounded, FmdGoodRounded } from '@mui/icons-material';
import RouteIcon from '@mui/icons-material/Route';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { addVisit } from '../actions/visits';

// NOTE: Don't need errors here but leave it! 

export const TrailheadCard = ({ th, isLoading }) => {
  const [loading, setLoading] = useState(false);

  const { trailhead } = useSelector((state) => state.visitsReducer);
  const { currentUser } = useSelector((state) => state.usersReducer);
  const { loggedIn } = useSelector((state) => state.usersReducer);
  const errors = useSelector((state) => state.errorsReducer);

  const isInVisited = currentUser.visits.find((vi) => vi.trailhead_id === th.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToVisit = () => {
    setLoading(true);
    dispatch(addVisit(th, navigate))
    console.log("Clicked!")
  }

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate])

  return (
    <div><center>
      <h1 className='etched-text'>All Trailheads</h1>
      <h2>{th.name}</h2>
      {th.hikes.map((thh) =>
        <ul key={thh}>
          <img src={thh.image_url} alt="hike-images" style={{ width: 1000, height: 600 }} /><br />
          <h4><FmdGoodRounded />{th.location}</h4>
          <b>elevation_gain:</b> {thh.elevation_gain} <b>distance:</b> {thh.distance}
        </ul>)}

      {th.hikes.map((h) => <div key={h}><HikingRounded /> difficulty: <b>{h.difficulties}</b></div>)}
      {th.amenities.map((am) => <div key={am}><Check />{am}</div>)}
      <h4>{th.fees}</h4>

      <Link href={th.directions} variant="body2">
        <RouteIcon /> Directions
      </Link><br /><br />
      {/* <a href={th.directions}>Directions</a><br/> */}
        {/* <div>
        <a id='card-link' href={th.directions}>
        <RouteIcon /> Directions
        </a>
        </div><br/><br/> */}
      <Button
        variant="contained"
        disabled={!!isInVisited}
        onClick={() => handleAddToVisit(trailhead)}
      >
        {loading ? "Adding..." : "Add To Visit"}
      </Button>

      {errors.length > 0 && (
        <ul style={{ color: "red" }}>
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}
    </center></div>
  )
};