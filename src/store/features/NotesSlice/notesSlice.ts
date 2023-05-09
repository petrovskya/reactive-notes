import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { ENDPOINT } from 'api';

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
  extraReducers(builder) {},
});

export default notesSlice.reducer;
