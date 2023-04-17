const trailheadsReducer = (state = [], action) => {
 switch (action.type) {
  case "LOAD_TRAILHEADS":
   return action.payload
  default:
   return state;
 }
}

export default trailheadsReducer;
