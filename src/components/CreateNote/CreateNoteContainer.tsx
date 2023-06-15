import { useMutation } from '@tanstack/react-query';

import { QUERY_KEYS, notesActions, queryClient } from 'api';
import { useToggle } from 'hooks';
import { useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';
import { createNewNote } from 'utils';

import CreateNote from './CreateNote';
import { ICreateNoteFormValues } from './types';

const CreateNoteContainer = () => {
  const { user } = useAppSelector(getUser);

  const [isCreateMenuOpen, toggleCreateMenuOpen] = useToggle(false);

  const { mutate: addNote } = useMutation({
    mutationFn: notesActions.addNote,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.NOTES] });
    },
  });

  const handleSaveNewNote = ({ title, description }: ICreateNoteFormValues) => {
    user && addNote(createNewNote(user, title, description));
    toggleCreateMenuOpen();
  };

  const handleOpenCreateMenu = () => toggleCreateMenuOpen();
  const handleCloseCreateMenu = () => toggleCreateMenuOpen();

  return (
    <CreateNote
      isCreateMenuOpen={isCreateMenuOpen}
      handleOpenCreateMenu={handleOpenCreateMenu}
      handleCloseCreateMenu={handleCloseCreateMenu}
      handleSaveNewNote={handleSaveNewNote}
    />
  );
};

export default CreateNoteContainer;
