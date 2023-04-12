import React, { createContext, useEffect } from 'react';
import { useState } from 'react';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   fetch('/me')
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       if (!data.errors) {
  //         // console.log(data)
  //         handleLoginUser(data)
  //       } else {
  //         setIsLoading(false);
  //       }
  //     })
  // }, [setIsLoading]);

  // DONE/MOVED
  // useEffect(() => {
  //   if (loggedIn) {
  //     fetch('/users')
  //       .then((resp) => resp.json())
  //       .then((data) => {
  //         // console.log(data)
  //         setUsers(data)
  //         setIsLoading(false)
  //       })
  //   }
  // }, [loggedIn, setIsLoading]);

  // const handleLoginUser = (user) => {
  //   setCurrentUser(user);
  //   setLoggedIn(true)
  // };

  // const handleOnLogout = () => {
  //   setCurrentUser(null);
  //   setLoggedIn(false);
  // }

  // const handleAddUser = (user) => {
  //   setUsers([
  //     ...user,
  //     user
  //   ])
  // }

  useEffect(() => {
    // auto-login
    fetch('/me')
     .then(resp => resp.json())
     .then(data => {
      console.log(data, "UserContext FETCH")
      if (!data.errors) {
        handleLoginUser(data)
      }
      setIsLoading(false)
     })
   }, [])
  
  
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