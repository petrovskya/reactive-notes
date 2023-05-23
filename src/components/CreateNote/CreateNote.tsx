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

import {
  BUTTON_TEXT,
  COMPONENT_TITLE,
  LABEL_TEXT,
  PLACEHOLDER_TEXT,
} from 'config/types';

import { ICreateNoteProps } from './types';

const CreateNote: FC<ICreateNoteProps> = ({
  isOpenCreateMenu,
  onClick,
  handleSave,
  onChangeDescription,
  onChangeTitle,
}) => (
  <>
    <Button variant='contained' endIcon={<EditIcon />} onClick={onClick}>
      {BUTTON_TEXT.CREATE}
    </Button>
    <Dialog open={isOpenCreateMenu} onClose={onClick}>
      <DialogTitle>{COMPONENT_TITLE.CREATE_NOTE}</DialogTitle>
      <DialogContent>
        <TextField
          margin='dense'
          type='text'
          variant='outlined'
          label={LABEL_TEXT.TITLE}
          placeholder={PLACEHOLDER_TEXT.TITLE}
          fullWidth
          autoFocus
          onChange={onChangeTitle}
        />
        <TextField
          margin='dense'
          type='text'
          variant='outlined'
          label={LABEL_TEXT.DESCRIPTION}
          placeholder={PLACEHOLDER_TEXT.DESCRIPTION}
          fullWidth
          multiline
          autoFocus
          onChange={onChangeDescription}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='secondary' onClick={onClick}>
          {BUTTON_TEXT.CANCEL}
        </Button>
        <Button variant='contained' onClick={handleSave}>
          {BUTTON_TEXT.SAVE}
        </Button>
      </DialogActions>
    </Dialog>
  </>
);

export default CreateNote;
