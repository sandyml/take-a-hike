import { setErrors, clearErrors } from './errors';
import { header } from '../../Global';

export const loadUsers = () => {
// export const loadUsers = (setIsLoading) => {
  return dispatch => {
    fetch('/users')
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data, "loadUsers action")
        const action = {
          type: "LOAD_USERS",
          payload: data
        }
        dispatch(action);
        // setIsLoading(false);
        // dispatch(clearErrors())
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
          const action = {
            type: "LOAD_CURRENT_USER",
            payload: data
          }
          dispatch(action);
          dispatch(clearErrors())
        } else {
          setIsLoading(false);
        }
      })
  }
}

export const loginUser = (headers, username, email, password, navigate) => {
  return dispatch => {
    // setLoading(true);
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
          const action = {
            type: "LOAD_LOGIN_USER",
            payload: user
          }
          dispatch(action);
          dispatch(clearErrors())
          navigate('/')
        });
      } else {
        resp.json()
          .then((err) => {
            dispatch(setErrors(err.errors))
          })
      }
    });
  }
}

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

export const signupUser = (headers, username, email, password, navigate) => {
  return dispatch => {
    // setIsLoading(true);
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
        } else {
          dispatch(clearErrors())
          const actionSignup = {
            type: "LOAD_SIGNUP_USER",
            payload: data
          }
          dispatch(actionSignup);
          const actionAddUser = {
            type: "LOAD_ADD_USER",
            payload: data
          }
          dispatch(actionAddUser);
          dispatch(clearErrors())
          navigate('/')
        }
      })
  }
}

export const deleteUsersVisit = (id) => {
  return dispatch => {
    fetch(`/visits/${id}`, {
      method: "DELETE",
      header,
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data, "deleted")
        dispatch({
          type: "DELETE_USERS_VISIT",
          payload: id
        });
      })
  }
}