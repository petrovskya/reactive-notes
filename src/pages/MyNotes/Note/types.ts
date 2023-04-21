import { Dispatch } from 'react';

import { INote } from 'types';

export interface INoteContainer {
  note: INote;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  setEditMode: Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
  activeNote: INote | null;
}

export interface INoteProps {
  note: INote;
  handleActiveNote: () => void;
  handleEditMode: () => void;
  editMode: boolean;
  activeNote: INote | null;
}
