import {
  InfiniteData,
  UseInfiniteQueryResult,
  useInfiniteQuery,
} from '@tanstack/react-query';

import { fetchNotesOfUser, QUERY_KEYS } from 'api';
import { selectResponseByFilters } from 'api/utils';
import { useAppDispatch } from 'store/hooks';
import { setNotes } from 'store/features';
import { IFilters, INote } from 'types';
import { getNumberOfNextPage } from 'utils';

export const useGetNotesOfUser = (userId: string, filters?: IFilters) => {
  const dispatch = useAppDispatch();
  const {
    data: notesResponse,
    hasNextPage,
    hasPreviousPage,
    isLoading,
    isFetching,
    fetchNextPage,
  }: UseInfiniteQueryResult<INote[], Error> = useInfiniteQuery({
    queryKey: [QUERY_KEYS.NOTES],
    queryFn: fetchNotesOfUser(userId),
    getNextPageParam: getNumberOfNextPage,
    select: filters && selectResponseByFilters(filters),
    onSuccess: (data: InfiniteData<INote[]>) => {
      const newNotesResponse = data.pages.flat();
      dispatch(setNotes(newNotesResponse));
      !newNotesResponse?.length && hasNextPage && fetchNextPage();
    },
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
