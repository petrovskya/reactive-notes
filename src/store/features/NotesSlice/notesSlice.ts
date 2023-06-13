import { createSlice } from '@reduxjs/toolkit';

import { LOCAL_STORAGE_KEYS } from 'config';
import { SLICE_NAME } from 'store/features';
import { getActiveNote, getActiveSharedNote } from 'utils';

import { INotesState } from './types';

const initialState: INotesState = {
  notes: [],
  activeNote: getActiveNote(),
  activeSharedNote: getActiveSharedNote(),
  filters: {},
};

const notesSlice = createSlice({
  name: SLICE_NAME.NOTES,
  initialState,
  reducers: {
    setNotes: (state: INotesState, { payload }) => {
      state.notes = payload;
    },
    setFilters: (state: INotesState, { payload }) => {
      state.filters = payload;
    },
    unsetFilters: (state: INotesState) => {
      state.filters = initialState.filters;
    },
    setActiveNote: (state: INotesState, { payload }) => {
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.ACTIVE_NOTE,
        JSON.stringify(payload),
      );
      state.activeNote = payload;
    },
    unsetActiveNote: (state: INotesState) => {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.ACTIVE_NOTE);
      state.activeNote = getActiveNote();
    },
    setActiveSharedNote: (state: INotesState, { payload }) => {
      localStorage.setItem(
        LOCAL_STORAGE_KEYS.ACTIVE_SHARED_NOTE,
        JSON.stringify(payload),
      );
      state.activeSharedNote = payload;
    },
    unsetActiveSharedNote: (state: INotesState) => {
      localStorage.removeItem(LOCAL_STORAGE_KEYS.ACTIVE_SHARED_NOTE);
      state.activeSharedNote = getActiveSharedNote();
    },
  },
});

export default notesSlice.reducer;
export const {
  setNotes,
  setFilters,
  unsetFilters,
  setActiveNote,
  unsetActiveNote,
  setActiveSharedNote,
  unsetActiveSharedNote,
} = notesSlice.actions;
