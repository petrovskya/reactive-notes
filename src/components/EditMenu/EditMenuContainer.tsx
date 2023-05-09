import { FC } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

import { useFieldValue, useToggle } from 'hooks';
import { notesActions } from 'api';

import EditMenu from './EditMenu';
import { IEditMenuContainerProps } from './types';

const EditMenuContainer: FC<IEditMenuContainerProps> = ({ editNote, note }) => {
  const { id, title, description } = note;

  const queryClient = useQueryClient();

  const [isOpen, setOpen] = useToggle();

  const { value: newTitle, onChange: onChangeTitle } = useFieldValue();

  const { value: newDescription, onChange: onChangeDescription } =
    useFieldValue();

  const { mutate: updateNote } = useMutation({
    mutationFn: notesActions.updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries(['notes']);
    },
  });

  const handleSave = () => {
    updateNote(editNote(id, newTitle || title, newDescription || description));
    setOpen();
  };

  return (
    <EditMenu
      title={title}
      description={description}
      isOpen={isOpen}
      onClick={setOpen}
      handleSave={handleSave}
      onChangeTitle={onChangeTitle}
      onChangeDescription={onChangeDescription}
    />
  );
};

export default EditMenuContainer;
