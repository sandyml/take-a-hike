// const [users, setUsers] = useState([]) => users: []
// const [currentUser, setCurrentUser] = useState(null) => currentUser: null 
// const [loggedIn, setLoggedIn] = useState(false) => loggedIn: false

const initialState = {
 users: [],
 currentUser: null, 
 loggedIn: false
}

const usersReducer = (state=initialState, action) => {
 return state;
}

export default usersReducer;