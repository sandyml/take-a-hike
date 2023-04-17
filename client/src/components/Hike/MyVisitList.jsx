import React from 'react';
import { useSelector } from 'react-redux';

export const MyVisitList = () => {
  const visits = useSelector((state) => state.visitsReducer);
  const { currentUser } = useSelector((state) => state.usersReducer)
  // debugger
  console.log(currentUser, "currentUser");
  return (
    <div>
      <center><h1>Trailheads I've Visited</h1>
        <h3>{currentUser.username}</h3>
        <span>
          {currentUser.visits.map((current, cid) => 
          <div key={cid}><h2>{current.trailhead.name}</h2>
          <img src={current.hike.image_url} alt="img-url" style={{ width: 1000, height: 600 }} /><br />
          {current.trailhead.location}<br/><br/>{' '}you visited on: {current.visited_date}<br/></div>)}
        </span>

        {/* {currentUser.hikes.map((h, i) =>
        <div key={i}>
          <img src={h.image_url} alt="img-url" style={{ width: 1000, height: 600 }} /><br />
          <b>distance:</b> {h.distance} <b>elevation gain:</b> {h.elevation_gain}
        </div>
      )} */}

      </center>
    </div>
  )
}
