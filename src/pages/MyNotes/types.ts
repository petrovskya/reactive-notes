import { Dispatch } from 'react';
import { OnDragEndResponder } from 'react-beautiful-dnd';

import { INote } from 'types';

interface INotesList {
  editNote: (note: INote, newTitle: string, newDescription: string) => INote;
  handleSetEditMode: Dispatch<React.SetStateAction<boolean>>;
  handleSetNoteDragEnd: OnDragEndResponder;
  notes?: INote[];
  activeNote?: INote;
  isEditMode: boolean;
  isLoading?: boolean;
  isFetching?: boolean;
  hasNextPage?: boolean;
  setLastNoteInView?: (node?: Element | null) => void;
}

interface INoteContainer {
  note: INote;
  index: number;
  editNote: (note: INote, newTitle: string, newDescription: string) => INote;
  activeNote?: INote;
}

interface INoteProps extends Omit<INoteContainer, 'activeNote'> {
  index: number;
  isNoteActive: boolean;
  handleSetActiveNote: () => void;
  handleDeleteNote: () => void;
}

export type { INotesList, INoteContainer, INoteProps };
