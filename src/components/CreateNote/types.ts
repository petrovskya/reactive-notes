import { ChangeEventHandler, MouseEventHandler } from 'react';

interface ICreateNoteProps {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  handleSave: MouseEventHandler<HTMLButtonElement>;
  onChangeTitle: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeDescription: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

export type { ICreateNoteProps };
