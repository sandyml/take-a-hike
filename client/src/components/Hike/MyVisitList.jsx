import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { deleteUsersVisit } from '../actions/users';

export const MyVisitList = () => {
  const { currentUser } = useSelector((state) => state.usersReducer);
  // const trailheads = useSelector((state) => state.trailheadsReducer);
  const visits = useSelector((state) => state.visitsReducer);

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteUsersVisit())
    // dispatch(deleteUsersVisit(id, headers))
    console.log("deleted")
  };

  console.log(currentUser, "currentUser")

  // debugger
    const [visited, setVisited] = useState({})
    const deleteUsersVisit = (deleteUVisit) => {
    const updatedUsersVisits = currentUser.visits.filter((visit) => visit.trailhead.id !== deleteUVisit.id)
    setVisited(updatedUsersVisits)
    console.log(deleteUVisit)
  };

  return (
    <div>
      <center><h1>Trailheads I've Visited</h1>
        <h3> {currentUser.username}'s Account</h3>
        <div>
          {currentUser.visits.map((current, cid) =>
            <div key={cid}><h2>{current.trailhead.name}</h2>
              {/* <img src={current.hike.image_url} alt="img-url" /><br /> */}
            {/* distance: {current.hike.distance}<br/> */}
              {current.trailhead.location}<br /><br />{' '}you visited on: {current.visited_date}<br />
              <Button onClick={() => deleteUsersVisit(visited)} type='delete'>Remove</Button>
              {/* <Button onClick={handleDelete} type='delete'>Remove</Button> */}
              {/* <button onClick={() => handleDelete(visit.id)} type='delete'>Remove</button> */}
            </div>)}
        </div>

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
