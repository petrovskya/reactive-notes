import { FILTER_OPTIONS } from 'config';
import { INote } from 'types';

export const filterNotes = (
  responsePages: INote[][],
  filterOption?: FILTER_OPTIONS,
  filterValue?: string,
): INote[][] => {
  if (filterOption && filterValue) {
    if (filterOption === FILTER_OPTIONS.TITLE) {
      const filteredNotesResponse = responsePages.map((notes) =>
        notes.filter((note) =>
          note.title.toLowerCase().includes(filterValue.toLowerCase()),
        ),
      );
      return filteredNotesResponse;
    }
    if (filterOption === FILTER_OPTIONS.DATE) {
      const filteredNotesResponse = responsePages.map((notes) =>
        notes.filter((note) => note.dateCreation.includes(filterValue)),
      );
      return filteredNotesResponse;
    }
  }
  return responsePages;
};
