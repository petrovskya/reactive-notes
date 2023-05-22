import { MouseEvent } from 'react';

export interface IFilterByTitleValues {
  titleForFilter?: string;
}

export interface IFilterByDateValues {
  dateForFilter?: Date;
}

export interface IFilterMenuProps {
  FilterByTitleInitialValues: IFilterByTitleValues;
  FilterByDateInitialValues: IFilterByDateValues;
  isFilterByTitleOpen: boolean;
  isFilterByDateOpen: boolean;
  isFilteredByDate: boolean;
  isFilteredByTitle: boolean;
  setFilterByDateOpen:
    | ((
        event: MouseEvent<HTMLElement, globalThis.MouseEvent>,
        value: boolean,
      ) => void)
    | undefined;
  setFilterByTitleOpen:
    | ((
        event: MouseEvent<HTMLElement, globalThis.MouseEvent>,
        value: boolean,
      ) => void)
    | undefined;
  handleFilterByTitle: ({ titleForFilter }: IFilterByTitleValues) => void;
  handleFilterByDate: ({ dateForFilter }: IFilterByDateValues) => void;
}
