export const getShortDescription = (description: string): string => {
  const shortDescription = description.slice(0, 20).concat('...');
  return shortDescription;
};
