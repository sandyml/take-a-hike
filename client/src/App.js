import React, { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { useDispatch } from 'react-redux';

import { HomePage } from './components/intro/HomePage';
import HomepageIntroCards from './components/intro/HomePageIntroCards';

import { Signup } from './components/authen/Signup';
import { Login } from "./components/authen/Login";
import { Logout } from './components/authen/Logout';
import { TermsPolicy } from './components/authen/TermsPolicy';

import { EditForm } from './components/pages/EditForm';
import { VisitList } from './components/pages/VisitList';

import NotFound from './components/navigation/NotFound';

import { Trailheads } from './components/trailheads/Trailheads';
import { Copyright } from './components/copyright/Copyright';
import { MyVisits } from './components/visits/MyVisits';

import { loadCurrentUser } from './components/actions/users';
import { loadTrailheads } from './components/actions/trailheads';
import { loadVisits } from './components/actions/visits';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers';

import { DialogMap } from './components/googlemaps/DialogMap';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  // will grab all of the data(things), run once
  // if loadVisits returns a func then thunk is going to take over because loadVisits takes in a func async activity thunk will run it and wait for ascyn to get finish before it does a state update  
  useEffect(() => {
    // make sure to call ()
    dispatch(loadVisits())
    dispatch(loadTrailheads())
    dispatch(loadCurrentUser(setIsLoading))
  }, [dispatch]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login isLoading={isLoading} />} />
        <Route path="/signup" element={<Signup isLoading={isLoading} />} />
        <Route path="/logout" element={<Logout isLoading={isLoading} />} />
        <Route path="/visits/:id/edit" element={<EditForm />} />
        <Route path="/visits" element={<VisitList isLoading={isLoading} />} />
        <Route path="/my-visits" element={<MyVisits />} />
        <Route path="/all-trailheads" element={<DialogMap />} />
        <Route path="/trailheads" element={<Trailheads isLoading={isLoading} />} />
        <Route path="/intro-cards" element={<HomepageIntroCards />} />
        <Route path="/termsandconditions" element={<TermsPolicy />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Copyright />
    </LocalizationProvider>
  );
}