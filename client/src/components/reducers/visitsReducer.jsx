// NOTE: Reducers have to be functions 

// Make sure the correct array of objects comes from the backend 
const initialState = [
 {
  id: 1,
  visited_date: "2023-02-10",
  visited: true, 
   user: {
    username: "Sandy",
    email: "sandy@gmail.com",
    password: "042823"
   }
 },
 {
  id: 2,
  visited_date: "2022-02-10",
  visited: false,
  user: {
   username: "Sandy",
   email: "sandy@gmail.com",
   password: "042823"
  }
 },
 {
  id: 3,
  visited_date: "2023-01-11",
  visited: true, 
  user: {
   username: "Sandy",
   email: "sandy@gmail.com",
   password: "042823"
  }
 },
]

// will contain the state
const visitsReducer = (state=initialState, action) => {
 return state;
}

export default visitsReducer;