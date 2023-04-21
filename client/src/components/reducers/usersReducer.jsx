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
        // visits: [...state, action.payload]
        visits: [...state.visits, action]
        // visited_date: action.payload}
        // visits: [...state.visits, action.payload]
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