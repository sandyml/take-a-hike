import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { HomePage } from './components/intro/HomePage';

import { TermsPolicy } from './components/authen/TermsPolicy';
import { Signup } from './components/authen/Signup';
import { Login } from "./components/authen/Login";

import { EditForm } from './components/hike/EditForm';
import { VisitList } from './components/hike/VisitList';

import NotFound from './components/navigation/NotFound';

import AllTrailheads from './components/trailheads/AllTrailheads';
import { Trailheads } from './components/trailheads/Trailheads';
import { Copyright } from './components/copyright/Copyright';
import { PlacesIVisited } from './components/visits/PlacesIVisited';
import { MyVisits } from './components/visits/MyVisits';
import GoogleMaps from './components/googlemaps/GoogleMaps';

import { loadCurrentUser, loadUsers } from './components/actions/users';
import { loadTrailheads } from './components/actions/trailheads';
import { loadVisits } from './components/actions/visits';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import HomepageIntroCards from './components/intro/HomepageIntroCards';
import { DialogMap } from './components/intro/DialogMap';
import { Logout } from './components/authen/Logout';


export function App() {
  const [isLoading, setIsLoading] = useState(true);

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
          <Routes>
              <Route path="/" element={<HomePage isLoading={isLoading} />} />
              <Route path="/my-visits" element={<MyVisits isLoading={isLoading} />} />
              <Route path="/login" element={<Login isLoading={isLoading} />} />
              <Route path="/signup" element={<Signup isLoading={isLoading} />} />
              <Route path="/logout" element={<Logout isLoading={isLoading} />} />
              <Route path="/visits/:id/edit" element={<EditForm isLoading={isLoading} />} />
              <Route path="/visits" element={<VisitList isLoading={isLoading}/>} />
              <Route path="/termsandconditions" element={<TermsPolicy />} />
              <Route path="/*" element={<NotFound />} />
              <Route path="/gmaps" element={<GoogleMaps />} />
              <Route path="/intro-cards" element={<HomepageIntroCards />} />
              <Route path="/trailheads" element={<Trailheads isLoading={isLoading}/>} />
              <Route path="/all-trailheads" element={<DialogMap />} />
            </Routes>
        <Copyright />
      </LocalizationProvider>
  );
}