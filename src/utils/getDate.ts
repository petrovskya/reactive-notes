export const getDate = (): string => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString();
  return formattedDate;
};
