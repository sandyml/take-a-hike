// be able to load in our visits (that we have visited) 
// turning it from having an initial state to have real state of our objects 
// what to do: instead of useEffect fetching the '/visits', getting the json response and getting our data we're updating state 
// the fetch will be handled by the middleWare that we call THUNK 
// where we are updating state setState(data) will be handled by our reducer that manages state 
// add tunk in const store inside index.js install package for thunk 

// when we are doing asyn activities with Redux - Redux needs a little help (boost) 
// Redux is not designed to have the delays, async delays 
// What we do: Add a middleWare called thunk which allows us to put asleep on the process of the flow of updating state and then once that process completes then we are able to update state
// MUST: cancel our server before installing anything. 

// loadViists => an action which is considered a function 


// dispatch on load 
import { headers } from '../../Global';
// import { useNavigate } from 'react-router-dom';
import { setErrors } from './errors'

export const loadVisits = () => {
   return dispatch => {
      // async calls 
      fetch('/visits')
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data, "action: loadVisits")
            const action = {
               type: "LOAD_VISITS",
               payload: data
            } // this action is an obj (has type & payload action.type, action.payload -> data will be given from the backend)
            dispatch(action) // dispatch action to reducer 
         })
   }
}

// const deleteVisitDate = (deleteVisitDate) => {
//   const updatedVisits = visits.filter((visit) => visit.id !== deleteVisitDate.id)
//   setVisits(updatedVisits)
// };
export const deleteVisit = (id) => {
   return dispatch => {
      fetch(`/visits/${id}`, {
         method: 'DELETE',
      })
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data, "action: deleteVisit")
            const action = {
               type: "DELETE_VISIT",
               payload: id
            }
            dispatch(action)
         })
   }
}

// export const editVisit = (setIsLoading, id, headers, visited_date, visits, trailhead_id, navigate) => {
//    setIsLoading(true);
//    return dispatch => {
//       fetch(`/visits/${id}`, {
//          method: 'PATCH',
//          headers,
//          body: JSON.stringify({
//             visited_date,
//             visits,
//             trailhead_id
//          })
//             .then((resp) => resp.json())
//             .then((data) => {
//                console.log(data, "action: editVisit")
//                const action = {
//                   type: "EDIT_VISIT",
//                   payload: data
//                }
//                dispatch(action)
//                navigate('/visits')
//             })
//       })
//    }
// }

export const editVisit = (id, setIsLoading, trailhead_id, trailhead, visited_date, navigate) => {
   return dispatch => {
      setIsLoading(true); 
      fetch(`/visits/${id}`, {
        method: 'PATCH',
        headers,
        body: JSON.stringify({
          trailhead,
          trailhead_id,
          visited_date
        }),
      })
        .then((r) => r.json())
        .then(data => {
          setIsLoading(false);
          const action = {
            type: "EDIT_VISIT",
            payload: data
         }
         dispatch(action)
          console.log(data, "Trailhead date has been updated(edited)!")
        });
        navigate(`/visits`)
   }
}

export const addVisit = (headers, visited_date, trailhead_id, navigate) => {
   return dispatch => {
      fetch('visits', {
         method: 'POST',
         headers,
         body: JSON.stringify({
            visited_date,
            trailhead_id,
         })
      })
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data, "action: addVisit")
            if (data.errors) {
               setErrors(data.errors)
               // const action = {
               //    type: "SET_ERRORS",
               //    payload: data.errors
               // } // inside error.jsx/errors folder 
               dispatch(setErrors(data.errors))
            } else {
               const action = {
                  type: "ADD_VISIT",
                  payload: data // => action.payload 
               }
               dispatch(action)
               navigate('/visits')
            }
         })
   }
}