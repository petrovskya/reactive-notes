import { Dispatch } from 'react';

import { INote } from 'types';

interface INoteContainer {
  note: INote;
  activeNote: INote | null;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  editNote: (id: string, title: string, description: string) => void;
}

interface INoteProps
  extends Omit<INoteContainer, 'activeNote' | 'setActiveNote'> {
  handleActiveNote: () => void;
}

export type { INoteContainer, INoteProps };
