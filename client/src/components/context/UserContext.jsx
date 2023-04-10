import React, { createContext, useEffect } from 'react';
import { useState } from 'react';

const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    fetch('/me')
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.errors) {
          // console.log(data)
          loginUser(data)
        } else {
          setIsLoading(false);
        }
      })
  }, [setIsLoading]);

  useEffect(() => {
    if (loggedIn) {
      fetch('/users')
        .then((resp) => resp.json())
        .then((data) => {
          // console.log(data)
          setUsers(data)
          setIsLoading(false)
        })
    }
  }, [loggedIn, setIsLoading]);

  const loginUser = (user) => {
    setCurrentUser(user);
    setLoggedIn(true)
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setLoggedIn(false);
  }

  const addUser = (user) => {
    setUsers([
      ...user,
      user
    ])
  }

  return (
    <UserContext.Provider value={{ isLoading, users, loggedIn, currentUser, addUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };