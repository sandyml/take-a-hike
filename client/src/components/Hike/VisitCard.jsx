import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVisit, loadVisits } from '../actions/visits';
import { loadUsers } from '../actions/users';

const VisitCard = ({ visit }) => {
  // const users = useSelector((store) => store.usersReducer.user)
  // const currentUser = useSelector((state) => state.visitsReducer)
  const currentUser = useSelector((store) => store.usersReducer.currentUser)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(loadVisits());
  }

  // console.log(currentUser, "currentUser in card")
  // // TODO: create dispatch for users 
  // const handleUser = (id) => {
  //   dispatch(visit(id))
  // }

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
            <button onClick={() => handleDelete(visit.id)} type='delete'>Remove</button>
          </> : null
        }
        <hr />
      </h3>
    </div>
  )
}

export default VisitCard;
