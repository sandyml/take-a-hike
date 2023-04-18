import React from 'react';
import { addVisit, deleteVisit } from '../actions/visits';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { headers, header } from '../../Global';

import { Check, FmdGoodRounded, Route } from '@mui/icons-material';

// TODO: 
// [] Favorites, favorites list
// [] Remove array of objects of amenities and hikes it I do not need them test first! 
// [] Not all trailheads are showing up only true boolean

// PLAN: MOVE IMAGES IN ITS OWN COMPONENT AND THEN MOVE IT TO THE VISIT CARD COMPONENT

const VisitCard = ({ visit }) => {
  const { currentUser } = useSelector((state) => state.usersReducer);
  const { visited_date, trailhead_id } = useSelector((state) => state.visitsReducer);
  // const visits = useSelector((state) => state.visitsReducer);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteVisit(visit.id, header))
    // console.log(visit.id, "visit has been deleted!")
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addVisit(headers, visited_date, trailhead_id, navigate))
    console.log("added to visits but not really just testing if this works")
  };

  // const handleFavorites = (e) => {
  //   e.preventDefault();
  //   dispatch(addToVisits(visit))
  //   console.log("added to favorites but not really just testing if this works")
  //   // navigate('/favorites')
  // };

  // const [visited, setVisited] = useState([])
  // const handleAddVisit = ht => {
  //   const updatedAddedVisit = visits.map(vt => {
  //     if(ht.trailhead_id === vt.id) {
  //       // construct new clone
  //       return {
  //          ...vt, 
  //          // what vt do we need to update
  //          trailheads: [...vt.trailheads, ht] // map over vt .trailheads 
  //       }
  //     } else {
  //       return vt;
  //     }
  //   })
  //   setVisited(updatedAddedVisit);
  // }

  // const amenities = visit.trailhead.map((vt) => <div key={vt}>
  //   {vt.amenities}
  // </div>)
  // debugger
  // remove favorites
  // const [favorites, setFavorites] = useState([]);
  // const parkFavorites = (id) => {
  //   const checkparkfave = favorites.some((park) => park.id === id);
  //   return checkparkfave;
  // };

  const amenities = visit.amenities.map((a) => <div key={a.id}><Check />{a.name}{' '}</div>)
  // const user = visits.every((vi) => {
  //   if (vi.user.visited == true) {
  //     return <ul>vi.user.username</ul>;
  //   }
  //   return null
  // })

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
      {/* <p>amenities: {visit.trailhead.amenities} did not work!</p> */}
      {amenities}
      {/* <p>amenitiess: {visit.amenities.name}</p> */}

      {/* <>Direction Google Link</> */}
      <Route />{' '}
      <NavLink href={visit.trailhead.direction} variant="body2">
        Directions
      </NavLink><br /><br />
      {/* <p>{visit.trailhead.direction}</p> */}
      {/* <span>{user} has visited on {visit.visited_date}</span> */}
      <ul><b>{visit.user.username}</b> visited on {visit.visited_date}</ul>
      <h3>
        {/* <Link to={`/visits/${visit.id}`} >
          {visit.name}
        </Link> */}

        {
          currentUser && currentUser.id === visit.user.id ? <>
            <button onClick={() => navigate(`/visits/${visit.id}/edit`)}>Edit</button>
            <button onClick={handleDelete} type='delete'>Remove</button>
            {/* <button onClick={() => handleDelete(visit.id)} type='delete'>Remove</button> */}
          </> :
            // null
            <>
              <button onClick={handleSubmit} type='add'>Add To Visit</button>
              {/* <button onClick={handleFavorites} type='add'>Add To Favorites</button> */}
            </>
        }
        <hr />
      </h3>
    </div>
  )
}

export default VisitCard;