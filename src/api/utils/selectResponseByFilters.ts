import { useCallback } from 'react';
import { InfiniteData } from '@tanstack/react-query';

import { filterNotesResponse } from 'api/utils';
import { IFilters, INote } from 'types';

export const selectResponseByFilters = (filters: IFilters) =>
  useCallback(
    (data: InfiniteData<INote[]>) => ({
      pages: filterNotesResponse([...data.pages], filters),
      pageParams: [...data.pageParams],
    }),
    [filters.filterValue],
  );
