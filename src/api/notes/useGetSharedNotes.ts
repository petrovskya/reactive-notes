import {
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { QUERY_KEYS, fetchSharedNotes } from 'api';
import { INote } from 'types';
import { getNumberOfNextPage } from 'utils';

export const useGetSharedNotes = () => {
  const {
    data: sharedNotesResponse,
    hasNextPage,
    isLoading,
    isFetching,
    fetchNextPage,
  }: UseInfiniteQueryResult<INote[], Error> = useInfiniteQuery({
    queryKey: [QUERY_KEYS.SHARED_NOTES],
    queryFn: fetchSharedNotes,
    getNextPageParam: getNumberOfNextPage,
  });
  const sharedNotes = sharedNotesResponse?.pages;

  return { sharedNotes, hasNextPage, isLoading, isFetching, fetchNextPage };
};
