export const loadUsers = (setIsLoading) => {
  return dispatch => {
    fetch('/users')
      .then((resp) => resp.json())
      .then((data) => {
         console.log(data, "action: user /users")
         const action = {
           type: "LOAD_USERS",
           payload: data
         }
         setIsLoading(false);
         dispatch(action);
       })
 }
}

// thunk takesover using dispatch return dispatch => {}
export const loadCurrentUser = (setIsLoading) => {
  return dispatch => {
      fetch('/me')
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.errors) {
          console.log(data, "action: '/me")
          // dispatch store currentuser and logs in 
          // handleLoginUser(data)
          const action = {
            type: "LOAD_CURRENT_USER",
            payload: data
          }
          dispatch(action);
        } else {
          setIsLoading(false);
        }
      })
  }
}