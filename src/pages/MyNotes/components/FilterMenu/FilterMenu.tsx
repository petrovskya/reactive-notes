import { FC } from 'react';
import { Formik } from 'formik';
import { Sort as FilterIcon } from '@mui/icons-material';

import { FILTER_BADGE_TEXT } from 'config';

import FilterByDateForm from './FilterByDateForm';
import FilterByTitleForm from './FilterByTitleForm';
import { StyledFilterMenu, FilterMenuButton, StyledBadge } from './styles';
import { IFilterMenuProps } from './types';

const FilterMenu: FC<IFilterMenuProps> = ({
  titleFilterInitialValues,
  dateFilterInitialValues,
  isFilterByTitleOpen,
  isFilterByDateOpen,
  isFilteredByDate,
  isFilteredByTitle,
  setFilterByDateOpen,
  setFilterByTitleOpen,
  handleSetFilterByTitle,
  handleSetFilterByDate,
}) => (
  <StyledFilterMenu>
    {!isFilterByDateOpen && (
      <FilterMenuButton
        value={isFilterByTitleOpen}
        onChange={setFilterByTitleOpen}
      >
        <StyledBadge variant='dot' invisible={!isFilteredByTitle}>
          <FilterIcon />
          {isFilterByTitleOpen
            ? FILTER_BADGE_TEXT.CLOSE_FILTER
            : FILTER_BADGE_TEXT.TITLE}
        </StyledBadge>
      </FilterMenuButton>
    )}
    {!isFilterByTitleOpen && (
      <FilterMenuButton
        value={isFilterByDateOpen}
        onChange={setFilterByDateOpen}
      >
        <StyledBadge variant='dot' invisible={!isFilteredByDate}>
          <FilterIcon />
          {isFilterByDateOpen
            ? FILTER_BADGE_TEXT.CLOSE_FILTER
            : FILTER_BADGE_TEXT.DATE}
        </StyledBadge>
      </FilterMenuButton>
    )}

    {isFilterByTitleOpen && (
      <Formik
        initialValues={titleFilterInitialValues}
        onSubmit={handleSetFilterByTitle}
        component={FilterByTitleForm}
      />
    )}
    {isFilterByDateOpen && (
      <Formik
        initialValues={dateFilterInitialValues}
        onSubmit={handleSetFilterByDate}
        component={FilterByDateForm}
      />
    )}
  </StyledFilterMenu>
);

export default FilterMenu;
