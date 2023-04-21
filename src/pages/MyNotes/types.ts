import { Dispatch } from 'react';

import { INote } from 'types';

export interface IMyNotes {
  notes: INote[];
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  setEditMode: Dispatch<React.SetStateAction<boolean>>;
  activeNote: INote | null;
  isEditMode: boolean;
  editNote: (id: string, title: string, description: string) => void;
}

export interface INotesList extends IMyNotes {}
