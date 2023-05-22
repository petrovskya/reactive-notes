import { EMPTY_STRING, FILTER_OPTIONS } from 'config';
import { useToggle } from 'hooks';
import { setFilter } from 'store/features';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getMyNotes } from 'store/selectors';
import { formatDate } from 'utils';

import FilterMenu from './FilterMenu';
import { IFilterByDateValues, IFilterByTitleValues } from './types';

const FilterMenuContainer = () => {
  const { isFilteredByDate, isFilteredByTitle } = useAppSelector(getMyNotes);
  const [isFilterByTitleOpen, setFilterByTitleOpen] = useToggle(false);
  const [isFilterByDateOpen, setFilterByDateOpen] = useToggle(false);
  const dispatch = useAppDispatch();

  const FilterByTitleInitialValues: IFilterByTitleValues = {
    titleForFilter: EMPTY_STRING,
  };
  const FilterByDateInitialValues: IFilterByDateValues = {
    dateForFilter: undefined,
  };

  const handleFilterByTitle = ({ titleForFilter }: IFilterByTitleValues) => {
    dispatch(
      setFilter({
        filterOption: FILTER_OPTIONS.TITLE,
        filterValue: titleForFilter,
      }),
    );
  };

  const handleFilterByDate = ({ dateForFilter }: IFilterByDateValues) => {
    dispatch(
      setFilter({
        filterOption: FILTER_OPTIONS.DATE,
        filterValue: formatDate(dateForFilter),
      }),
    );
  };

  return (
    <FilterMenu
      FilterByTitleInitialValues={FilterByTitleInitialValues}
      FilterByDateInitialValues={FilterByDateInitialValues}
      isFilterByTitleOpen={isFilterByTitleOpen}
      isFilterByDateOpen={isFilterByDateOpen}
      isFilteredByDate={isFilteredByDate}
      isFilteredByTitle={isFilteredByTitle}
      setFilterByDateOpen={setFilterByDateOpen}
      setFilterByTitleOpen={setFilterByTitleOpen}
      handleFilterByTitle={handleFilterByTitle}
      handleFilterByDate={handleFilterByDate}
    />
  );
};

export default FilterMenuContainer;
