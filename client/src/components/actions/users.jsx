import { setErrors, clearErrors } from '../actions/errors';

export const loadUsers = (setIsLoading) => {
  return dispatch => {
    fetch('/users')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "action: user /users")
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
          console.log(data, "action: '/me")
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
          console.log(user, "Login User")
          // setCurrentUser(user);
          // dispatch(setErrors())
          const action = {
            type: "LOAD_LOGIN_USER",
            payload: user
          }
          dispatch(action);
          dispatch(loginUser)
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