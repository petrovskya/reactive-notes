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

  const [isEditMenuOpen, toggleEditMenuOpen] = useToggle(false);

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

  const handleOpenEditMenu = () => toggleEditMenuOpen();
  const handleCloseEditMenu = () => toggleEditMenuOpen();

  const handleSubmitEditMenu = (editMenuValues: IEditMenuValues) => {
    updateNote(
      editNote(note, editMenuValues.title, editMenuValues.description),
    );
    toggleEditMenuOpen();
  };

  useEffect(() => {
    isActiveNote && dispatch(setActiveNote(note));
  }, [handleSubmitEditMenu]);

  return (
    <EditMenu
      title={title}
      description={description}
      initialValues={editMenuInitialValues}
      isEditMenuOpen={isEditMenuOpen}
      handleOpenEditMenu={handleOpenEditMenu}
      handleCloseEditMenu={handleCloseEditMenu}
      handleSubmitEditMenu={handleSubmitEditMenu}
    />
  );
};

export default EditMenuContainer;
