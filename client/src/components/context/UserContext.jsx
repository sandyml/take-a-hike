import React, { createContext, useState } from 'react';

const UserContext = createContext({});

const UserProvider = ({ children }) => {

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
    <UserContext.Provider value={{ setUsers, users, loggedIn, currentUser, setCurrentUser, handleLoginUser, handleOnLogout }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };