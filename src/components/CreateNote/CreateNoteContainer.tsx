import { FC } from 'react';

import { useFieldValue, useToggle } from 'hooks';

import { ICreateNoteContainerProps } from './types';
import CreateNote from './CreateNote';

const CreateNoteContainer: FC<ICreateNoteContainerProps> = ({ createNote }) => {
  const [isOpen, setOpen] = useToggle(false);

  const handleSave = () => {
    createNote(title, description);
    setOpen();
  };

  const { value: title, onChange: onChangeTitle } = useFieldValue();

  const { value: description, onChange: onChangeDescription } = useFieldValue();

  return (
    <CreateNote
      isOpen={isOpen}
      onClick={setOpen}
      handleSave={handleSave}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
    />
  );
};

export default CreateNoteContainer;
