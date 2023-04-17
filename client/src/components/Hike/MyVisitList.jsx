import React from 'react';
import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';

export const MyVisitList = () => {
  const { visits } = useSelector((state) => state.visitsReducer);
  // const { currentUser } = useSelector((state) => state.usersReducer )
  console.log(visits);

  // const { id } = useParams();

  // const visitedCard = visits.find((vis) => vis.user.visited && vis.user.username === true);
  // const visited = visits.find(visit => visit.id === parseInt(id, 10));
  // const v = visits.find(visit => visit.id === parseInt(id, 10));

  // const visited = () => {
  //   if (visits.length > 0) {
  //     const visit = visits.find((vt) => vt.id && vt.user.username === parseInt(id, 10))
  //   }
  // }
  
return (
    <div>
      <h1><center>Trailheads I've Visited</center></h1>
      {/* {visitedCard} */}
      {/* {visited} */}

      {/* { currentUser && currentUser.id ?  
      <div> {visited} </div> : "No Visited Found"
      } */}
    
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
