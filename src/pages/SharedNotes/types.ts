import { Dispatch } from 'react';

import { INote } from 'types';

export interface ISharedNotes {
  sharedNotes?: INote[];
  activeNote: INote | null;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
}
