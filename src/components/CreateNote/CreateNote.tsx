import { FC } from 'react';
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { Edit as EditIcon } from '@mui/icons-material';

import { VALIDATION_MESSAGES } from 'config';
import {
  BUTTON_TEXT,
  COMPONENT_TITLE,
  LABEL_TEXT,
  PLACEHOLDER_TEXT,
} from 'config/types';

import { ICreateNoteProps } from './types';

const CreateNote: FC<ICreateNoteProps> = ({
  isCreateMenuOpen,
  isDescriptionNotValid,
  setCreateMenuOpen,
  handleSaveNewNote,
  onChangeDescription,
  onChangeTitle,
}) => (
  <>
    <Button
      variant='contained'
      endIcon={<EditIcon />}
      onClick={setCreateMenuOpen}
    >
      {BUTTON_TEXT.CREATE}
    </Button>
    <Dialog open={isCreateMenuOpen} onClose={setCreateMenuOpen}>
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
        {isDescriptionNotValid && (
          <Typography>{VALIDATION_MESSAGES.MAX_LENGTH.DESCRIPTION}</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button
          variant='contained'
          color='secondary'
          onClick={setCreateMenuOpen}
        >
          {BUTTON_TEXT.CANCEL}
        </Button>
        <Button
          variant='contained'
          disabled={isDescriptionNotValid}
          onClick={handleSaveNewNote}
        >
          {BUTTON_TEXT.SAVE}
        </Button>
      </DialogActions>
    </Dialog>
  </>
);

export default CreateNote;
