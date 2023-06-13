import { FC } from 'react';
import { Formik } from 'formik';
import { DialogTitle } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

import { BUTTON_TEXT, COMPONENT_TITLE } from 'config/types';

import EditMenuForm from './EditMenuForm';
import { StyledButton, StyledDialog } from './styles';
import { IEditMenuProps } from './types';

const EditMenu: FC<IEditMenuProps> = ({
  initialValues,
  isEditMenuOpen,
  setEditMenuOpen,
  handleEditMenuSubmit,
}) => (
  <>
    <StyledButton
      variant='contained'
      endIcon={<EditIcon />}
      onClick={setEditMenuOpen}
    >
      {BUTTON_TEXT.EDIT}
    </StyledButton>
    <StyledDialog open={isEditMenuOpen} onClose={setEditMenuOpen}>
      <DialogTitle>{COMPONENT_TITLE.EDIT_MENU}</DialogTitle>
      <Formik
        initialValues={initialValues}
        component={EditMenuForm}
        onSubmit={handleEditMenuSubmit}
      />
    </StyledDialog>
  </>
);

export default EditMenu;
