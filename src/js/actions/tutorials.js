import axios from "axios";

export function fetchTutorials() {
  return function(dispatch) {
    axios.get("http://localhost:6969/api/tutorials")
      .then((response) => {
        dispatch({type: "FETCH_TUTORIALS_FULFILLED", payload: response.data})
      })
      .catch((err) => {
        dispatch({type: "FETCH_TUTORIALS_REJECTED", payload: err})
      })
  }
}

// export function addTutorial(id, text) {
//   return {
//     type: 'ADD_TUTORIAL',
//     payload: {
//       id,
//       text,
//     },
//   }
// }
//
// export function updateTutorial(id, text) {
//   return {
//     type: 'UPDATE_TUTORIAL',
//     payload: {
//       id,
//       text,
//     },
//   }
// }
//
// export function deleteTutorial(id) {
//   return { type: 'DELETE_TUTORIAL', payload: id}
// }
