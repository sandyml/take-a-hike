// const [errors, setErrors] = useState([]) => [] empty 
// will contain the state
export const errorsReducer = (state = [], action) => {
 // return dispatch => {
  switch(action.type) {
   case "SET_ERRORS":
    return action.payload // data.errors ('not authorized: user visit date must exit')
   case "CLEAR_ERRORS": // no need for payload 
    return [];
   default:
    return state;
   }
 // }
}

export default errorsReducer;