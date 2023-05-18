import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { fetchSharedNotes } from 'api/queries';
import { INote } from 'types';

export const useSharedNotes = (): INote[] => {
  const { data: sharedNotes }: UseQueryResult<INote[], Error> = useQuery<
    INote[],
    Error,
    INote[]
  >(['sharedNotes'], () => fetchSharedNotes());
  return sharedNotes ? sharedNotes : [];
};
