import { FILTER_OPTIONS } from 'config';
import { useToggle } from 'hooks';
import { setFilters, unsetFilters } from 'store/features';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getNotes } from 'store/selectors';
import { formatDate } from 'utils';

import {
  DATE_FILTER_INITIAL_VALUES,
  TITLE_FILTER_INITIAL_VALUES,
} from './constants';
import FilterMenu from './FilterMenu';
import { IFilterByDateValues, IFilterByTitleValues } from './types';

const FilterMenuContainer = () => {
  const { filters } = useAppSelector(getNotes);
  const [isFilterByTitleOpen, toggleFilterByTitleOpen] = useToggle(false);
  const [isFilterByDateOpen, toggleFilterByDateOpen] = useToggle(false);
  const dispatch = useAppDispatch();

  const isFilteredByTitle = filters?.filterOption === FILTER_OPTIONS.TITLE;
  const isFilteredByDate = filters?.filterOption === FILTER_OPTIONS.DATE;

  const handleSetFilterByTitle = ({ titleForFilter }: IFilterByTitleValues) => {
    titleForFilter
      ? dispatch(
          setFilters({
            filterOption: FILTER_OPTIONS.TITLE,
            filterValue: titleForFilter,
          }),
        )
      : dispatch(unsetFilters());
  };

  const handleSetFilterByDate = ({ dateForFilter }: IFilterByDateValues) => {
    dateForFilter
      ? dispatch(
          setFilters({
            filterOption: FILTER_OPTIONS.DATE,
            filterValue: formatDate(dateForFilter),
          }),
        )
      : dispatch(unsetFilters());
  };

  return (
    <FilterMenu
      titleFilterInitialValues={TITLE_FILTER_INITIAL_VALUES}
      dateFilterInitialValues={DATE_FILTER_INITIAL_VALUES}
      isFilterByTitleOpen={isFilterByTitleOpen}
      isFilterByDateOpen={isFilterByDateOpen}
      isFilteredByDate={isFilteredByDate}
      isFilteredByTitle={isFilteredByTitle}
      handleFilterByDateOpen={toggleFilterByDateOpen}
      handleFilterByTitleOpen={toggleFilterByTitleOpen}
      handleSetFilterByTitle={handleSetFilterByTitle}
      handleSetFilterByDate={handleSetFilterByDate}
    />
  );
};

export default FilterMenuContainer;
