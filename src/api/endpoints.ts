const USERS = 'https://6450f8cbe1f6f1bb22a40fb5.mockapi.io/api/v1/users';

const USER_BY_ID = (userId: string) =>
  `https://6450f8cbe1f6f1bb22a40fb5.mockapi.io/api/v1/users/${userId}`;

const NOTES_OF_USER = (userId: string) =>
  `https://6450f8cbe1f6f1bb22a40fb5.mockapi.io/api/v1/users/${userId}/notes`;

const NOTE_BY_ID = (userId: string, noteId: string): string =>
  // eslint-disable-next-line max-len
  `https://6450f8cbe1f6f1bb22a40fb5.mockapi.io/api/v1/users/${userId}/notes/${noteId}`;

export { USERS, USER_BY_ID, NOTE_BY_ID, NOTES_OF_USER };
