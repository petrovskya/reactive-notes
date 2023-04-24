import React, { useState } from 'react';

import { useFieldValue } from 'hooks';

import { CreateNote } from './CreateNote';

interface ICreateNote {
  createNote: (title: string, description: string) => void;
}

export const CreateNoteContainer = ({ createNote }: ICreateNote) => {
  const [isOpen, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    createNote(title, description);
    setOpen(false);
  };

  const { value: title, onChange: onChangeTitle } = useFieldValue();

  const { value: description, onChange: onChangeDescription } = useFieldValue();

  return (
    <CreateNote
      isOpen={isOpen}
      handleClickOpen={handleClickOpen}
      handleClose={handleClose}
      handleSave={handleSave}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
    />
  );
};
