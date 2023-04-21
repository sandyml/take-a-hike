// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Button, CardContent, CardMedia, Paper } from '@mui/material';
// import { Check, FmdGoodRounded } from '@mui/icons-material';
// import RouteIcon from '@mui/icons-material/Route';
// import Typography from '@mui/material/Typography';
// import { addVisit } from '../actions/visits';
// import { styled } from '@material-ui/core';
// import Grid from '@mui/material/Grid';
// import Card from '@mui/material/Card';

// // NOTE: MISC Card delete later! 

// const Item = styled(Paper)(({ theme }) => ({
//  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//  ...theme.typography.body2,
//  // padding: theme.spacing(9),
//  textAlign: 'center',
//  color: theme.palette.text.secondary,
// }));

// export const TrailheadCard = ({ th, isLoading }) => {
//  const [loading, setLoading] = useState(false);

//  const { trailhead } = useSelector((state) => state.visitsReducer);
//  const { currentUser } = useSelector((state) => state.usersReducer);
//  const { loggedIn } = useSelector((state) => state.usersReducer);
//  const errors = useSelector((state) => state.errorsReducer);

//  const isInVisited = currentUser.visits.find((vi) => vi.trailhead_id === th.id);

//  const dispatch = useDispatch();
//  const navigate = useNavigate();

//  const handleAddToVisit = () => {
//   setLoading(true);
//   dispatch(addVisit(th, navigate))
//   console.log("Clicked!")
//  }

//  useEffect(() => {
//   if (!isLoading && !loggedIn) {
//    navigate('/login')
//   }
//  }, [isLoading, loggedIn, navigate])

//  //   return (
//  //     <div><center>
//  //       <h1 className='etched-text'>All Trailheads</h1>
//  //       <h2>{th.name}</h2>
//  //       {th.hikes.map((thh) =>
//  //         <ul key={thh}>
//  //           <img src={thh.image_url} alt="hike-images" style={{ width: 1000, height: 600 }} /><br />
//  //           <h4><FmdGoodRounded />{th.location}</h4>
//  //           <b>elevation_gain:</b> {thh.elevation_gain} <b>distance:</b> {thh.distance}
//  //         </ul>)}
//  //       {th.hikes.map((h) => <div key={h}><HikingRounded /> difficulty: <b>{h.difficulties}</b></div>)}
//  //       {th.amenities.map((am) => <div key={am}><Check />{am}</div>)}
//  //       <h4>{th.fees}</h4>
//  //       <Link href={th.directions} variant="body2">
//  //         <RouteIcon /> Directions
//  //       </Link><br /><br />
//  //       {/* <a href={th.directions}>Directions</a><br/> */}
//  //       {/* <div>
//  //         <a id='card-link' href={th.directions}>
//  //         <RouteIcon /> Directions
//  //         </a>
//  //         </div><br/><br/> */}
//  //       <Button
//  //         variant="contained"
//  //         disabled={!!isInVisited}
//  //         onClick={() => handleAddToVisit(trailhead)}
//  //       >
//  //         {loading ? "Adding..." : "Add To Visit"}
//  //       </Button>
//  //       {errors.length > 0 && (
//  //         <ul style={{ color: "red" }}>
//  //           {errors.map((error) => (
//  //             <li key={error}>{error}</li>
//  //           ))}
//  //         </ul>
//  //       )}
//  //     </center></div>
//  //   )
//  // };

//  // return (
//  //     <div>
//  //       <Button align='right' variant='body1' onClick={() => navigate('/homepage')}>Go back to homepage</Button><br />
//  //       <Grid sx={{ flexGrow: 1 }} container spacing={3}>
//  //         <Typography align='center' variant='h5'>{th.name}</Typography><br />
//  //         {th.hikes.map((hike) =>
//  //           <Grid key={hike.id}>
//  //             <Grid
//  //               item xs={2} md={5}
//  //               container
//  //               justifyContent="center"
//  //               spacing={-0.01}>
//  //               <Card sx={{ maxWidth: 488 }}>
//  //                 <CardMedia
//  //                   sx={{ width: 601, height: 250 }}
//  //                   image={hike.image_url}
//  //                   title="yosemite"
//  //                 />
//  //               </Card><br />
//  //               <CardContent>
//  //                 <Typography variant='body1'><FmdGoodRounded />{th.location}</Typography><br />
//  //                 <Typography variant='body1'>{th.hikes.map((thh) => <div><b>elevation_gain:</b> {thh.elevation_gain} <b>distance:</b> {thh.distance}</div>)}</Typography>
//  //                 <Typography variant='body2'>{th.amenities.map((amenity) => <div key={amenity}><Check />{amenity}</div>)}</Typography>
//  //                 {th.fees}
//  //               </CardContent>
//  //               <Link href={th.directions} variant="body2">
//  //                 <RouteIcon /> Directions
//  //               </Link><br /><br />

//  //             </Grid>
//  //             <Button
//  //               variant="contained"
//  //               disabled={!!isInVisited}
//  //               onClick={() => handleAddToVisit(trailhead)}
//  //             >
//  //               {loading ? "Adding..." : "Add To Visit"}
//  //             </Button>
//  //           </Grid>
//  //         )}
//  //       </Grid>
//  //       {errors.length > 0 && (
//  //         <ul style={{ color: "red" }}>
//  //           {errors.map((error) => (
//  //             <li key={error}>{error}</li>
//  //           ))}
//  //         </ul>
//  //       )}
//  //     </div>
//  //   )
//  // }


//  return (
//   <Grid sx={{ flexGrow: 1 }} col={3}>

//    {th.hikes.map((hike) =>
//     <Grid key={hike.id}>
//      <Typography align='center' variant='h5'>{th.name}</Typography><br />

//      <Grid
//       item xs={1} md={12}
//       container
//       justifyContent="center"
//       spacing={-0.01}>
//       <Card sx={{ maxWidth: 800 }}>

//        <Item>
//         <CardMedia
//          sx={{ width: 800, height: 350 }}
//          image={hike.image_url}
//          title="yosemite"
//         />
//        </Item>

//        <Typography variant='body1' align='center'>
//         <FmdGoodRounded />
//         {th.location}
//        </Typography><br />

//        {th.hikes.map((thh) =>
//         <Typography variant='body1' align='center' key={thh.id}>
//          <b>elevation_gain:</b> {thh.elevation_gain} <b>distance:</b> {thh.distance}
//         </Typography>
//        )}

//        {th.amenities.map((amenity, index) =>
//         <Typography variant='body2' align='center' key={index}>
//          <Check />{amenity}
//          {th.fees}
//         </Typography>
//        )}
//        <CardContent>

//         <Link href={th.directions} variant="body2">
//          <RouteIcon /> {' '}Directions
//         </Link><br /><br />
//         <Button
//          align='center'
//          variant="contained"
//          disabled={!!isInVisited}
//          onClick={() => handleAddToVisit(trailhead)}
//         >
//          {loading ? "Adding..." : "Add To Visit"}
//         </Button>

//        </CardContent>
//       </Card>
//      </Grid>
//     </Grid>
//    )}
//    {errors.length > 0 && (
//     <ul style={{ color: "red" }}>
//      {errors.map((error) => (
//       <li key={error}>{error}</li>
//      ))}
//     </ul>
//    )}
//   </Grid>
//  );
// };