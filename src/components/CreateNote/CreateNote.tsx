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
      {CONSTANTS.BUTTON_TEXT.CREATE}
    </Button>
    <Dialog open={isOpen} onClose={onClick}>
      <DialogTitle>{CONSTANTS.COMPONENT_TITLE.CREATE_NOTE}</DialogTitle>
      <DialogContent>
        <TextField
          margin='dense'
          type='text'
          variant='outlined'
          label={CONSTANTS.LABEL_TEXT.TITLE}
          placeholder={CONSTANTS.PLACEHOLDER_TEXT.TITLE}
          fullWidth
          autoFocus
          onChange={onChangeTitle}
        />
        <TextField
          margin='dense'
          type='text'
          variant='outlined'
          label={CONSTANTS.LABEL_TEXT.DESCRIPTION}
          placeholder={CONSTANTS.PLACEHOLDER_TEXT.DESCRIPTION}
          fullWidth
          multiline
          autoFocus
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

export default CreateNote;
