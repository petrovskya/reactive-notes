export const getShortDescription = (description: string): string => {
  const START_CHARACTER = 0;
  const END_CHARACTER = 20;
  const SUSPENSION_POINTS = '...';
  const SHORT_DESCRIPTION = description
    .slice(START_CHARACTER, END_CHARACTER)
    .concat(SUSPENSION_POINTS);
  return SHORT_DESCRIPTION;
};
