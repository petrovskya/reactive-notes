import { LOCAL_STORAGE_KEYS } from 'config';
import { INote } from 'types';

export const getActiveNote = () => {
  const noteResponse = localStorage.getItem(LOCAL_STORAGE_KEYS.ACTIVE_NOTE);
  if (noteResponse) {
    const activeNote = JSON.parse(noteResponse) as INote;
    return activeNote;
  }
};
