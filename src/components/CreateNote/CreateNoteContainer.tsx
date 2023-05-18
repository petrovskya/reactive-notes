import { UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';

import { QUERY_KEYS, fetchNotesOfUser, notesActions, queryClient } from 'api';
import { useFieldValue, useToggle } from 'hooks';
import { useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';
import { INote } from 'types';
import { createNewNote } from 'utils';

import CreateNote from './CreateNote';

const CreateNoteContainer = () => {
  const { user } = useAppSelector(getUser);
  const userId = user?.userId as string;
  const { data: notesResponse }: UseQueryResult<INote[], Error> = useQuery<
    INote[],
    Error,
    INote[]
  >([QUERY_KEYS.NOTES], () => fetchNotesOfUser(userId));
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
    user &&
      notesResponse &&
      addNote(createNewNote(user, notesResponse, title, description));
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
