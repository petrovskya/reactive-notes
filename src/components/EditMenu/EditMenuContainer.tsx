import { FC } from 'react';

import { useFieldValue, useToggle } from 'hooks';

import EditMenu from './EditMenu';
import { IEditMenuContainerProps } from './types';

const EditMenuContainer: FC<IEditMenuContainerProps> = ({ editNote, note }) => {
  const { id, title, description } = note;

  const [isOpen, setOpen] = useToggle();

  const handleSave = () => {
    editNote(id, newTitle || title, newDescription || description);
    setOpen();
  };

  const { value: newTitle, onChange: onChangeTitle } = useFieldValue();

  const { value: newDescription, onChange: onChangeDescription } =
    useFieldValue();

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
