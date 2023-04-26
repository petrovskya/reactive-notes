import { ChangeEventHandler, MouseEventHandler } from 'react';

interface ICreateNoteContainerProps {
  createNote: (title: string, description: string) => void;
}

interface ICreateNoteProps {
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  handleSave: MouseEventHandler<HTMLButtonElement>;
  onChangeTitle: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeDescription: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}

export type { ICreateNoteContainerProps, ICreateNoteProps };
