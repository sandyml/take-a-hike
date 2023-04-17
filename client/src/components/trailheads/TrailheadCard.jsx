import React, { useState } from 'react';
import { Check, HikingRounded, FmdGoodRounded } from '@mui/icons-material';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { addToVisits } from '../actions/users';
import { addVisit } from '../actions/visits';
import { headers } from '../../Global';

// TODO: Button for addToVisited

export const TrailheadCard = ({ th }) => {
 const [loading, setLoading] = useState(false);
 const { visited, visited_date, trailhead_id } = useSelector((state) => state.visitsReducer)

 const dispatch = useDispatch();
 const navigate = useNavigate();

 const handleAddToVisit = () => {
  dispatch(addVisit(headers, visited_date, trailhead_id, navigate))
  console.log("Clicked!")
  navigate('/my_visit_list')
 }

 return (
  <div><center>

   <h2>{th.name}</h2>
   {th.hikes.map((thh) =>
    <ul key={thh}>
     <img src={thh.image_url} alt="hike-images" /><br />
     <h4><FmdGoodRounded />{th.location}</h4>
     <b>elevation_gain:</b> {thh.elevation_gain} <b>distance:</b> {thh.distance}
    </ul>)}

   {th.hikes.map((h) => <div key={h}><HikingRounded /> difficulty: {h.difficulties}</div>)}
   {th.amenities.map((am) => <div key={am}><Check />{am}</div>)}
   <h4>{th.fees}</h4>
   <NavLink href={th.direction} variant="body2">
    Directions
   </NavLink><br /><br/>
   <Button
    variant="contained"
    // value={} 
    onClick={handleAddToVisit}
    >
    {loading ? "Adding..." : "Add To Visit"}
    </Button>

  </center></div>
 )
};