export const loadTrailheads = () => {
 return dispatch => {
  fetch('/trailheads')
   .then((resp) => resp.json())
   .then((data) => {
    // console.log(data, "action: loadTrailheads")
    dispatch({
     type: "LOAD_TRAILHEADS",
     payload: data
    })
   })
 }
};