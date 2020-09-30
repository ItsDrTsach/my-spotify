import Cookie from 'js-cookie';
import { read } from './network/ajax';
export const removeTokens = () => {
  Cookie.remove('name');
  Cookie.remove('token');
  Cookie.remove('isAdmin');
};
export const initialState = {
  isLogged: false,
  playingQ: [],
  user: {
    name: Cookie.get('name'),
  },
};

export const ACTIONS = {
  LOGIN: 'login',
  LOGOUT: 'logout',
  UPDATEQ: 'updateQ',
};

export const reducer = (state, action) => {
  console.log('action.type', action.type);
  switch (action.type) {
    case ACTIONS.LOGIN:
      return {
        ...state,
        isLogged: true,
      };
    case ACTIONS.LOGOUT:
      return {
        ...state,
        isLogged: false,
      };
    case ACTIONS.UPDATEQ:
      return {
        ...state,
        playingQ: action.payload,
      };

    default:
      return state;
  }
};
