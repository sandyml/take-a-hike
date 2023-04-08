// NOTE: Reducers have to be functions 

// Make sure the correct array of objects comes from the backend 
const initialState = [
 {
  id: 1,
  visited_date: "2023-02-10",
  visited: true
 },
 {
  id: 2,
  visited_date: "2022-02-10",
  visited: false
 },
 {
  id: 3,
  visited_date: "2023-01-11",
  visited: true
 },
]

const visitsReducer = (state=initialState, action) => {
 return state;
}

export default visitsReducer;