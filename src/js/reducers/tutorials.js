export default function reducer(state={
    tutorials: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_TUTORIALS": {
        return {...state, fetching: true}
      }
      case "FETCH_TUTORIALS_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_TUTORIALS_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          tutorials: action.payload,
        }
      }
      case "ADD_TUTORIAL": {
        return {
          ...state,
          tutorials: [...state.tutorials, action.payload],
        }
      }
      case "UPDATE_TUTORIAL": {
        const { id, text } = action.payload
        const newTutorials = [...state.tutorials]
        const tutorialToUpdate = newTutorials.findIndex(tutorial => tutorial.id === id)
        newTutorials[tutorialToUpdate] = action.payload;

        return {
          ...state,
          tutorials: newTutorials,
        }
      }
      case "DELETE_TUTORIAL": {
        return {
          ...state,
          tutorials: state.tutorials.filter(tutorial => tutorial.id !== action.payload),
        }
      }
    }

    return state
}
