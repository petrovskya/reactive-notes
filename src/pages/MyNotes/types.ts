import { Dispatch } from 'react';

import { INote } from 'types';

interface INotesList {
  notes?: INote[];
  activeNote: INote | null;
  isEditMode: boolean;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  setEditMode: Dispatch<React.SetStateAction<boolean>>;
  editNote: (note: INote, newTitle: string, newDescription: string) => INote;
}

interface INoteContainer {
  note: INote;
  activeNote: INote | null;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  editNote: (note: INote, newTitle: string, newDescription: string) => INote;
}

interface INoteProps
  extends Omit<INoteContainer, 'activeNote' | 'setActiveNote'> {
  handleActiveNote: () => void;
}

export type { INotesList, INoteContainer, INoteProps };
