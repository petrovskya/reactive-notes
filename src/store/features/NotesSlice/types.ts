import { IFilters, INote } from 'types';

export interface INotesState {
  notes?: INote[];
  activeNote?: INote;
  activeSharedNote?: INote;
  filters: IFilters;
}
