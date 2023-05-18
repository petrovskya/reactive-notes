import { FC } from 'react';
import { useMutation } from '@tanstack/react-query';

import { notesActions, queryClient, QUERY_KEYS } from 'api';
import { useToggle } from 'hooks';

import EditMenu from './EditMenu';
import { IEditMenuContainerProps, IEditMenuValues } from './types';

const EditMenuContainer: FC<IEditMenuContainerProps> = ({ editNote, note }) => {
  const [isOpen, setOpen] = useToggle();

  const { error, mutate: updateNote } = useMutation({
    mutationFn: notesActions.updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.NOTES]);
    },
  });
  const { title, description } = note;
  const EditMenuInitialValues: IEditMenuValues = {
    title: title,
    description: description,
  };

  const handleSubmit = (editMenuValues: IEditMenuValues) => {
    updateNote(
      editNote(note, editMenuValues.title, editMenuValues.description),
    );
    setOpen();
    console.log(error);
  };

  return (
    <EditMenu
      isOpen={isOpen}
      onClick={setOpen}
      handleSubmit={handleSubmit}
      title={title}
      description={description}
      initialValues={EditMenuInitialValues}
    />
  );
};

export default EditMenuContainer;
