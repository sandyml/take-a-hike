// import React, { useState, useEffect } from 'react';
// import { useHistory, useParams } from 'react-router-dom';
// import { headers } from '../../Global';

// export const VisitEdit = () => {
//  const [isLoading, setIsLoading] = useState(false);
//  const [visited, setVisited] = useState("");
//  const [visited_date, setVisitedDate] = useState("");
//  const { id } = useParams();

//   const history = useHistory();

//   useEffect(() => {
//    fetch("/visits")
//      .then((resp) => resp.json())
//      .then((data) => {
//        console.log(data, "Visits in Visit Edit")
//      })
//      .catch((error) => console.log(error, "An error occurred.")
//      );
//  }, []);

//   function handleSubmit(e) {
//     e.preventDefault();
//     setIsLoading(true); 
//     fetch(`/visits/${id}`, {
//       method: 'PATCH',
//       headers,
//       body: JSON.stringify({
//         // trailhead_id,
//         visited_date,
//         visited
//       }),
//     })
//       .then((r) => r.json())
//       .then(data => {
//         setIsLoading(false);
//         // editVisitDate(data)
//         console.log(data, "visit has been updated(edited)!")
//       });
//       history(`/locations`)
//   }

//   return (
//     <section>
//       <h3> Edit Your Previous Visit Date </h3>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <input
//             type="text"
//             id="hikes"
//             // defaultValue={trailhead_id}
//             // onChange={(e) => setReview(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             id="review"
//             defaultValue={visited_date}
//             // onChange={(e) => setVisitDate(e.target.value)}
//           />
//         </div>
//         <div>
//           <input
//             type="text"
//             id="date"
//             placeholder="DD-MM-YYYY"
//             defaultValue={visited}
//             // onChange={(e) => setVisit(e.target.value)}
//           />
//         </div>
//         <button type="submit" value="Update Review">{isLoading ? "Loading..." : "Submit"}</button>
//       </form>
//     </section>
//   )
// }