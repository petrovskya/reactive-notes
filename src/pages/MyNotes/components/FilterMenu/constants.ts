import { EMPTY_STRING } from 'config';

import { IFilterByDateValues, IFilterByTitleValues } from './types';

export const TITLE_FILTER_INITIAL_VALUES: IFilterByTitleValues = {
  titleForFilter: EMPTY_STRING,
};

export const DATE_FILTER_INITIAL_VALUES: IFilterByDateValues = {
  dateForFilter: null,
};
