import React, { useContext } from 'react';
import { VisitContext } from '../context/VisitContext';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// [] TODO: Remove context after Redux done
// [] TODO: Not able to delete in real-time ENOCH HELP OFFICE HOURS!

const VisitCard = ({ visit }) => {
  const { currentUser } = useContext(UserContext);
  const { deleteVisitDate, visits } = useContext(VisitContext)
  const navigate = useNavigate();


  // TODOL HELP - Can't delete real-time 
  // debugger
  const handleDelete = (id) => {
    fetch(`/visits/${id}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "Deleted!")
        const updatedState = visits.map((visit) => {
          if (data.trailhead_id === visit.id) {
            return {
              ...visit,
              trailhead: visits.filter((th) => th.trailhead.id !== data.id)
            }
          } else {
            return visit;
          }
        })
        deleteVisitDate(updatedState);
        navigate('/visits')
      })
  }

  // console.log(currentUser, "currentUser")
  // console.log(currentUser.id, "currentUser.id")
  // console.log(visit.user.id, "visit.user.username.id")

  // console.log(visit.format_date, "format_date")
  // change date method in backend
  // trailheads data to add name

  return (
    <div>
      <h1>{visit.trailhead.name}</h1>
      <h2>{visit.user.username}</h2>
      <h3>
        <Link to={`/visits/${visit.id}`} >
          {visit.name}
        </Link>
        {/* <p>{visit.image_url}</p> */}
        <p>{visit.visited_date}</p>
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
