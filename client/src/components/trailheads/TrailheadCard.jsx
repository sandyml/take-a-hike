import React, { useState } from 'react';
import { Check, HikingRounded, FmdGoodRounded } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Button } from '@mui/material';

// TODO: Button for addToVisited

export const TrailheadCard = ({ th }) => {
 const [loading, setLoading] = useState(false);

 const visits = useSelector((state) => state.visitsReducer);

 const handleAddToVisit = (e) => {
  e.preventDefault();
  console.log("Clicked!")
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