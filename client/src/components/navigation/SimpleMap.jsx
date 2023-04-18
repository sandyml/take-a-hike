// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

// export default function SimpleMap() {
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//   });

//   if (!isLoaded) return <div>Loading...</div>;
//   return <Map />;
// }

// function Map() {
//   const center = useMemo(() => ({ lat: 40, lng: -79 }), []);

//   return (
//     <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//      not working? not working? 
//      not working? <br/>
//       <Marker position={center} /> not working? 
//     </GoogleMap>
//   );
// }