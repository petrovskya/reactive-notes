import { FC } from 'react';
import { Form, Formik } from 'formik';
import {
  Button,
  TextField,
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
import { noteMenuValidationSchema } from 'utils/validateForm';

import { CREATE_NOTE_INITIAL_VALUES } from './constants';
import { StyledDialog } from './styles';
import { ICreateNoteProps } from './types';

const CreateNote: FC<ICreateNoteProps> = ({
  isCreateMenuOpen,
  onHandleChangeCreateMenuVisibility,
  handleSaveNewNote,
}) => (
  <>
    <Button
      variant='contained'
      endIcon={<EditIcon />}
      onClick={onHandleChangeCreateMenuVisibility}
    >
      {BUTTON_TEXT.CREATE}
    </Button>
    <StyledDialog
      open={isCreateMenuOpen}
      onClose={onHandleChangeCreateMenuVisibility}
    >
      <Formik
        initialValues={CREATE_NOTE_INITIAL_VALUES}
        validationSchema={noteMenuValidationSchema}
        onSubmit={handleSaveNewNote}
      >
        {({ values, touched, errors, handleSubmit, handleChange }) => {
          const { title, description } = values;
          const isButtonDisabled = !!(errors?.description || errors?.title);

          return (
            <Form onSubmit={handleSubmit}>
              <DialogTitle>{COMPONENT_TITLE.CREATE_NOTE}</DialogTitle>
              <DialogContent>
                <TextField
                  id='title'
                  name='title'
                  margin='normal'
                  type='text'
                  variant='outlined'
                  label={LABEL_TEXT.TITLE}
                  placeholder={PLACEHOLDER_TEXT.TITLE}
                  value={title}
                  helperText={touched.title && errors?.title}
                  fullWidth
                  autoFocus
                  onChange={handleChange('title')}
                />
                <TextField
                  id='description'
                  name='description'
                  margin='normal'
                  type='text'
                  variant='outlined'
                  label={LABEL_TEXT.DESCRIPTION}
                  placeholder={PLACEHOLDER_TEXT.DESCRIPTION}
                  value={description}
                  helperText={touched.description && errors?.description}
                  fullWidth
                  multiline
                  onChange={handleChange('description')}
                />
              </DialogContent>
              <DialogActions>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={onHandleChangeCreateMenuVisibility}
                >
                  {BUTTON_TEXT.CANCEL}
                </Button>
                <Button
                  variant='contained'
                  type='submit'
                  disabled={isButtonDisabled}
                >
                  {BUTTON_TEXT.SAVE}
                </Button>
              </DialogActions>
            </Form>
          );
        }}
      </Formik>
    </StyledDialog>
  </>
);

export default CreateNote;
