export const getDateCreation = (): string => {
  const date = new Date();
  const formattedDate = date.toLocaleString();
  return formattedDate;
};
