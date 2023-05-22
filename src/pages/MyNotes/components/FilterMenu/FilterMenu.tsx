import { FC } from 'react';
import { Formik } from 'formik';
import { Sort as FilterIcon } from '@mui/icons-material';

import { FILTER_BADGE_TEXT } from 'config';

import FilterByDateForm from './FilterByDateForm';
import FilterByTitleForm from './FilterByTitleForm';
import { StyledFilterMenu, FilterMenuButton, StyledBadge } from './styles';
import { IFilterMenuProps } from './types';

const FilterMenu: FC<IFilterMenuProps> = ({
  FilterByTitleInitialValues,
  FilterByDateInitialValues,
  isFilterByTitleOpen,
  isFilterByDateOpen,
  isFilteredByDate,
  isFilteredByTitle,
  setFilterByDateOpen,
  setFilterByTitleOpen,
  handleFilterByTitle,
  handleFilterByDate,
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
        initialValues={FilterByTitleInitialValues}
        onSubmit={handleFilterByTitle}
        component={FilterByTitleForm}
      />
    )}
    {isFilterByDateOpen && (
      <Formik
        initialValues={FilterByDateInitialValues}
        onSubmit={handleFilterByDate}
        component={FilterByDateForm}
      />
    )}
  </StyledFilterMenu>
);

export default FilterMenu;
