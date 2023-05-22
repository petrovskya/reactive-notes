import {
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { INote } from 'types';

import { RESPONSE_LIMIT } from 'api/endpoints';
import { fetchSharedNotes } from 'api/queries';
import { QUERY_KEYS } from 'api/queryKeys';

export const useSharedNotes = () => {
  const {
    data: sharedNotesResponse,
    hasNextPage,
    isLoading,
    isFetching,
    fetchNextPage,
  }: UseInfiniteQueryResult<INote[], Error> = useInfiniteQuery({
    queryKey: [QUERY_KEYS.SHARED_NOTES],
    queryFn: ({ pageParam = 1 }) => fetchSharedNotes(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const PAGES_STEP = 1;
      const CURRENT_PAGE_NUMBER = lastPage.length;
      const TOTAL_LOADED_PAGES = allPages.length;
      const NEXT_PAGE_NUMBER = TOTAL_LOADED_PAGES + PAGES_STEP;
      const NEXT_PAGE =
        CURRENT_PAGE_NUMBER === RESPONSE_LIMIT ? NEXT_PAGE_NUMBER : undefined;
      return NEXT_PAGE;
    },
  });
  const sharedNotes = sharedNotesResponse?.pages;
  return { sharedNotes, hasNextPage, isLoading, isFetching, fetchNextPage };
};
