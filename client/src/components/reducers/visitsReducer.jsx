import { updateResource } from "../../Global";

const visitsReducer = (state = [], action) => {
  switch (action.type) {
    case "LOAD_VISITS":
      return action.payload   
    case "DELETE_VISIT":
      return state.filter((visit) => visit.id !== action.payload)
    case "DELETE_USERS_VISIT":
      return state.filter((visit) => visit.id !== action.payload)
    case "EDIT_VISIT":
      return updateResource(state, action.payload);
    case "ADD_VISIT":
      return [...state, action.payload]
    default:
      return state;
  }
}

export default visitsReducer;