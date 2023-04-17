import { setErrors, clearErrors } from './errors';

export const loadUsers = (setIsLoading) => {
  return dispatch => {
    fetch('/users')
      .then((resp) => resp.json())
      .then((data) => {
        // console.log(data, "action: user /users")
        const action = {
          type: "LOAD_USERS",
          payload: data
        }
        setIsLoading(false);
        dispatch(action);
      })
  }
}

// thunk takesover using dispatch return dispatch => {}
export const loadCurrentUser = (setIsLoading) => {
  return dispatch => {
    fetch('/me')
      .then((resp) => resp.json())
      .then((data) => {
        if (!data.errors) {
          // console.log(data, "action: '/me")
          const action = {
            type: "LOAD_CURRENT_USER",
            payload: data
          }
          dispatch(action);
        } else {
          setIsLoading(false);
        }
      })
  }
}

// login user 
// const handleLoginUser = (user) => {
//   setCurrentUser(user);
//   setLoggedIn(true)
//  }
export const loginUser = (setLoading, headers, username, email, password, navigate) => {
  return dispatch => {
    setLoading(true);
    fetch('/login', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    }).then((resp) => {
      if (resp.ok) {
        resp.json().then((user) => {
          // console.log(user, "Login User")
          // setCurrentUser(user);
          // dispatch(setErrors())
          const action = {
            type: "LOAD_LOGIN_USER",
            payload: user
          }
          dispatch(action);
          // dispatch(loginUser)
          dispatch(clearErrors())
          navigate('/')
        });
      } else {
        resp.json()
          // [x] TODO: dispatch setErrors
          // .then((err) => setErrors(err.errors));
          .then((err) => {
            dispatch(setErrors(err.errors))
          })
      }
    });
  }
}

// const handleOnLogout = () => {
//   setCurrentUser(null);
//   setLoggedIn(false)
//  }
export const logoutUser = () => {
  return dispatch => {
    fetch('/logout', {
      method: 'DELETE'
    })
    const action = {
      type: "LOAD_LOGOUT_USER"
    }
    dispatch(action);
  }
}

// export const logoutUser = () => {
//   return {
//     type: "LOAD_LOGOUT_USER"
//   }
// }

// signup 
export const signupUser = (setIsLoading, headers, username, email, password, navigate) => {
  return dispatch => {
    setIsLoading(true);
    fetch('/signup', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        username,
        email,
        password
      })
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (data.errors) {
          dispatch(setErrors(data.errors))
          // console.log(data.errors, "Signup: errors")
        } else {
          dispatch(clearErrors())
          // handleLoginUser(data)
          const actionSignup = {
            type: "LOAD_SIGNUP_USER",
            payload: data
          }
          dispatch(actionSignup);
          // setCurrentUser(data)
          const actionAddUser = {
            type: "LOAD_ADD_USER",
            payload: data
          }
          dispatch(actionAddUser);
          navigate('/visits')
        }
      })
  }
}