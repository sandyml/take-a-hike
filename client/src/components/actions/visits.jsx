// be able to load in our visits (that we have visited) 
 // turning it from having an initial state to have real state of our objects 
 // what to do: instead of useEffect fetching the '/visits', getting the json response and getting our data we're updating state 
  // the fetch will be handled by the middleWare that we call THUNK 
   // where we are updating state setState(data) will be handled by our reducer that manages state 
   // add tunk in const store inside index.js install package for thunk 

// when we are doing asyn activities with Redux - Redux needs a little help (boost) 
 // Redux is not designed to have the delays, async delays 
  // What we do: Add a middleWare called thunk which allows us to put asleep on the process of the flow of updating state and then once that process completes then we are able to update state
  // MUST: cancel our server before installing anything. 