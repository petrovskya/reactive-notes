import { Dispatch } from 'react';

import { INote } from 'types';

export interface INoteContainer {
  note: INote;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  activeNote: INote | null;
  editNote: (id: string, title: string, description: string) => void;
}

export interface INoteProps {
  note: INote;
  handleActiveNote: () => void;
  editNote: (id: string, title: string, description: string) => void;
}
