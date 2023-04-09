import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
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

// TODO: If currentUser logged in show trails if not show login and signup to login 

export function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const reduxState = useSelector((store) => store.visitsReducer);
  console.log(reduxState, "redux State")

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

  // TODO: add back carousel when done (too many distractions) 

  const [loading, setLoading] = useState(false);

//   return (
//     <Router>
//       <Navbar />
//       {
//         loading ? <h1>Loading...please wait..</h1> :
//           <Routes>
//             {/* <HikeCarousel /> */}
//             <Route path="/" component={Home} />
//             <Route path="/login" component={Login} />
//             <Route path="/signup" component={Signup} />
//             <Route path="/termsandconditions" component={TermsPolicy} />
//             {/* <Route exact path="/visits/:id/edit" component={VisitEdit} /> */}
//           </Routes>
//       }
//     </Router>
//   );
// }

return (
  <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/locations" element={<VisitList />} /> */}
          {/* <Route path="/visits/new" element={<AddForm />} /> */}
          {/* <Route path="/visits/:id" element={<EditForm />} /> */}
          <Route path="/termsandconditions" element={<TermsPolicy />} />
        </Routes>
  </>
);
}