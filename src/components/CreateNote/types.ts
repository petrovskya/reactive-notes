import { ChangeEventHandler, MouseEventHandler } from 'react';

export interface ICreateNoteContainerProps {
  refOnView?: (node?: Element | null | undefined) => void;
}

export interface ICreateNoteProps {
  isOpenCreateMenu: boolean;
  refOnView?: (node?: Element | null | undefined) => void;
  onClick: MouseEventHandler<HTMLButtonElement>;
  handleSave: MouseEventHandler<HTMLButtonElement>;
  onChangeTitle: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeDescription: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}
