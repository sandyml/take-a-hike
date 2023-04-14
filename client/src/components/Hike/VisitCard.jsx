import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addVisit, deleteVisit } from '../actions/visits';
import { headers, header } from '../../Global';

// TODO: Favorites, favorites list

const VisitCard = ({ visit }) => {
  const { currentUser } = useSelector((state) => state.usersReducer);
  const {visited_date, trailhead_id} = useSelector((state) => state.visitsReducer);

  // console.log(visits, "VISITS Card")
  // debugger

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteVisit(visit.id, header))
    console.log(visit.id, "visit has been deleted!")
  };

  // addVisit = (headers, visited_date, trailhead_id, navigate)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("added to favorites but not really just testing if this works")
    dispatch(addVisit(headers, visited_date, trailhead_id, navigate))
  }
// debugger
  // remove favorites
  // const [favorites, setFavorites] = useState([]);
  // const parkFavorites = (id) => {
  //   const checkparkfave = favorites.some((park) => park.id === id);
  //   return checkparkfave;
  // };

  // remove useEffect 
  // const [parks, setParks] = useState([])
  // useEffect(() => {
  //   fetch('/visits')
  //     .then((resp) => resp.json())
  //     .then(data => {
  //       console.log(data, "visitcard")
  //       setParks(data)})
  //     .catch((error) => console.log(error, "errors"))
  // }, []); 

  return (
    <div>
      <h1>{visit.trailhead.name}</h1>
      <>*Insert Image Here*</>
      <p>{visit.trailhead.location}</p>
      <p>{visit.trailhead.fees}</p>
      <>Direction Google Link</>
      {/* <p>{visit.trailhead.direction}</p> */}
      
      <p>{visit.hike.map((h, idx) => <>
      <div key={idx}>
      <img src={h.image_url} alt="image-url"/><br/>
        distance: {h.distance}


      </div>
      </>)}</p>
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
          </> : 
          // null
          <>
          <button onClick={handleSubmit} type='add'>Will Visit</button>
          </>
        }
        <hr />
      </h3>
    </div>
  )
}

export default VisitCard;
