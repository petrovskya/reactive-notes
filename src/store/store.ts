import { configureStore } from '@reduxjs/toolkit';

import { usersReducer, notesReducer } from './features';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
