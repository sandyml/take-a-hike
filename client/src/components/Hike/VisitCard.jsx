import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { header } from '../../Global';
import { Link } from 'react-router-dom';

// [] TODO: Remove context after Redux done

const VisitCards = ({ visit }) => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();
  const { id } = useParams(); 

  useEffect(() => {
    fetch('/visits')
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data, "visits")
    })
  }, [])

  // TODO: Add delete and fetch delete 
  const handleDelete = () => {
    fetch(`/visits/${visit.id}`, {
      method: 'DELETE',
      header,
    })
    .then((resp) => resp.json())
    .then((data) => {
      console.log(data, "deleted data inside VisitCard")
      // deleteVisit(data) //create delete method
    })
  }

  // change date method in backend
  // trailheads data to add name
  return (
    <div>
      {/* trailhead name inside h1 */}
      <h1>Card</h1> 
      <h1>{visit.trailhead.name}</h1> 
      <h2>{visit.user.username}</h2> 
      <h3>
        <Link to={`/visits/${visit.id}`} >
        {visit.name}
        </Link>
        <p>{visit.visited_date}</p>
        <p>{visit.visited}</p>
        {/* {currentUser && currentUser.id === visit.username.id ? <> */}
        {/* <button onClick={() => navigate(`/visits/${visit.id}/edit`)}>Edit</button> */}
        <button onClick={handleDelete}>Delete</button>
      {/* </> : null} */}
      </h3>
    </div>
  )
}

export default VisitCards
