export const getShortDescription = (description: string): string => {
  const DESCRIPTION_LENGTH = description.length;
  const START_CHARACTER = 0;
  const MAX_CHARACTER = 20;
  const SUSPENSION_POINTS = '...';
  if (DESCRIPTION_LENGTH > MAX_CHARACTER) {
    const SHORT_DESCRIPTION = description
      .slice(START_CHARACTER, MAX_CHARACTER)
      .concat(SUSPENSION_POINTS);
    return SHORT_DESCRIPTION;
  }
  return description;
};
