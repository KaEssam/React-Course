import { combineReducers, createStore } from '@reduxjs/toolkit';
import type { Theme, User } from '../types';

// 1- action type
const TOGGLE_THEME = 'theme/toggle';
const LOGOUT = 'user/logout';

// 2- action creator
export const toggleTheme = () => ({ type: TOGGLE_THEME }) as const;
export const logout = () => ({ type: LOGOUT }) as const;
type Action = ReturnType<typeof toggleTheme> | ReturnType<typeof logout>;

//
const initUser: User = { id: 1, name: 'Karim Essam', role: 'Admin' };

function userReducer(state: User = initUser, action: Action): User {
  switch (action.type) {
    case LOGOUT:
      return { id: 0, name: 'GUEST', role: '' };

    default:
      return state;
  }
}

function themeReducer(state: Theme = 'dark', action: Action): Theme {
  switch (action.type) {
    case TOGGLE_THEME:
      return state === 'dark' ? 'light' : 'dark';

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
});

export const store = createStore(rootReducer);
export type RootState = ReturnType<typeof store.getState>;

//
