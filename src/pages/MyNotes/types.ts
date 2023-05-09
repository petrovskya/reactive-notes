import { Dispatch } from 'react';

import { INote } from 'types';

interface IMyNotes extends INotesList {}

interface INotesList {
  notes: INote[] | undefined;
  activeNote: INote | null;
  isEditMode: boolean;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  setEditMode: Dispatch<React.SetStateAction<boolean>>;
  editNote: (id: string, title: string, description: string) => INote;
}

export type { IMyNotes, INotesList };
