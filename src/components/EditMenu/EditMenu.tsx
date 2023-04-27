import { FC } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

import { CONSTANTS } from 'config';

import { IEditMenuProps } from './types';

const EditMenu: FC<IEditMenuProps> = ({
  title,
  description,
  isOpen,
  onClick,
  handleSave,
  onChangeDescription,
  onChangeTitle,
}) => (
  <>
    <Button variant='contained' endIcon={<EditIcon />} onClick={onClick}>
      {CONSTANTS.BUTTON_TEXT.EDIT}
    </Button>
    <Dialog open={isOpen} onClose={onClick}>
      <DialogTitle>{CONSTANTS.COMPONENT_TITLE.EDIT_MENU}</DialogTitle>
      <DialogContent>
        <TextField
          variant='outlined'
          margin='dense'
          type='text'
          label={CONSTANTS.LABEL_TEXT.TITLE}
          defaultValue={title}
          fullWidth
          autoFocus
          onChange={onChangeTitle}
        />
        <TextField
          variant='outlined'
          margin='dense'
          type='text'
          label={CONSTANTS.LABEL_TEXT.DESCRIPTION}
          defaultValue={description}
          fullWidth
          autoFocus
          multiline
          onChange={onChangeDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='secondary' onClick={onClick}>
          {CONSTANTS.BUTTON_TEXT.CANCEL}
        </Button>
        <Button variant='contained' onClick={handleSave}>
          {CONSTANTS.BUTTON_TEXT.SAVE}
        </Button>
      </DialogActions>
    </Dialog>
  </>
);

export default EditMenu;
