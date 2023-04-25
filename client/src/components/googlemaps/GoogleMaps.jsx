import {
  GoogleMap,
  InfoWindow,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";
import { useState } from "react";

// optional 

const GoogleMaps = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY,
  });
  const [mapRef, setMapRef] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [infoWindowData, setInfoWindowData] = useState();

  const markers = [
  { name: "Zion National Park", lat: 37.269939, lng: -113.107468 },
  { name: "Yosemite National Park", lat: 37.746540, lng: -119.590584 },
  { name: "Glacier National Park", lat: 36.845200, lng: -118.717640 },
  { name: "Grand Canyon National Park", lat: 35.965000, lng: -111.973793 },
  { name: "Rocky Mountain National Park", lat: 40.187141, lng: -105.867958 },
  { name: "Bryce Canyon National Park", lat: 37.627361, lng: -112.185257 },
  { name: "Arches National Park", lat: 38.733082, lng: -109.592514 },
  { name: "Olympic National Park", lat: 36.845200, lng: -118.717640 },
];

  // const markers = useSelector((state) => state.trailheadsReducer);
  // debugger
  // const trh = trailheads.map((tr) => <div key={tr.id}> {tr.name} {tr.longitude} {tr.latitude} </div>);
  // console.log(trh, "trh")

  const google=window.google

  const onMapLoad = (map) => {
    setMapRef(map);
    const bounds = new google.maps.LatLngBounds();
    markers?.forEach(({ lat, lng }) => bounds.extend({ lat, lng }));
    map.fitBounds(bounds);
  };

  const handleMarkerClick = (id, lat, lng, name) => {
    mapRef?.panTo({ lat, lng });
    setInfoWindowData({ id, name });
    setIsOpen(true);
  };

  return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          // mapContainerClassName="map-container"
          onLoad={onMapLoad}
          onClick={() => setIsOpen(false)}
        >
          {markers.map(({ name, lat, lng }, ind) => (
            <Marker
              key={ind}
              position={{ lat, lng }}
              onClick={() => {
                handleMarkerClick(ind, lat, lng, name);
              }}
            >
              {isOpen && infoWindowData?.id === ind && (
                <InfoWindow
                  onCloseClick={() => {
                    setIsOpen(false);
                  }}
                >
                  <h3>{infoWindowData.name}</h3>
                </InfoWindow>
              )}
            </Marker>
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default GoogleMaps;

const containerStyle = {
  width: '600px',
  // height: '600px'
}; // Use any size you want!

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
// } // This is New York City