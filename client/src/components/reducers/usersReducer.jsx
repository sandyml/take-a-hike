// const [users, setUsers] = useState([]) => users: []
// const [currentUser, setCurrentUser] = useState(null) => currentUser: null 
// const [loggedIn, setLoggedIn] = useState(false) => loggedIn: false
// [] loggin, [] logout, [] user, [] currentUser 

const initialState = {
  users: [],
  currentUser: null,
  loggedIn: false
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return { ...state, user: action.payload }
    case "LOAD_CURRENT_USER":
      return { 
        ...state, 
      currentUser: action.payload, 
      loggedIn: true
    }
    default:
      return state;
  }
}

export default usersReducer;