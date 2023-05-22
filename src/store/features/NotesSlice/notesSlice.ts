import { createSlice } from '@reduxjs/toolkit';

import { EMPTY_STRING, FILTER_OPTIONS } from 'config';
import { SLICE_NAME } from 'store/features';

import { INotesState } from './types';

const initialState: INotesState = {
  notes: [],
  isFilteredByTitle: false,
  isFilteredByDate: false,
  filterOption: undefined,
  filterValue: EMPTY_STRING,
};

const notesSlice = createSlice({
  name: SLICE_NAME.NOTES,
  initialState,
  reducers: {
    setNotes: (state: INotesState, { payload }) => {
      state.notes = payload;
    },
    setFilter: (
      state: INotesState,
      { payload: { filterOption, filterValue } },
    ) => {
      state.filterByDate = initialState.filterByDate;
      state.filterByTitle = initialState.filterByTitle;
      state.filterOption = filterOption;
      state.filterValue = filterValue;
      filterOption === FILTER_OPTIONS.TITLE && filterValue
        ? (state.isFilteredByTitle = true)
        : (state.isFilteredByTitle = initialState.isFilteredByTitle);
      filterOption === FILTER_OPTIONS.DATE && filterValue
        ? (state.isFilteredByDate = true)
        : (state.isFilteredByDate = initialState.isFilteredByDate);
    },
  },
});

export default notesSlice.reducer;
export const { setNotes, setFilter } = notesSlice.actions;
