const URL = 'https://6450f8cbe1f6f1bb22a40fb5.mockapi.io/api/v1/';

const USERS = `${URL}users`;

const USER_BY_ID = (userId: string) => `${URL}users/${userId}`;

const NOTES_OF_USER = (userId: string) => `${URL}notes?userId=${userId}`;

const NOTE_BY_ID = (id: string): string => `${URL}notes/${id}`;

const SHARED_NOTES = `${URL}notes?&isShared=true`;

export { USERS, USER_BY_ID, NOTE_BY_ID, NOTES_OF_USER, SHARED_NOTES };
