import './App.css';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/navigation/Navbar';
import { Home } from './components/intro/Home';
import { Signup } from './components/authen/Signup';
import { Login } from "./components/authen/Login";
import { TermsPolicy } from './components/authen/TermsPolicy';
// import { HikeCarousel } from './components/intro/HikeCarousel';
// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import NotFound from './components/navigation/NotFound';
import { VisitEdit } from './components/hike/EditForm';

// [] TODO: If currentUser logged in show trails if not show login and signup to login 
// [] TODO: add back carousel when done (too many distractions) 
// [] TODO: add two more reducers: hikes and trailheads 

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const visits = useSelector((store) => store.visitsReducer);
  // const users = useSelector((store) => store.usersReducer.currentUser);
  // const errors = useSelector((store) => store.errorsReducer);

  console.log(visits, "redux visits State")
  // console.log(users, "redux users State")
  // console.log(errors, "redux errors State")
  // setIsLoading(true); 


  return (
    <>
      <Navbar />
      {
        isLoading ? <h1>Loading...please wait..</h1> :
          <Routes>
            {/* <HikeCarousel/> */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/visits/:id" element={<VisitEdit />} />
            <Route path="/termsandconditions" element={<TermsPolicy />} />
            <Route path="/*" element={<NotFound />} />
            {/* <Route path="/visits" element={<VisitList />} /> */}
            {/* <Route path="/visits/new" element={<AddForm />} /> */}
          </Routes>
      }
    </>
  );
}