import React, { createContext, useEffect, useState } from 'react';

const TrailheadContext = createContext([]);

const TrailheadProvider = ({ children }) => {
 const [trailheads, setTrailheads] = useState([]);

 useEffect(() => {
  fetch('/trailheads')
   .then((resp) => resp.json())
   .then((data) => {
    console.log(data, "Trailhead Context")
    setTrailheads(data)
   })
 }, [])

 return (
  <TrailheadContext.Provider value={{ trailheads, setTrailheads }}>
   {children}
  </TrailheadContext.Provider>
 )
}

export { TrailheadContext, TrailheadProvider };