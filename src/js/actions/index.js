import axios                      from 'axios';
import cookie                     from 'react-cookie';
import { logout }                 from './authentication';

// export function fetchUser(uid) {
//   return function (dispatch) {
//     axios.get(`/user/${uid}`, {
//       headers: { Authorization: cookie.load('token') },
//     })
//     .then((response) => {
//       dispatch({
//         type: FETCH_USER,
//         payload: response.data.user,
//       });
//     })
//     .catch(response => dispatch(errorHandler(response.data.error)));
//   };
// }

export function errorHandler(dispatch, error, type) {
  console.log('Error type: ', type);
  console.log(error);

  let errorMessage = error.response ? error.response.data : error;

   // NOT AUTHENTICATED ERROR
  if (error.status === 401 || error.response.status === 401) {
    errorMessage = 'You are not authorized to do this.';
    return dispatch(logout(errorMessage));
  }

  dispatch({
    type,
    payload: errorMessage,
  });
}
