// const [users, setUsers] = useState([]) => users: []
// const [currentUser, setCurrentUser] = useState(null) => currentUser: null 
// const [loggedIn, setLoggedIn] = useState(false) => loggedIn: false

const initialState = {
  users: [],
  currentUser: null,
  loggedIn: false
}
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_USERS":
      return action.payload
    // case "HANDLE_LOGIN":
    //   return ((user) => {
    //     setCurrentUser(user);
    //     setLoggedIn(true)
    //   })
    default:
      return state;
  }
}

export default usersReducer;