// const [users, setUsers] = useState([]) => users: []
// const [currentUser, setCurrentUser] = useState(null) => currentUser: null 
// const [loggedIn, setLoggedIn] = useState(false) => loggedIn: false
// [] loggin, [] logout, [] user, [] currentUser 

const initialState = {
  users: [],
  currentUser: null,
  loggedIn: false,
  visited: []
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
      return{
        ...state,
        users: [...state.users, action.payload]
      }
    case "LOAD_ADD_VISITED_TRAILHEAD":
      return{
        ...state,
       visited: action.payload
      }
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

export default usersReducer;