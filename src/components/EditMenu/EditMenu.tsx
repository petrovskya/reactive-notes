import { ChangeEventHandler, MouseEventHandler } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

import { INote } from 'types';

interface IEditMenuProps {
  note: INote;
  isOpen: boolean;
  handleClickOpen: MouseEventHandler<HTMLButtonElement>;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  handleSave: MouseEventHandler<HTMLButtonElement>;
  onChangeTitle: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeDescription: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}
export const EditMenu = ({
  note,
  isOpen,
  handleClickOpen,
  handleClose,
  handleSave,
  onChangeDescription,
  onChangeTitle,
}: IEditMenuProps) => (
  <div>
    <Button
      variant='contained'
      onClick={handleClickOpen}
      endIcon={<EditIcon />}
    >
      Edit
    </Button>
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Do you want to change something? </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label='Title'
          type='text'
          fullWidth
          variant='outlined'
          defaultValue={note.title}
          onChange={onChangeTitle}
        />
        <TextField
          autoFocus
          margin='dense'
          label='Description'
          type='text'
          fullWidth
          multiline
          variant='outlined'
          defaultValue={note.description}
          onChange={onChangeDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} variant='contained' color='secondary'>
          Cancel
        </Button>
        <Button onClick={handleSave} variant='contained'>
          Save
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
