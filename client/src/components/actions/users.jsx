// const deleteVisitDate = (deleteVisitDate) => {
//   const updatedVisits = visits.filter((visit) => visit.id !== deleteVisitDate.id)
//   setVisits(updatedVisits)
// };

export const loadUsers = (handleLoginUser, setIsLoading) => {
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