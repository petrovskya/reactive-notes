import { Dispatch } from 'react';

import { INote } from 'types';

export interface IMyNotes {
  notes: INote[] | null;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  setEditMode: Dispatch<React.SetStateAction<boolean>>;
  activeNote: INote | null;
  isEditMode: boolean;
  editNote: (id: string, title: string, description: string) => void;
  createNote: (title: string, description: string) => void;
}

export interface INotesList {
  notes: INote[] | null;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  setEditMode: Dispatch<React.SetStateAction<boolean>>;
  activeNote: INote | null;
  isEditMode: boolean;
  editNote: (id: string, title: string, description: string) => void;
}
