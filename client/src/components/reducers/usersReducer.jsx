// const [users, setUsers] = useState([]) => users: []
// const [currentUser, setCurrentUser] = useState(null) => currentUser: null 
// const [loggedIn, setLoggedIn] = useState(false) => loggedIn: false

const initialState = {
  users: [],
  currentUser: null,
  loggedIn: false,
  visits: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return {
        ...state,
        user: action.payload
        // loggedIn: true
      }
    case "LOAD_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true
      }
    case "LOAD_LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true
      }
    case "LOAD_SIGNUP_USER":
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true
      }
    case "LOAD_ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload]
      }
    case "DELETE_USERS_VISIT":
      return {
        ...state,
        visited: action.payload
      }
    case "ADD_USER_VISIT":
      return {
        ...state,
        visits: [...state.visits, action.payload]
      //   visits: [...state.visits, action.payload] // might not need payload 
      //   // visited_date: action.payload}
      //   // visits: [...state.visits, action.payload]
      // }
      // return state.map((visit) => {
      //   if (action.payload.id === visit.trailhead_id) {
      //     return action.payload;
      //   } else {
      //     return [...visit.visited, action.payload];
        }
      // })
    case "LOAD_LOGOUT_USER":
      return {
        ...state,
        currentUser: null,
        loggedIn: false
      }
    default:
      return state;
  }
}

// const handleAddReview = ht => {
//   const updatedAddedReviews = locations.map(location => {
//     console.log(ht, "LocationContext")
//     if(ht.location_id === location.id) {
//       // construct new clone
//       return {
//          ...location, 
//          // what location do we need to update
//          hike_trails: [...location.hike_trails, ht] // map over location .hiketrails 
//       }
//     } else {
//       return location;
//     }
//   })
//   setLocations(updatedAddedReviews);
// }

export default usersReducer;