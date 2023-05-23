import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';

import { QUERY_KEYS, notesActions, queryClient } from 'api';
import { useFieldValue, useToggle } from 'hooks';
import { useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';
import { createNewNote } from 'utils';

import CreateNote from './CreateNote';

const CreateNoteContainer = () => {
  const { user } = useAppSelector(getUser);

  const [isOpenCreateMenu, setOpenCreateMenu] = useToggle(false);

  const { value: title, onChange: onChangeTitle } = useFieldValue();
  const { value: description, onChange: onChangeDescription } = useFieldValue();
  const { mutate: addNote } = useMutation({
    mutationFn: notesActions.addNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
    },
  });

  const handleSave = () => {
    user && addNote(createNewNote(user, title, description));
    setOpenCreateMenu();
  };

  return (
    <CreateNote
      isOpenCreateMenu={isOpenCreateMenu}
      onClick={setOpenCreateMenu}
      handleSave={handleSave}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
    />
  );
};

export default CreateNoteContainer;
