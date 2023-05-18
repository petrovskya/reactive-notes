import { INote, IUser } from 'types';

export const setNewId = (collection?: IUser[] | INote[]): string => {
  const COUNTER_STEP = 1;
  const FIRST_ID_NUMBER = '1';
  if (collection) {
    const SIZE_OF_COLLECTION = collection.length;
    const NEW_ID = SIZE_OF_COLLECTION + COUNTER_STEP;
    return SIZE_OF_COLLECTION ? NEW_ID.toString() : FIRST_ID_NUMBER;
  }
  return FIRST_ID_NUMBER;
};
