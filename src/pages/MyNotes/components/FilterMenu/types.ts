import { MouseEvent } from 'react';

export interface IFilterByTitleValues {
  titleForFilter?: string;
}

export interface IFilterByDateValues {
  dateForFilter?: Date | null;
}

export interface IFilterMenuProps {
  titleFilterInitialValues: IFilterByTitleValues;
  dateFilterInitialValues: IFilterByDateValues;
  isFilterByTitleOpen: boolean;
  isFilterByDateOpen: boolean;
  isFilteredByDate: boolean;
  isFilteredByTitle: boolean;
  handleFilterByDateOpen?: (
    event: MouseEvent<HTMLElement, globalThis.MouseEvent>,
    value: boolean,
  ) => void;
  handleFilterByTitleOpen?: (
    event: MouseEvent<HTMLElement, globalThis.MouseEvent>,
    value: boolean,
  ) => void;
  handleSetFilterByTitle: ({ titleForFilter }: IFilterByTitleValues) => void;
  handleSetFilterByDate: ({ dateForFilter }: IFilterByDateValues) => void;
}
