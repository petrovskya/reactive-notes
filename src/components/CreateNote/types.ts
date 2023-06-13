import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface ICreateNoteProps {
  isCreateMenuOpen: boolean;
  isDescriptionNotValid: boolean;
  setCreateMenuOpen: MouseEventHandler<HTMLButtonElement>;
  handleSaveNewNote: MouseEventHandler<HTMLButtonElement>;
  onChangeTitle: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeDescription: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}
