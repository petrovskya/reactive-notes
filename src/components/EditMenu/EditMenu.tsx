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
      Edit
    </Button>
    <Dialog open={isOpen} onClose={onClick}>
      <DialogTitle>Do you want to change something? </DialogTitle>
      <DialogContent>
        <TextField
          variant='outlined'
          margin='dense'
          label='Title'
          type='text'
          defaultValue={title}
          fullWidth
          autoFocus
          onChange={onChangeTitle}
        />
        <TextField
          variant='outlined'
          margin='dense'
          label='Description'
          type='text'
          defaultValue={description}
          fullWidth
          autoFocus
          multiline
          onChange={onChangeDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='secondary' onClick={onClick}>
          Cancel
        </Button>
        <Button variant='contained' onClick={handleSave}>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  </>
);

export default EditMenu;
