import React from 'react';
import { addVisit, deleteVisit } from '../actions/visits';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { headers, header } from '../../Global';

import PlaceIcon from '@mui/icons-material/Place';

// TODO: Favorites, favorites list

// PLAN: MOVE IMAGES IN ITS OWN COMPONENT AND THEN MOVE IT TO THE VISIT CARD COMPONENT

// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';

// export const TitlebarBelowImageList = () => {
// return (
//   <ImageList sx={{ width: 500, height: 450 }}>
//     {visits.hike.map((item) => (
//       <ImageListItem key={item.img}>
//         <img
//           src={`${item.image_url}?w=248&fit=crop&auto=format`}
//           srcSet={`${item.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
//           // alt={item.name}
//           loading="lazy"
//         />
//         <ImageListItemBar
//           title={item.title}
//           // subtitle={<span>by: {item.author}</span>}
//           position="below"
//         />
//       </ImageListItem>
//     ))}
//   </ImageList>
// );
// }

const VisitCard = ({ visit }) => {
  // const [loading, setLoading] = useState(true);
  const { currentUser, loggedIn } = useSelector((state) => state.usersReducer);
  const { visited_date, trailhead_id } = useSelector((state) => state.visitsReducer);
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // console.log(visits, "VISITS Card")
  // debugger

  // useEffect(() => {
  //   if (!loading && !loggedIn) {
  //     navigate('/')
  //   }
  //   // eslint-disable-next-line
  // }, [loading, loggedIn, navigate]);


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
      {/* <ImageList sx={{ width: 900, height: 550 }}> */}
      <div>{visit.hike.map((h, idx) => <>
        <p key={idx}>
          <img src={h.image_url} alt="img-url" /><br />
          <b>distance:</b> {h.distance} <b>elevation gain:</b> {h.elevation_gain}
        </p>
        {/* check mark for accessiblity */}
      </>)}
      </div>
      <PlaceIcon />{visit.trailhead.location}
      <p>{visit.trailhead.fees}</p>
      {/* <>Direction Google Link</> */}
      <NavLink href={visit.trailhead.direction} variant="body2">
      Directions
      </NavLink>
      {/* <p>{visit.trailhead.direction}</p> */}
      {/* </ImageList> */}

      {/* <ImageList sx={{ width: 1000, height: 550 }}>
      {visit.hike.map((item) => (
        <ImageListItem key={item.image_url}>
          <img
            src={`${item.image_url}?w=248&fit=crop&auto=format`}
            srcSet={`${item.image_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
            // alt={item.name}
            loading="lazy"
          />
          {/* <ImageListItemBar
            title={item.title}
            // subtitle={<span>by: {item.author}</span>}
            position="below"
          /> */}
      {/* </ImageListItem>
      ))}
    </ImageList> */}


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
