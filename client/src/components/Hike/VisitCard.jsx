import React, { useEffect } from 'react';
import { deleteVisit } from '../actions/visits';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { header } from '../../Global';

import { Check, FmdGoodRounded, Route } from '@mui/icons-material';
import { Button } from '@mui/material';

const VisitCard = ({ visit, isLoading }) => {
  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoading && !loggedIn) {
      navigate('/login')
    }
  }, [isLoading, loggedIn, navigate])

  const handleDelete = () => {
    dispatch(deleteVisit(visit.id, header))
  };

  const amenities = visit.amenities.map((a) => <div key={a.id}><Check />{a.name}{' '}</div>)

  return (
    <div>
      <h1>{visit.trailhead.name}</h1>

      {visit.hike.map((h, i) =>
        <div key={i}>
          <img src={h.image_url} alt="img-url" style={{ width: 1000, height: 600 }} /><br />
          <b>distance:</b> {h.distance} <b>elevation gain:</b> {h.elevation_gain}
        </div>
      )}

      <FmdGoodRounded /> {visit.trailhead.location}
      <p>{visit.trailhead.fees}</p>
      {amenities}

      <Route />{' '}
      <NavLink href={visit.trailhead.direction} variant="body2">
        Directions
      </NavLink><br /><br />
      <ul><b>{visit.user.username}</b> visited on {visit.visited_date}</ul>
      <h3>

        {currentUser && currentUser.id === visit.user.id ?
          <>
            <Button variant="outlined" onClick={() => navigate(`/visits/${visit.id}/edit`)}>Edit</Button>{' '}
            <Button variant="outlined" onClick={handleDelete} type='delete'>Remove</Button>
          </> : null}
        <hr />
      </h3>
    </div>
  )
};

export default VisitCard;