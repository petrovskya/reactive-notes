import { FC } from 'react';
import { Formik } from 'formik';
import { DialogTitle } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

import { BUTTON_TEXT, COMPONENT_TITLE } from 'config/types';
import { noteMenuValidationSchema } from 'utils/validateForm';

import EditMenuForm from './EditMenuForm';
import { StyledButton, StyledDialog } from './styles';
import { IEditMenuProps } from './types';

const EditMenu: FC<IEditMenuProps> = ({
  initialValues,
  isEditMenuOpen,
  handleOpenEditMenu,
  handleCloseEditMenu,
  handleSubmitEditMenu,
}) => (
  <>
    <StyledButton
      variant='contained'
      endIcon={<EditIcon />}
      onClick={handleOpenEditMenu}
    >
      {BUTTON_TEXT.EDIT}
    </StyledButton>
    <StyledDialog open={isEditMenuOpen} onClose={handleCloseEditMenu}>
      <DialogTitle>{COMPONENT_TITLE.EDIT_MENU}</DialogTitle>
      <Formik
        initialValues={initialValues}
        validationSchema={noteMenuValidationSchema}
        component={EditMenuForm}
        onSubmit={handleSubmitEditMenu}
      />
    </StyledDialog>
  </>
);

export default EditMenu;
