import { INITIAL_PAGE_NUMBER } from 'config';
import { INote, IUser } from 'types';

import { apiClient } from './base';
import { ApiRoute } from './types';
import { setRouteWithParams, transformRoute } from './utils';

const fetchUsers = async () => {
  const { data: usersResponse } = await apiClient.get(ApiRoute.USERS);
  return usersResponse;
};

const fetchUserById = async (id: string) => {
  const { data: userResponse } = await apiClient.get(
    transformRoute(ApiRoute.USER_BY_ID, id),
  );
  return userResponse;
};

const fetchNotesOfUser =
  (userId: string) =>
  async ({ pageParam = INITIAL_PAGE_NUMBER }) => {
    const { data: notesResponse } = await apiClient.get(
      setRouteWithParams(ApiRoute.NOTES, false, pageParam, userId),
    );
    return notesResponse;
  };

const fetchNoteById = async (id: string) => {
  const { data: noteResponse } = await apiClient.get(
    transformRoute(ApiRoute.NOTE_BY_ID, id),
  );
  return noteResponse;
};

const fetchSharedNotes = async ({ pageParam = INITIAL_PAGE_NUMBER }) => {
  const { data: sharedNotesResponse } = await apiClient.get(
    setRouteWithParams(ApiRoute.NOTES, true, pageParam),
  );

  return sharedNotesResponse;
};

const notesActions = {
  addNote: (payload: INote) => apiClient.post(ApiRoute.NOTES, payload),
  deleteNote: (payload: INote) =>
    apiClient.delete(transformRoute(ApiRoute.NOTE_BY_ID, payload.id)),
  updateNote: (payload: INote) => {
    return apiClient.put(
      transformRoute(ApiRoute.NOTE_BY_ID, payload.id),
      payload,
    );
  },
};

const userActions = {
  addUser: (payload: IUser) => apiClient.post(ApiRoute.USERS, payload),
  deleteUser: (payload: IUser) =>
    apiClient.delete(transformRoute(ApiRoute.USER_BY_ID, payload.id)),
  updateUser: (payload: IUser) =>
    apiClient.put(transformRoute(ApiRoute.USER_BY_ID, payload.id), payload),
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
