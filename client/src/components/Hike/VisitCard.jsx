import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVisit } from '../actions/visits';

const VisitCard = ({ visit }) => {
  const { currentUser } = useSelector((state) => state.usersReducer);
  // const currentUser = useSelector((state) => state.usersReducer.currentUser);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // TODO: Not deleting in real-time 
  const handleDelete = () => {
    dispatch(deleteVisit(visit.id))
    console.log(visit.id, "deleted!")
  }

  return (
    <div>
      <h1>{visit.trailhead.name}</h1>
      <p>{visit.trailhead.location}</p>
      <h2>Username: {visit.user.username}</h2>
      <h3>
        {/* <Link to={`/visits/${visit.id}`} >
          {visit.name}
        </Link> */}
        <p>Visited Date:{visit.visited_date}</p>
        <p>{visit.visited}</p>
        {
          currentUser && currentUser.id === visit.user.id ? <>
            <button onClick={() => navigate(`/visits/${visit.id}/edit`)}>Edit</button>
            <button onClick={handleDelete} type='delete'>Remove</button>
            {/* <button onClick={() => handleDelete(visit.id)} type='delete'>Remove</button> */}
          </> : null
        }
        <hr />
      </h3>
    </div>
  )
}

export default VisitCard;
