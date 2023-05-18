import { FC } from 'react';
import { Formik } from 'formik';
import { Dialog, DialogTitle } from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

import { BUTTON_TEXT, COMPONENT_TITLE } from 'config/types';

import EditMenuForm from './EditMenuForm';
import { StyledButton } from './styles';
import { IEditMenuProps } from './types';

const EditMenu: FC<IEditMenuProps> = ({
  initialValues,
  isOpen,
  onClick,
  handleSubmit,
}) => (
  <>
    <StyledButton variant='contained' endIcon={<EditIcon />} onClick={onClick}>
      {BUTTON_TEXT.EDIT}
    </StyledButton>
    <Dialog open={isOpen} onClose={onClick}>
      <DialogTitle>{COMPONENT_TITLE.EDIT_MENU}</DialogTitle>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        component={EditMenuForm}
      />
    </Dialog>
  </>
);

export default EditMenu;
