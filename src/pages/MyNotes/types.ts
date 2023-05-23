import { Dispatch } from 'react';
import { OnDragEndResponder } from 'react-beautiful-dnd';

import { INote } from 'types';

interface INotesList {
  notes?: INote[];
  activeNote: INote | null;
  isEditMode: boolean;
  isLoading?: boolean;
  isFetching?: boolean;
  refOnView?: (node?: Element | null | undefined) => void;
  onDragEnd: OnDragEndResponder;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  setEditMode: Dispatch<React.SetStateAction<boolean>>;
  editNote: (note: INote, newTitle: string, newDescription: string) => INote;
}

interface INoteContainer {
  note: INote;
  index: number;
  activeNote: INote | null;
  setActiveNote: Dispatch<React.SetStateAction<INote | null>>;
  editNote: (note: INote, newTitle: string, newDescription: string) => INote;
}

interface INoteProps
  extends Omit<INoteContainer, 'activeNote' | 'setActiveNote'> {
  index: number;
  handleActiveNote: () => void;
}

export type { INotesList, INoteContainer, INoteProps };
