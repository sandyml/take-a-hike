// [x] TODO: MAKE SURE TO KEEP EVERYTHING DRY! 
 // [x] No need for THUNK because not returning a function 
  // [x] simply return an obj => obj matches payload (errors)
// [] payload only needed when there is data to provide for reducer

export const setErrors = (errors) => {
 return {
  type: "SET_ERRORS",
  payload: errors
 }
}

// [x] TODO: clear errors method 
export const clearErrors = () => {
 return {
  type: "CLEAR_ERRORS"
 }
}