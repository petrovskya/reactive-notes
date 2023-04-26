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

import { ICreateNoteProps } from './types';

const CreateNote: FC<ICreateNoteProps> = ({
  isOpen,
  onClick,
  handleSave,
  onChangeDescription,
  onChangeTitle,
}) => (
  <>
    <Button variant='contained' endIcon={<EditIcon />} onClick={onClick}>
      Create a new note
    </Button>
    <Dialog open={isOpen} onClose={onClick}>
      <DialogTitle>Add your note </DialogTitle>
      <DialogContent>
        <TextField
          margin='dense'
          label='Title'
          type='text'
          fullWidth
          variant='outlined'
          placeholder='Enter title...'
          autoFocus
          onChange={onChangeTitle}
        />
        <TextField
          margin='dense'
          label='Description'
          type='text'
          fullWidth
          multiline
          variant='outlined'
          placeholder='Enter description...'
          autoFocus
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

export default CreateNote;
