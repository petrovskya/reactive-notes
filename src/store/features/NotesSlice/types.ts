import { FILTER_OPTIONS } from 'config';
import { INote } from 'types';

export interface INotesState {
  notes?: INote[];
  isFilteredByTitle: boolean;
  isFilteredByDate: boolean;
  filterOption?: FILTER_OPTIONS;
  filterValue?: string;
  filterByTitle?: string;
  filterByDate?: string;
}
