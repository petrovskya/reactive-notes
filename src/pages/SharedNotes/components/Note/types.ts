import { Dispatch } from 'react';

import { INote } from 'types';

interface INoteContainer {
  note: INote;
  activeNote: INote | null;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
}

interface INoteProps
  extends Omit<INoteContainer, 'activeNote' | 'setActiveNote'> {
  handleActiveNote: () => void;
}

export type { INoteContainer, INoteProps };
