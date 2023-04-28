export const loadTrailheads = () => {
 return dispatch => {
  fetch('/trailheads')
   .then((resp) => resp.json())
   .then((data) => {
    console.log(data, "action: loadTrailheads")
    const action = {
      type: "LOAD_TRAILHEADS",
      payload: data
     }
    dispatch(action)
   })
 }
};