import React from 'react';
import { addVisit, deleteVisit } from '../actions/visits';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { headers, header } from '../../Global';

import PlaceIcon from '@mui/icons-material/Place';

// TODO: Favorites, favorites list

// PLAN: MOVE IMAGES IN ITS OWN COMPONENT AND THEN MOVE IT TO THE VISIT CARD COMPONENT

const VisitCard = ({ visit }) => {
  const { currentUser } = useSelector((state) => state.usersReducer);
  const { visited_date, trailhead_id } = useSelector((state) => state.visitsReducer);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteVisit(visit.id, header))
    console.log(visit.id, "visit has been deleted!")
  };

  // addVisit = (headers, visited_date, trailhead_id, navigate)
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVisit(headers, visited_date, trailhead_id, navigate))
    console.log("added to favorites but not really just testing if this works")
  }
  // debugger
  // remove favorites
  // const [favorites, setFavorites] = useState([]);
  // const parkFavorites = (id) => {
  //   const checkparkfave = favorites.some((park) => park.id === id);
  //   return checkparkfave;
  // };

  return (
    <div>
      <h1>{visit.trailhead.name}</h1>

      {visit.hike.map((h, i) => 
        <div key={i}>
          <img src={h.image_url} alt="img-url" /><br />
          <b>distance:</b> {h.distance} <b>elevation gain:</b> {h.elevation_gain}
        </div>
        // check mark for accessiblity
      )}

      <PlaceIcon /> {visit.trailhead.location}
      <p>{visit.trailhead.fees}</p>
      {/* <>Direction Google Link</> */}
      <NavLink href={visit.trailhead.direction} variant="body2">
      Directions
      </NavLink>
      {/* <p>{visit.trailhead.direction}</p> */}


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
              <button type='add'>Add To Visit</button>
              <button onClick={handleSubmit} type='add'>Add To Favorites</button>
            </>
        }
        <hr />
      </h3>
    </div>
  )
}

export default VisitCard;