import { FC } from 'react';
import { Form, FormikProps } from 'formik';
import {
  Button,
  TextField,
  DialogActions,
  DialogContent,
  Typography,
} from '@mui/material';

import {
  MAX_LENGTH_OF_DESCRIPTION,
  VALIDATION_MESSAGES,
} from 'config/constants';
import { PLACEHOLDER_TEXT, LABEL_TEXT, BUTTON_TEXT } from 'config/types';

import { IEditMenuValues } from './types';

const EditMenuForm: FC<FormikProps<IEditMenuValues>> = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  handleReset,
}) => {
  const { title, description } = values;

  const isDescriptionOverwhelmed =
    description.length > MAX_LENGTH_OF_DESCRIPTION;

  return (
    <Form onSubmit={handleSubmit}>
      <DialogContent>
        <TextField
          id='title'
          name='title'
          variant='outlined'
          margin='dense'
          placeholder={PLACEHOLDER_TEXT.EMAIL}
          label={LABEL_TEXT.TITLE}
          value={title}
          autoFocus
          fullWidth
          onChange={handleChange('title')}
          onBlur={handleBlur('title')}
        />
        <TextField
          id='description'
          name='description'
          variant='outlined'
          margin='dense'
          placeholder={PLACEHOLDER_TEXT.PASSWORD}
          label={LABEL_TEXT.DESCRIPTION}
          value={description}
          fullWidth
          autoFocus
          multiline
          onChange={handleChange('description')}
          onBlur={handleBlur('description')}
        />
        {isDescriptionOverwhelmed && (
          <Typography>{VALIDATION_MESSAGES.MAX_LENGTH.DESCRIPTION}</Typography>
        )}
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='secondary' onClick={handleReset}>
          {BUTTON_TEXT.CANCEL}
        </Button>
        <Button
          variant='contained'
          type='submit'
          disabled={isDescriptionOverwhelmed}
        >
          {BUTTON_TEXT.SAVE}
        </Button>
      </DialogActions>
    </Form>
  );
};

export default EditMenuForm;
