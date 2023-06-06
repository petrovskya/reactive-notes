import { useEffect, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { QUERY_KEYS, notesActions, queryClient } from 'api';
import { MAX_LENGTH_OF_DESCRIPTION } from 'config/constants';
import { useFieldValue, useToggle } from 'hooks';
import { useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';
import { createNewNote } from 'utils';

import CreateNote from './CreateNote';

const CreateNoteContainer = () => {
  const { user } = useAppSelector(getUser);

  const [isCreateMenuOpen, setCreateMenuOpen] = useToggle(false);
  const [isDescriptionNotValid, setDescriptionNotValid] = useState(false);

  const { value: title, onChange: onChangeTitle } = useFieldValue();
  const { value: description, onChange: onChangeDescription } = useFieldValue();
  const { mutate: addNote } = useMutation({
    mutationFn: notesActions.addNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
    },
  });

  const handleSaveNewNote = () => {
    user && addNote(createNewNote(user, title, description));
    setCreateMenuOpen();
  };

  useEffect(() => {
    description.length > MAX_LENGTH_OF_DESCRIPTION
      ? setDescriptionNotValid(true)
      : setDescriptionNotValid(false);
  }, [description]);

  return (
    <CreateNote
      isCreateMenuOpen={isCreateMenuOpen}
      isDescriptionNotValid={isDescriptionNotValid}
      setCreateMenuOpen={setCreateMenuOpen}
      handleSaveNewNote={handleSaveNewNote}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
    />
  );
};

export default CreateNoteContainer;
