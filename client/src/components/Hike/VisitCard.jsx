import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { header } from '../../Global';
import { Link } from 'react-router-dom';
import { VisitContext } from '../context/VisitContext';

// [] TODO: Remove context after Redux done

const VisitCards = ({ visit }) => {
  const { currentUser } = useContext(UserContext);
  const { deleteVisitDate, visits } = useContext(VisitContext)
  const navigate = useNavigate();
  // const { id } = useParams(); 

  useEffect(() => {
    fetch('/visits')
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data, "visits")
      })
  }, [])

  // TODO: Add delete and fetch delete 
  // const handleDelete = (id) => {
  //   fetch(`/visits/${visit.id}`, {
  //     method: 'DELETE',
  //     header,
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       console.log(data, "deleted data inside VisitCard")
  //       deleteVisitDate(data) //create delete method
  //     })
  // }

  const handleDelete = (id) => {
    fetch(`/visits/${id}`, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "deleted!")
        const updatedState = visits.map(visit => {
          // eslint-disable-next-line 
          if(data.trailhead_id == visit.id) {
            return {
              ...visit,
              trailhead: visit.hike_trails.filter(ht => ht.id !== data.id)
            }
          } else {
            return visit;
          }
        })
        deleteVisitDate(updatedState);
      })
  }

  // console.log(currentUser, "currentUser")
  // console.log(currentUser.id, "currentUser.id")
  // console.log(visit.user.id, "visit.user.username.id")

  // debugger
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
        <p>{visit.image_url}</p>
        <p>{visit.visited_date}</p>
        <p>{visit.visited}</p>
        {currentUser && currentUser.id === visit.user.id ? <>
          <button onClick={() => navigate(`/visits/${visit.id}/edit`)}>Edit</button>
          {/* <button onClick={handleDelete}>Delete</button> */}
          <button onClick={() => handleDelete(visit.id)} type='delete'>Remove</button>
        </> : null}
        <hr />
      </h3>
    </div>
  )
}

export default VisitCards;
