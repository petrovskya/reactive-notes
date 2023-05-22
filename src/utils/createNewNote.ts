import { EMPTY_STRING } from 'config';
import { INote, IUser } from 'types';
import { getAuthorInfo, getDateCreation } from 'utils';

export const createNewNote = (
  user: IUser,
  title: string,
  description: string,
): INote => ({
  id: EMPTY_STRING,
  userId: user.userId,
  title: title,
  description: description,
  dateCreation: getDateCreation(),
  author: getAuthorInfo(user),
  isShared: false,
  availability: [],
});
