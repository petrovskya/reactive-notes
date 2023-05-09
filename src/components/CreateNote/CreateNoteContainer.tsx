import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { v4 as uuid } from 'uuid';

import { fetchNotesOfUser, notesActions } from 'api';
import { INote } from 'types';
import { useFieldValue, useToggle } from 'hooks';

import CreateNote from './CreateNote';
import { setNewId } from 'utils';
import { useAppSelector } from 'store/hooks';
import { getUser } from 'store/selectors';

const CreateNoteContainer = () => {
  const queryClient = useQueryClient();
  const { user } = useAppSelector(getUser);
  const { data: notes }: UseQueryResult<INote[], Error> = useQuery<
    INote[],
    Error,
    INote[]
  >(['notes'], () =>
    user ? fetchNotesOfUser(user.userId) : fetchNotesOfUser(''),
  );
  const [isOpen, setOpen] = useToggle(false);

  const { value: title, onChange: onChangeTitle } = useFieldValue();
  const { value: description, onChange: onChangeDescription } = useFieldValue();

  const { mutate: addNote } = useMutation({
    mutationFn: notesActions.addNote,
    onSuccess: () => {
      queryClient.invalidateQueries(['notes']);
    },
  });

  const createNewNote = (title: string, description: string): INote => {
    const date = new Date();
    return {
      id: setNewId(notes),
      userId: user?.userId as string,
      title: title,
      description: description,
      dateCreation: date.toLocaleString(),
    };
  };

  const handleSave = () => {
    if (user) {
      addNote(createNewNote(title, description));
    }
    setOpen();
  };

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
