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

interface ICreateNoteProps {
  isOpen: boolean;
  handleClickOpen: MouseEventHandler<HTMLButtonElement>;
  handleClose: MouseEventHandler<HTMLButtonElement>;
  handleSave: MouseEventHandler<HTMLButtonElement>;
  onChangeTitle: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  onChangeDescription: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  >;
}
export const CreateNote = ({
  isOpen,
  handleClickOpen,
  handleClose,
  handleSave,
  onChangeDescription,
  onChangeTitle,
}: ICreateNoteProps) => (
  <div>
    <Button
      variant='contained'
      onClick={handleClickOpen}
      endIcon={<EditIcon />}
    >
      Create a new note
    </Button>
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add your note </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin='dense'
          label='Title'
          type='text'
          fullWidth
          variant='outlined'
          placeholder='Enter title...'
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
          placeholder='Enter description...'
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
