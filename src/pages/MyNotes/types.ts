import { Dispatch } from 'react';
import { OnDragEndResponder } from 'react-beautiful-dnd';

import { INote } from 'types';

interface INotesList {
  notes?: INote[];
  activeNote?: INote;
  isEditMode: boolean;
  isLoading?: boolean;
  isFetching?: boolean;
  hasNextPage?: boolean;
  setLastNoteInView?: (node?: Element | null) => void;
  handleSetNoteDragEnd: OnDragEndResponder;
  setEditMode: Dispatch<React.SetStateAction<boolean>>;
  editNote: (note: INote, newTitle: string, newDescription: string) => INote;
}

interface INoteContainer {
  note: INote;
  index: number;
  activeNote?: INote;
  editNote: (note: INote, newTitle: string, newDescription: string) => INote;
}

interface INoteProps extends Omit<INoteContainer, 'activeNote'> {
  index: number;
  isNoteActive: boolean;
  handleSetActiveNote: () => void;
  handleDeleteNote: () => void;
}

export type { INotesList, INoteContainer, INoteProps };
