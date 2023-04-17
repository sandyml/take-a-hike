import React from 'react'
import { useSelector } from 'react-redux'

export const MyVisitList = () => {
 const visits = useSelector((state) => state.visitsReducer)
console.log(visits)

// const visitedCard = visits.find((vis) => vis.user.visited && vis.user.username === true)
// const v = visits.find(visit => visit.id === parseInt(id, 10));
  
return (
    <div>
      <h1><center>Trailheads I've Visited</center></h1>
      {/* {visitedCard} */}
    
{/* {
 visits.map((myVisits, m) => 
 <div key={m}>
  <p>{myVisits.trailhead.name}</p>
  <p>{myVisits.trailhead.fees}</p>
  <p>{myVisits.user.visited === "true" ? myVisits.user.username : "null"}</p>
  <hr/>
  </div>
 )
} */}
    </div>
  )
}
