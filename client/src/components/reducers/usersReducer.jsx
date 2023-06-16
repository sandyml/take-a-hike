const initialState = {
  currentUser: null,
  loggedIn: false,
  visits: []
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    // case "LOAD_USERS":
    //   return {
    //     ...state,
    //     users: action.payload
    //   }
    case "LOAD_LOGIN_USER":
      return {
        ...state,
        currentUser: action.payload,
        visits: action.payload.visits,
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
    // case "LOAD_ADD_USER":
    //   return {
    //     ...state,
    //     users: [...state.users, action.payload]
    //   }
    case "LOAD_ADD_USER":
      return {
        ...state
      }
    case "DELETE_USERS_VISIT":
      return {
        ...state,
        visits: state.visits.filter((visit) => visit.id !== action.payload)
      }
    // case "EDIT_USERS_VISIT":
    //   return {
    //     visits: state.visits.map((visit) => {
    //       if(action.payload.id === visit.id) {
    //         return action.payload;
    //       } else {
    //         return visit;
    //       }
    //     })
    //   }
    case "EDIT_USERS_VISIT":
      const updatedDate = state.visits.map(visit => visit.id === action.payload.id ? action.payload : visit);
      return {
        ...state,
        visits: updatedDate
      };
    // case "EDIT_USERS_VISIT":
    //   return updateResource(state, action.payload);
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