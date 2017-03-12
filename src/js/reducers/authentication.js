import { REHYDRATE } from 'redux-persist/constants'

const INITIAL_STATE = { error: '', message: '', content: '', authenticated: false };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case REHYDRATE:
      let incoming = action.payload.myReducer
      if (incoming) return {...state, ...incoming, specialKey: processSpecial(incoming.specialKey)}
      return state
    case "AUTH_USER":
      return { ...state, error: '', message: '', authenticated: true };
    case "UNAUTH_USER":
      return { ...state, authenticated: false, error: action.payload };
    case "AUTH_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
