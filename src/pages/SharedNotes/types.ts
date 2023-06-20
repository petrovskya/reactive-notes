import { INote } from 'types';

export interface ISharedNotes {
  sharedNotes?: INote[];
  activeNote?: INote;
  isLoading?: boolean;
  isFetching?: boolean;
  setLastNoteInView?: (node?: Element | null) => void;
}
