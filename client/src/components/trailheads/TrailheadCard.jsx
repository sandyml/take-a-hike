import React, { useState } from 'react';
import { Check, HikingRounded, FmdGoodRounded } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
// import { addToVisits } from '../actions/users';
// import { addVisit } from '../actions/visits';
import { addVisit } from '../actions/visits';
// import SimpleMap from '../navigation/SimpleMap';

// TODO: Button for addToVisited

export const TrailheadCard = ({ th }) => {
  const [loading, setLoading] = useState(false);
  const { visited_date, trailhead_id, trailhead } = useSelector((state) => state.visitsReducer);
  const errors = useSelector((state) => state.errorsReducer)
  // const visits = useSelector((state) => state.visitsReducer)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToVisit = () => {
    setLoading(true);
    dispatch(addVisit(th, navigate))
    console.log("Clicked!")
  }

  // const [visitss, setVisits] = useState([])
  // const addVisits = (visited) => {
  //   const prevFavorites = [...visited];
  //   const newFavorites = visits.concat(visited);
  //   setVisits(newFavorites, ...visited);
  // };

  return (
    <div><center>
      <h1>All Trailheads</h1>
      Plan: Disable the trailheads that I have visited already but need to the add to visit to work
      <h2>{th.name}</h2>
      {th.hikes.map((thh) =>
        <ul key={thh}>
          <img src={thh.image_url} alt="hike-images" /><br />
          <h4><FmdGoodRounded />{th.location}</h4>
          <b>elevation_gain:</b> {thh.elevation_gain} <b>distance:</b> {thh.distance}
        </ul>)}

      {th.hikes.map((h) => <div key={h}><HikingRounded /> difficulty: {h.difficulties}{h.direction}
      </div>)}
      {th.amenities.map((am) => <div key={am}><Check />{am}</div>)}
      <h4>{th.fees}</h4>
      <Link href={th.direction} variant="body2">
        {/* <SimpleMap value={th.direction}/> */}
        Directions
      </Link><br /><br />
      <Button
        variant="contained"
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