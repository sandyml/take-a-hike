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
export const loadVisits = () => {
   return dispatch => {
      // async calls 
      fetch('/visits')
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data, "Inside visits action")
            const action = {
               type: "LOAD_VISITS",
               payload: data
            } // this action is an obj (has type & payload action.type, action.payload -> data will be given from the backend)
            dispatch(action) // dispatch action to reducer 
         })
   }
}

export const deleteVisit = (id) => {
   return dispatch => {
      fetch(`/visits/${id}`, {
         method: 'DELETE',
      })
         .then((resp) => resp.json())
         .then((data) => {
            console.log(data, "Deleted in action!")
            // const updatedState = visits.filter((visit) => data.id !== visit.id) // move to reducer  
            const action = {
               type: "DELETE_VISIT",
               payload: id
            }
            dispatch(action)
         })
   }
}