import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface ICreateNoteProps {
  isOpenCreateMenu: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  handleSave: MouseEventHandler<HTMLButtonElement>;
  onChangeTitle: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeDescription: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}
