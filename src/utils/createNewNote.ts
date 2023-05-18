import { INote, IUser } from 'types';
import { getAuthorInfo, setNewId } from 'utils';

export const createNewNote = (
  user: IUser,
  notes: INote[],
  title: string,
  description: string,
): INote => {
  const date = new Date();
  return {
    id: setNewId(notes),
    userId: user.userId,
    title: title,
    description: description,
    dateCreation: date.toLocaleString(),
    author: getAuthorInfo(user),
    isShared: false,
    availability: [],
  };
};
