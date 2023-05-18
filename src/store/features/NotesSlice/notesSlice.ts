import { createSlice } from '@reduxjs/toolkit';

import { INotesState } from './types';

const initialState: INotesState = {
  id: '',
  userId: '',
  title: '',
  description: '',
  dateCreation: '',
};

const notesSlice = createSlice({
  name: 'note',
  initialState,
  reducers: {},
});

export default notesSlice.reducer;
