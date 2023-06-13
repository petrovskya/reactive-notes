import { LOCAL_STORAGE_KEYS } from 'config';
import { INote } from 'types';

export const getActiveSharedNote = () => {
  const noteResponse = localStorage.getItem(
    LOCAL_STORAGE_KEYS.ACTIVE_SHARED_NOTE,
  );
  if (noteResponse) {
    const activeSharedNote = JSON.parse(noteResponse) as INote;
    return activeSharedNote;
  }
};
