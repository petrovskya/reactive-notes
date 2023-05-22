import { createSlice } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_KEYS } from 'config';
import { SLICE_NAME } from 'store/features';
import { getActiveUser } from 'utils';

import { IUsersState } from './types';

const initialState: IUsersState = {
  user: getActiveUser(),
  errorMessage: '',
  isLoading: false,
  isAuth: !!getActiveUser().userId,
};

const usersSlice = createSlice({
  name: SLICE_NAME.USERS,
  initialState,
  reducers: {
    setUserAuth: (state, { payload }) => {
      state.isAuth = true;
      localStorage.setItem(LOCAL_STORAGE_KEYS.USER, JSON.stringify(payload));
      state.user = payload;
      state.errorMessage = initialState.errorMessage;
    },
    unsetUserAuth: (state) => {
      state.isAuth = false;
      localStorage.removeItem(LOCAL_STORAGE_KEYS.USER);
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
