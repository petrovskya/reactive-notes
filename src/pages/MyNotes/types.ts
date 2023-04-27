import { Dispatch } from 'react';

import { INote } from 'types';

interface IMyNotes extends INotesList {
  createNote: (title: string, description: string) => void;
}

interface INotesList {
  notes: INote[] | null;
  activeNote: INote | null;
  isEditMode: boolean;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  setEditMode: Dispatch<React.SetStateAction<boolean>>;
  editNote: (id: string, title: string, description: string) => void;
}

export type { IMyNotes, INotesList };
