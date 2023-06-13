import { FC, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';

import { notesActions, queryClient, QUERY_KEYS } from 'api';
import { useToggle } from 'hooks';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { getNotes } from 'store/selectors';
import { setActiveNote } from 'store/features';

import EditMenu from './EditMenu';
import { IEditMenuContainerProps, IEditMenuValues } from './types';

const EditMenuContainer: FC<IEditMenuContainerProps> = ({ note, editNote }) => {
  const dispatch = useAppDispatch();
  const { activeNote } = useAppSelector(getNotes);

  const [isEditMenuOpen, setEditMenuOpen] = useToggle();

  const { mutate: updateNote } = useMutation({
    mutationFn: notesActions.updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEYS.NOTES]);
    },
  });

  const isActiveNote = activeNote?.id === note?.id;
  const { title, description } = note;

  const editMenuInitialValues: IEditMenuValues = {
    title: title,
    description: description,
  };

  const handleEditMenuSubmit = (editMenuValues: IEditMenuValues) => {
    updateNote(
      editNote(note, editMenuValues.title, editMenuValues.description),
    );
    setEditMenuOpen();
  };

  useEffect(() => {
    isActiveNote && dispatch(setActiveNote(note));
  }, [handleEditMenuSubmit]);

  return (
    <EditMenu
      title={title}
      description={description}
      initialValues={editMenuInitialValues}
      isEditMenuOpen={isEditMenuOpen}
      setEditMenuOpen={setEditMenuOpen}
      handleEditMenuSubmit={handleEditMenuSubmit}
    />
  );
};

export default EditMenuContainer;
