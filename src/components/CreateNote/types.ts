import { MouseEventHandler } from 'react';

export interface ICreateNoteFormValues {
  title: string;
  description: string;
}

export interface ICreateNoteProps {
  isCreateMenuOpen: boolean;
  onHandleChangeCreateMenuVisibility: MouseEventHandler<HTMLButtonElement>;
  handleSaveNewNote: ({ title, description }: ICreateNoteFormValues) => void;
}
