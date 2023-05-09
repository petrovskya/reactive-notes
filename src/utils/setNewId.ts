import { INote, IUser } from 'types';

export const setNewId = (collection: IUser[] | INote[] | undefined): string => {
  if (collection) {
    const COUNTER_STEP = 1;
    const SIZE_OF_COLLECTION = collection.length;
    const NEW_ID = SIZE_OF_COLLECTION + COUNTER_STEP;
    return collection.length ? NEW_ID.toString() : '1';
  }
  return '1';
};
