import './App.css';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/navigation/Navbar';
import { Home } from './components/intro/Home';
import { Signup } from './components/authen/Signup';
import { Login } from "./components/authen/Login";
import { TermsPolicy } from './components/authen/TermsPolicy';
// import { HikeCarousel } from './components/intro/HikeCarousel';
// import { VisitEdit } from './components/Hike.jsx/VisitEdit';
// import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useState } from 'react';

// [] TODO: If currentUser logged in show trails if not show login and signup to login 
// [] TODO: add back carousel when done (too many distractions) 

export function App() {
  const [isLoading, setIsLoading] = useState(false);
  const reduxState = useSelector((store) => store.visitsReducer);
  console.log(reduxState, "redux State")
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
            <Route path="/termsandconditions" element={<TermsPolicy />} />
            {/* <Route path="/visits" element={<VisitList />} /> */}
            {/* <Route path="/visits/new" element={<AddForm />} /> */}
            {/* <Route path="/visits/:id" element={<EditForm />} /> */}
          </Routes>
      }
    </>
  );
}