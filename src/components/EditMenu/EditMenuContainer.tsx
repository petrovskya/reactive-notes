import React, { useState } from 'react';
import { EditMenu } from './EditMenu';
import { INote } from 'types';
import { useFieldValue } from 'hooks';

interface IEditMenu {
  note: INote;
  editNote: (id: string, title: string, description: string) => void;
}

export const EditMenuContainer = ({ editNote, note }: IEditMenu) => {
  const [isOpen, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    editNote(note.id, title || note.title, description || note.description);
    setOpen(false);
  };

  const { value: title, onChange: onChangeTitle } = useFieldValue();

  const { value: description, onChange: onChangeDescription } = useFieldValue();

  return (
    <EditMenu
      note={note}
      isOpen={isOpen}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleSave={handleSave}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
    />
  );
};
