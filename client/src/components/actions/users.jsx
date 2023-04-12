export const loadUsers = (setIsLoading) => {
  return dispatch => {
    fetch('/users')
      .then((resp) => resp.json())
      .then((data) => {
         console.log(data, "action: user /me")
         const action = {
           type: "LOAD_USERS",
           payload: data
         }
         setIsLoading(false);
         dispatch(action);
       })
 }
}

// loadCurrentUser
// loadLogoutUser => return nothing not payload 
// DRY 


// return a functiion 
// export const loadCurrentUsers = (handleLoginUser, setIsLoading) => {
//  return dispatch => {
//   fetch('/me')
//    .then((resp) => resp.json())
//    .then((data) => {
//     console.log(data, "action: user /me")
//     if (!data.errors) {
//      handleLoginUser(data)
//     }
//     setIsLoading(false)
//     const action = {
//      type: "LOAD_USERS",
//      payload: data
//     }
//     dispatch(action)
//    })
//  }
// }