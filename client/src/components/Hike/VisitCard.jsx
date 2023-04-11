import React, { useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteVisit } from '../actions/visits';
import { UserContext } from '../context/UserContext';

const VisitCard = ({ visit }) => {
  const { currentUser } = useContext(UserContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteVisit(id))
  }

  // TODO: create dispatch for visits 
  // const handleVisit= (id) => {
  //   dispatch(visit(id))
  // }

  return (
    <div>
      <h1>{visit.trailhead.name}</h1>
        <p>{visit.trailhead.location}</p>
      <h2>Visited Date: {visit.user.username}</h2>
      <h3>
        <Link to={`/visits/${visit.id}`} >
         {visit.name}
        </Link>
        {/* <p>{visit.image_url}</p> */}
        <p>Visited Date:{visit.visited_date}</p>
        <p>{visit.visited}</p>
        {currentUser && currentUser.id === visit.user.id ? <>
          <button onClick={() => navigate(`/visits/${visit.id}/edit`)}>Edit</button>
          <button onClick={() => handleDelete(visit.id)} type='delete'>Remove</button>
        </> : null}
        <hr />
      </h3>
    </div>
  )
}

export default VisitCard;
