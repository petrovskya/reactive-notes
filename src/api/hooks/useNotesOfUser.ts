import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { fetchNotesOfUser } from 'api/queries';
import { INote } from 'types';

export const useNotesOfUser = (userId: string) => {
  const { data: notes }: UseQueryResult<INote[], Error> = useQuery<
    INote[],
    Error,
    INote[]
  >(['notes'], () => fetchNotesOfUser(userId));

  return notes;
};
