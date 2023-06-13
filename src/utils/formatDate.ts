export const formatDate = (date?: Date): string =>
  date ? date.toLocaleDateString('ru') : '';
