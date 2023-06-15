import { MouseEventHandler } from 'react';

import { INote } from 'types';

export interface IEditMenuContainerProps {
  note: INote;
  editNote: (note: INote, newTitle: string, newDescription: string) => INote;
}

export interface IEditMenuProps {
  title: string;
  description: string;
  initialValues: IEditMenuValues;
  isEditMenuOpen: boolean;
  handleOpenEditMenu: MouseEventHandler<HTMLButtonElement>;
  handleCloseEditMenu: MouseEventHandler<HTMLButtonElement>;
  handleSubmitEditMenu: (editMenuValues: IEditMenuValues) => void;
}

export interface IEditMenuValues {
  title: string;
  description: string;
}
