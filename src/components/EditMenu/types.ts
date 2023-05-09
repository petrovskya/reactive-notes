import { ChangeEventHandler, MouseEventHandler } from 'react';

import { INote } from 'types';

interface IEditMenuContainerProps {
  note: INote;
  editNote: (id: string, title: string, description: string) => INote;
}

interface IEditMenuProps {
  title: string;
  description: string;
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  handleSave: MouseEventHandler<HTMLButtonElement>;
  onChangeTitle: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeDescription: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

export type { IEditMenuContainerProps, IEditMenuProps };
