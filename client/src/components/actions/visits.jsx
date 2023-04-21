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

// loadVisits => an action which is considered a function 

// dispatch on load 
import { headers } from '../../Global';
import { setErrors } from './errors'

export const loadVisits = () => {
   return dispatch => {
      // async calls 
      fetch('/visits')
         .then((resp) => resp.json())
         .then((data) => {
            // console.log(data, "action: loadVisits")
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
export const deleteVisit = (id, header) => {
   return dispatch => {
      fetch(`/visits/${id}`, {
         method: "DELETE",
         header,
      })
         .then(resp => resp.json())
         .then(data => {
            dispatch({
               type: "DELETE_VISIT",
               payload: id
               //   payload: data.id
            });
         })
   }
}

export const editVisit = (id, setIsLoading, visited_date, navigate) => {
   return dispatch => {
      setIsLoading(true);
      fetch(`/visits/${id}`, {
         method: 'PATCH',
         headers,
         body: JSON.stringify({
            visited_date,
         }),
      })
         .then((resp) => resp.json())
         .then(data => {
            if (data.errors) {
               setErrors(data.errors)
               dispatch(setErrors(data.errors))
            } else {
               setIsLoading(false);
               const action = {
                  type: "EDIT_VISIT",
                  payload: data
               }
               dispatch(action)
               console.log(data, "Trailhead date has been updated(edited)!")
            }
         })
      navigate('/visits')
   }
}

export const addVisit = (th, vi, navigate) => {
   console.log(JSON.stringify({
      visited_date: vi.visited_date,
      trailhead_id: th.id,
      visited: vi.visited
   }), "visits addVisit action!")
   return dispatch => {
      fetch('/visits', {
         method: 'POST',
         headers,
         body: JSON.stringify({
            visited_date: vi.visited_date,
            trailhead_id: th.id,
            visited: vi.visited,
         })
      })
         .then((resp) => resp.json())
         .then((data) => {
            if (data.errors) {
               setErrors(data.errors)
               dispatch(setErrors(data.errors))
            } else {
               dispatch({
                  type: "ADD_USER_VISIT",
                  payload: data
               })
               // navigate('/homepage')
               dispatch({
                  type: "ADD_VISIT",
                  payload: data
               })
               navigate('/me')
            }
         })
   }
}