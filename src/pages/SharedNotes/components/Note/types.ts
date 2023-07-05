import { INote } from 'types';

interface INoteContainer {
  note: INote;
  activeNote?: INote;
}

interface INoteProps extends Omit<INoteContainer, 'activeNote'> {
  isNoteActive: boolean;
  handleSetActiveNote: () => void;
}

export type { INoteContainer, INoteProps };
