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
  handleFilterByDateOpen,
  handleFilterByTitleOpen,
  handleSetFilterByTitle,
  handleSetFilterByDate,
}) => (
  <StyledFilterMenu>
    {!isFilterByDateOpen && (
      <FilterMenuButton
        value={isFilterByTitleOpen}
        onChange={handleFilterByTitleOpen}
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
        onChange={handleFilterByDateOpen}
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
        component={FilterByTitleForm}
        onSubmit={handleSetFilterByTitle}
      />
    )}
    {isFilterByDateOpen && (
      <Formik
        initialValues={dateFilterInitialValues}
        component={FilterByDateForm}
        onSubmit={handleSetFilterByDate}
      />
    )}
  </StyledFilterMenu>
);

export default FilterMenu;
