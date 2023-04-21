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
        users: action.payload
      }
    case "LOAD_LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
        loggedIn: true
      }
    case "LOAD_CURRENT_USER":
      return {
        ...state,
        currentUser: action.payload,
        visits: action.payload.visits,
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
      case "LOAD_LOGOUT_USER":
        return {
          ...state,
          currentUser: null,
          loggedIn: false
        }
      case "ADD_USER_VISIT":
        return {
          ...state,
          visits: [...state.visits, action.payload]
          }
    default:
      return state;
  }
}

export default usersReducer;