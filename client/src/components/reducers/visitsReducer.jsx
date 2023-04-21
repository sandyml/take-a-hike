// NOTE: Reducers have to be functions 

// Make sure the correct array of objects comes from the backend 
// const initialState = []

// will contain the state
// action.type, action.payload => action is an obj that has these key values applied
// action from visits action will be accepted here in the action
const visitsReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_VISITS":
      // will be our new state => data we give the payload from server and want to be displayed
      return action.payload  // return new non-destructive state, we'll need all the data, action.payload is out data that comes from the backend 
    case "DELETE_VISIT":
      // visits.filter((visit) => visit.id !== deleteVisitDate.id)
      return state.filter((visit) => visit.id !== action.payload)
    case "DELETE_USERS_VISIT":
      return state.filter((visit) => visit.id !== action.payload)
    case "EDIT_VISIT":
      return state.map((visit) => {
        if (action.payload.id === visit.trailhead_id) {
          return action.payload;
        } else {
          return visit;
        }
      })
    case "ADD_VISIT":
      return [...state, action.payload]
    default:
      return state;
  }
}

// rxreducer 
export default visitsReducer;