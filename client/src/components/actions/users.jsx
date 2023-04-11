export const loadUsers = () => {
 return dispatch => {
  fetch('/me')
   .then((resp) => resp.json())
   .then((data) => {
    console.log(data, "Inside user action")
    if (!data.errors) {
     handleLoginUser(data)
    }
    setIsLoading(false)
    const action = {
     type: "LOAD_USERS",
     payload: data
    }
    dispatch(action)
   })
 }
}