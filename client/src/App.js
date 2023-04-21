import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';

import HomePage from './components/intro/HomePage';

import { TermsPolicy } from './components/authen/TermsPolicy';
import { Signup } from './components/authen/Signup';
import { Login } from "./components/authen/Login";
import Logout from './components/authen/Logout';

import { VisitList } from './components/hike/VisitList';
import { EditForm } from './components/hike/EditForm';
import { MyVisitList } from './components/hike/MyVisitList';

import NotFound from './components/navigation/NotFound';

import { loadCurrentUser, loadUsers } from './components/actions/users';
import { loadTrailheads } from './components/actions/trailheads';
import { loadVisits } from './components/actions/visits';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { Trailheads } from './components/trailheads/Trailheads';
import { Copyright } from './components/copyright/Copyright';
import { MyVisits } from './components/visits/MyVisits';
import Pricing from './components/visits/MyVisitsCard';
import PricingContent from './components/visits/MyVisitsCard';
import YouTube from './components/visits/MyVisitsCard';
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
        {
          isLoading ? <h1>Loading...please wait..</h1> :
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/homepage" element={<HomePage />} />
              <Route path="/me" element={<MyVisitList isLoading={isLoading}/>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/visits/:id/edit" element={<EditForm />} />
              <Route path="/visits" element={<VisitList isLoading={isLoading}/>} />
              <Route path="/trailheads" element={<Trailheads isLoading={isLoading}/>} />
              <Route path="/termsandconditions" element={<TermsPolicy />} />
              <Route path="/myvisits" element={<MyVisits />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
        }
        <Copyright />
      </LocalizationProvider>
  );
}