import { PAGES_STEP, RESPONSE_LIMIT } from 'config';
import { INote } from 'types';

export const getNumberOfNextPage = (lastPage: INote[], allPages: INote[][]) => {
  const CURRENT_PAGE_NUMBER = lastPage.length;
  const TOTAL_LOADED_PAGES = allPages.length;
  const NEXT_PAGE_NUMBER = TOTAL_LOADED_PAGES + PAGES_STEP;
  const NEXT_PAGE = CURRENT_PAGE_NUMBER === RESPONSE_LIMIT && NEXT_PAGE_NUMBER;
  return NEXT_PAGE;
};
