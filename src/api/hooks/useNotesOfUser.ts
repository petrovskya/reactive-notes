import { useCallback } from 'react';
import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { fetchNotesOfUser, QUERY_KEYS } from 'api';
import { RESPONSE_LIMIT } from 'api/endpoints';
import { filterNotes } from 'api/mappers';
import { FILTER_OPTIONS } from 'config';
import { INote } from 'types';

export const useNotesOfUser = (
  userId: string,
  filterOption?: FILTER_OPTIONS,
  filterValue?: string,
) => {
  const {
    data: notesResponse,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    isFetching,
    fetchNextPage,
  }: UseInfiniteQueryResult<INote[], Error> = useInfiniteQuery({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: ({ pageParam = 1 }) => fetchNotesOfUser(userId, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const nextPage =
        lastPage.length === RESPONSE_LIMIT ? allPages.length + 1 : undefined;
      return nextPage;
    },
    select: useCallback(
      (data: InfiniteData<INote[]>) => ({
        pages: filterNotes([...data.pages], filterOption, filterValue),
        pageParams: [...data.pageParams],
      }),
      [filterOption, filterValue],
    ),
  });
  const notes = notesResponse?.pages;
  return {
    notes,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    isFetching,
    fetchNextPage,
  };
};
