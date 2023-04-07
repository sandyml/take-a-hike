import './App.css';
import { Route, BrowserRouter as Routes } from "react-router-dom";
import { Navbar } from './components/navigation/Navbar';
import { Home } from './components/intro/Home';
import { Signup } from './components/authen/Signup';
import { Login } from "./components/authen/Login";
import { TermsPolicy } from './components/authen/TermsPolicy';
import { HikeCarousel } from './components/intro/HikeCarousel';
// import { useEffect, useState } from 'react';

// TODO: If currentUser logged in show trails if not show login and signup to login 

export function App() {
  // const [me, setMe] = useState(null)

  // useEffect(() => {
  //   fetch('/me')
  //   .then(resp => resp.json())
  //   .then(data => {
  //     console.log(data)
  //     setMe(data)
  //   })
  // }, [])

  // const [trailheadsArr, setTrailheadsArr] = useState([])
  
  // useEffect(() => {
  //   fetch('/trailheads')
  //   .then(resp => resp.json())
  //   .then(th => {
  //     console.log(th, "trailheads array")
  //     setTrailheadsArr(th)
  //   })
  // }, [])
  // console.log(trailheadsArr, "tentative so no error")

  // useEffect(() => {
  //   fetch('/trailhead_amenities')
  //   .then(resp => resp.json())
  //   .then(tha => {
  //     console.log(tha, "trailhead_amenities array")
  //   })
  // }, [])

  // useEffect(() => {
  //   fetch('/amenities')
  //   .then(resp => resp.json())
  //   .then(am => {
  //     console.log(am, "amenities array")
  //   })
  // }, [])

  return (
    <Routes>
      <Navbar />
      <HikeCarousel />
      <Route exact path="/home" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/termsandconditions" component={TermsPolicy} />
    </Routes>
  );
}
