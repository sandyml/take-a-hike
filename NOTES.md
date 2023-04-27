<!-- // const containerStyle = {
//   width: '600px',
//   // height: '600px'
// }; // Use any size you want!

// import React, { useCallback, useRef, useState } from 'react';
// import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';
// import { useSelector } from 'react-redux';
// import { PinDrop } from '@mui/icons-material';

// // REVISIT 
// export default function GoogleMaps() {

//   const [mapRef, setMapRef] = useState();
//   const [isOpen, setIsOpen] = useState(false);
//   const [infoWindowData, setInfoWindowData] = useState();
//   const markers = [
//     { name: "Address1", latitude: 18.5204, longitude: 73.8567 },
//     { name: "Address2", latitude: 18.5314, longitude: 73.8446 },
//     { name: "Address3", latitude: 18.5642, longitude: 73.7769 },
//   ];

//   const google=window.google
//   const onMapLoad = (map) => {
//     setMapRef(map);
//     const bounds = new google.maps.LatitulatitudeLongilongitudeBounds();
//     markers?.forEach(({ latitude, longitude }) => bounds.extend({ latitude, longitude }));
//     map.fitBounds(bounds);
//   };

//   const handleMarkerClick = (id, latitude, longitude, name) => {
//     mapRef?.panTo({ latitude, longitude });
//     setInfoWindowData({ id, name });
//     setIsOpen(true);
//   };

//   const trailheads = useSelector((state) => state.trailheadsReducer);

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
//   });

//   console.log(process.env);


//   // const mapRef = useRef();

//   // const onMapLoad = useCallback((map) => {
//   //   mapRef.current = map;
//   // }, []);

//   if (loadError) return "Error";
//   if (!isLoaded) return "Maps";

//   return (
//     <GoogleMap
//       mapContainerStyle={containerStyle}
//       // latitude={trailheads.map((trm) => trm.latitudeitude)}
//       // longitude={trailheads.map((trm) => trm.longitude)}
//       center={center}
//       zoom={15}
//       onLoad={onMapLoad}

//     >
//       {
//         trailheads.map(({ latitudeitude, longitude }, ind) => (
//           <Marker
//           key={ind}
//           position={{latitudeitude, longitude}}
//           onClick={() => {
//             handleMarkerClick(ind, latitudeitude, longitude)
//           }}
//            />
//         ))
//       }
//     </GoogleMap>
//   )
// }

// const containerStyle = {
//   width: '800px',
//   height: '800px'
// }; // Use any size you want!

// const center = {
//   latitude: 40.7128,
//   longitude: -74.0060,
// } // This is New York City -->


<!-- // myvisitlist  -->

<!-- //   return (
//     <div><center>
//       <HeaderNav />
//       <Typography align='center' variant='h2'>Trailheads I've Visited</Typography><br />
//       <Button align='right' variant='body1' onClick={() => navigate('/homepage')}>
//         Go back to homepage
//       </Button><br /><br />
//       {/* <Parallax style={mountain_image} bgImage={backgroundImage} strength={680}><br /> */}
//         {/* <Grid
//         container item xs={10}
//           columns={2}
//           align="horizontal"
//           spacing={0}
//           direction="column"
//           alignItems="center"
//           justify="center"
//           style={{ minHeight: '100vh' }}
//         > */}
//           <Grid >
//           <Grid>
//               {currentUser.visits.map((current) =>
//                 <Grid key={current.id}>

//                     <Card sx={{ maxWidth: 311 }} >
//                       {current.hike.map((ch) =>
//                         <CardMedia
//                           key={ch.id}
//                           sx={{ width: 601, height: 230 }}
//                           image={ch.image_url} />
//                       )}
//                       <CardContent sx={{ height: 80 }}>
//                         <Typography align='center' gutterBottom variant="h5" component="div">
//                           {current.trailhead.name}
//                         </Typography>
//                         <Typography align='center' variant="body2" color="text.secondary">
//                           {current.trailhead.location}<br /><br />
//                           {' '}You visited on {current.visited_date}
//                         </Typography>
//                       </CardContent>
//                     </Card><br />
                  
//                 </Grid>
//               )}
//             </Grid>

//             <Typography justifyContent="center">
//             </Typography>

//             <br />
//           </Grid>
//       {/* </Parallax> */}
//     </center>
//     </div>
//   );
// } -->
