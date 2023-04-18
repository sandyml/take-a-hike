import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import { TermsPolicy } from './components/authen/TermsPolicy';
import { Signup } from './components/authen/Signup';
import { Login } from "./components/authen/Login";
import Logout from './components/authen/Logout';
// import { HikeCarousel } from './components/intro/HikeCarousel';
import { Home } from './components/intro/Home';
import { VisitList } from './components/hike/VisitList';
import { EditForm } from './components/hike/EditForm';
import { Navbar } from './components/navigation/Navbar';
import NotFound from './components/navigation/NotFound';
import { loadCurrentUser, loadUsers } from './components/actions/users';
import { loadTrailheads } from './components/actions/trailheads';
import { loadVisits } from './components/actions/visits';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { MyVisitList } from './components/hike/MyVisitList';
// import { FavoritedList } from './components/hike/FavoritedList';
import { Trailheads } from './components/trailheads/Trailheads';
// import SimpleMap from './components/navigation/SimpleMap';

// [] TODO: If currentUser logged in show trails if not show login and signup to login 
// [] TODO: add back carousel when done (too many distractions) 
// [] TODO: add two more reducers: hikes and trailheads 

export function App() {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch(); 
  // will grab all of the data(things), run once
  // if loadVisits returns a func then thunk is going to take over because loadVisits takes in a func async activity thunk will run it and wait for ascyn to get finish before it does a state update  
  useEffect(() => {
    // make sure to call ()
    dispatch(loadCurrentUser(setIsLoading))
    dispatch(loadUsers(setIsLoading))
    dispatch(loadTrailheads()) 
    dispatch(loadVisits())
  }, [dispatch]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        {
          isLoading ? <h1>Loading...please wait..</h1> :
          <Routes>
              {/* <HikeCarousel/> */}
            
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/visits/:id/edit" element={<EditForm />} />
              <Route path="/visits" element={<VisitList />} />
              {/* <Route path="/favorites" element={<FavoritedList />} /> */}
              <Route path="/my_visits" element={<MyVisitList />} />
              <Route path="/trailheads" element={<Trailheads />} />
              <Route path="/termsandconditions" element={<TermsPolicy />} />
              <Route path="/*" element={<NotFound />} />
              {/* <Route path="/map" element={<SimpleMap />} /> */}
              {/* <Route path="/visits" element={<VisitList />} /> */}
              {/* <Route path="/visits/new" element={<AddForm />} /> */}
            </Routes>
        }
      </LocalizationProvider>
  );
}