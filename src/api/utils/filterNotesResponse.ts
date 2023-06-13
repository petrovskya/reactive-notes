import { FILTER_OPTIONS } from 'config';
import { IFilters, INote } from 'types';

export const filterNotesResponse = (
  responsePages: INote[][],
  filters: IFilters,
): INote[][] => {
  const { filterOption, filterValue } = filters;

  if (filterValue && filterOption) {
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
