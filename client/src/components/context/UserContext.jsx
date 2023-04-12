import React, { createContext, useEffect } from 'react';
import { useState } from 'react';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  
   const handleLoginUser = (user) => {
    setCurrentUser(user);
    setLoggedIn(true)
   }
  
   const handleOnLogout = () => {
    setCurrentUser(null);
    setLoggedIn(false)
   }

  return (
    <UserContext.Provider value={{ users, loggedIn, currentUser, setCurrentUser, handleLoginUser, handleOnLogout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };