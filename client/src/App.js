import './App.css';
import { Route, Routes } from "react-router-dom";
import { Navbar } from './components/navigation/Navbar';
import { Home } from './components/intro/Home';
import { Signup } from './components/authen/Signup';
import { Login } from "./components/authen/Login";
import { TermsPolicy } from './components/authen/TermsPolicy';
// import { HikeCarousel } from './components/intro/HikeCarousel';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NotFound from './components/navigation/NotFound';
import { VisitList } from './components/hike/VisitList';
import { UserProvider } from './components/context/UserContext';
import { VisitProvider } from './components/context/VisitContext';
import { loadVisits } from './components/actions/visits';
import { TrailheadProvider } from './components/context/TrailheadContext';
import Logout from './components/authen/Logout';
import { EditForm } from './components/hike/EditForm';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { loadUsers } from './components/actions/users';

// [] TODO: If currentUser logged in show trails if not show login and signup to login 
// [] TODO: add back carousel when done (too many distractions) 
// [] TODO: add two more reducers: hikes and trailheads 

export function App({ children }) {
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch(); 

  const visits = useSelector((store) => store.visitsReducer);
  const users = useSelector((store) => store.usersReducer.currentUser);
  // const errors = useSelector((store) => store.errorsReducer);

  console.log(visits, "redux visits State")
  console.log(users, "redux users State in APP")
  // console.log(errors, "redux errors State")

  // will grab all of the data(things), run once
  // if loadVisits returns a func then thunk is going to take over because loadVisits takes in a func async activity thunk will run it and wait for ascyn to get finish before it does a state update  
  useEffect(() => {
    dispatch(loadVisits()) // make sure to call () 
    dispatch(loadUsers(setIsLoading))
  }, [dispatch])

  // TODO: REMOVE ALL PROVIDERS AFTER DONE WITH REDUX SET UP!!
  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <UserProvider>
        <VisitProvider>
          <TrailheadProvider>

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
              <Route path="/termsandconditions" element={<TermsPolicy />} />
              <Route path="/*" element={<NotFound />} />
              {/* <Route path="/visits" element={<VisitList />} /> */}
              {/* <Route path="/visits/new" element={<AddForm />} /> */}
            </Routes>
        }
        </TrailheadProvider>
        </VisitProvider>
      </UserProvider>
      </LocalizationProvider>
    </>
  );
}