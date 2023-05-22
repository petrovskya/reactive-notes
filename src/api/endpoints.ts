const RESPONSE_LIMIT = 6;

const URL = 'https://6450f8cbe1f6f1bb22a40fb5.mockapi.io/api/v1/';

const USERS = `${URL}users`;

const NOTES = `${URL}notes`;

const NOTES_OF_USER = (userId: string, page: number) =>
  `${URL}notes?userId=${userId}&page=${page}&limit=${RESPONSE_LIMIT}`;

const SHARED_NOTES = (page: number) =>
  `${URL}notes?isShared=true&page=${page}&limit=${RESPONSE_LIMIT}`;

const USER_BY_ID = (userId: string) => `${URL}users/${userId}`;

const NOTE_BY_ID = (id: string): string => `${URL}notes/${id}`;

export {
  RESPONSE_LIMIT,
  USERS,
  NOTES,
  SHARED_NOTES,
  USER_BY_ID,
  NOTE_BY_ID,
  NOTES_OF_USER,
};
