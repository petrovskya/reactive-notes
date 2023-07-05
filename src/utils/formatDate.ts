import { EMPTY_STRING } from 'config';

export const formatDate = (date?: Date): string =>
  date ? date.toLocaleDateString('ru') : EMPTY_STRING;
