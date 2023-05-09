import { createSlice } from '@reduxjs/toolkit';

import { getActiveUser } from 'utils';

import { IUSersState } from './types';

const initialState: IUSersState = {
  user: getActiveUser(),
  errorMessage: '',
  isLoading: false,
  isAuth: getActiveUser() ? true : false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUserAuth: (state, { payload }) => {
      state.isAuth = true;
      localStorage.setItem('user', JSON.stringify(payload));
      state.user = payload;
      state.errorMessage = initialState.errorMessage;
    },
    unsetUserAuth: (state) => {
      state.isAuth = false;
      localStorage.removeItem('user');
      state.user = initialState.user;
    },
    setErrorMessage: (state, { payload }) => {
      state.errorMessage = payload;
    },
  },
});

export default usersSlice.reducer;
export const { setUserAuth, unsetUserAuth, setErrorMessage } =
  usersSlice.actions;
