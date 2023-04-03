import './App.css';
import { Route, BrowserRouter as Routes } from "react-router-dom";
import { Navbar } from './components/navigation/Navbar';
import { Home } from './components/intro/Home';
import { Signup } from './components/authen/Signup';
import { Login } from "./components/authen/Login";
import { TermsPolicy } from './components/authen/TermsPolicy';
import { HikeCarousel } from './components/intro/HikeCarousel';

// TODO: If currentUser logged in show trails if not show login and signup to login 

export function App() {

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
