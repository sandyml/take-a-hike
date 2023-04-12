import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { deleteVisit, loadVisits } from '../actions/visits';
import { loadUsers } from '../actions/users';

const VisitCard = ({ visit }) => {

  const { currentUser } = useSelector((state) => state.visitsReducer)

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(loadVisits());
    // dispatch(loadUsers());
  }

  // const deleteVisitDate = (deleteVisitDate) => {
  //   const updatedVisits = visits.filter((visit) => visit.id !== deleteVisitDate.id)
  //   setVisits(updatedVisits)
  // };

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
