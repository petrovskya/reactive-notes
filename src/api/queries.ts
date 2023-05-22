import axios from 'axios';

import { ENDPOINT } from 'api';
import { INote, IUser } from 'types';

const fetchUsers = async () => {
  const { data: users } = await axios.get(ENDPOINT.USERS);
  return users;
};

const fetchUserById = async (id: string) => {
  const { data: user } = await axios.get(ENDPOINT.USER_BY_ID(id));
  return user;
};

const fetchNotesOfUser = async (id: string, page: number) => {
  const { data: notesResponse } = await axios.get(
    ENDPOINT.NOTES_OF_USER(id, page),
  );
  return notesResponse;
};

const fetchNoteById = async (id: string) => {
  const { data: note } = await axios.get(ENDPOINT.NOTE_BY_ID(id));
  return note;
};

const fetchSharedNotes = async (page: number) => {
  const { data: sharedNotes } = await axios.get(ENDPOINT.SHARED_NOTES(page));
  return sharedNotes;
};

const notesActions = {
  addNote: (payload: INote) => axios.post(ENDPOINT.NOTES, payload),
  deleteNote: (payload: INote) => axios.delete(ENDPOINT.NOTE_BY_ID(payload.id)),
  updateNote: (payload: INote) => {
    return axios.put(ENDPOINT.NOTE_BY_ID(payload.id), payload);
  },
};

const userActions = {
  addUser: (payload: IUser) => axios.post(ENDPOINT.USERS, payload),
  deleteUser: (payload: IUser) =>
    axios.delete(ENDPOINT.USER_BY_ID(payload.userId)),
  updateUser: (payload: IUser) =>
    axios.put(ENDPOINT.USER_BY_ID(payload.userId), payload),
};

export {
  fetchUsers,
  fetchUserById,
  fetchNotesOfUser,
  fetchNoteById,
  fetchSharedNotes,
  notesActions,
  userActions,
};
