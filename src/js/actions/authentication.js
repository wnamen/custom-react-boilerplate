import axios                                  from 'axios';
import cookie                                 from 'react-cookie';
import { browserHistory }                     from 'react-router';
import { errorHandler }                       from './index';

export function login( email, password ) {
  return function (dispatch) {
    axios.post('/api/user/login', { email, password })
      .then((response) => {
        cookie.save('Token', response.data.token, { path: '/' });
        dispatch({ type: "AUTH_USER" });
        browserHistory.push('/tutorials');
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, "AUTH_ERROR")
      }
    )
  }
}

export function signup( firstName, lastName, email, password ) {
  return function (dispatch) {
    axios.post(`/api/user/signup`, { firstName, lastName, email, password })
    .then((response) => {
      cookie.save('Token', response.data.token, { path: '/' });
      dispatch({ type: "AUTH_USER" });
      browserHistory.push('/tutorials');
    })
    .catch((error) => {
      errorHandler(dispatch, error.response, "AUTH_ERROR");
    });
  };
}

export function logout(error) {
  return function (dispatch) {
    dispatch({ type: "UNAUTH_USER", payload: error || '' });
    cookie.remove('Token', { path: '/' });
    browserHistory.push('/');
  };
}
