import { FC } from 'react';
import { Form, FormikProps } from 'formik';
import { Button, TextField, DialogActions, DialogContent } from '@mui/material';

import { PLACEHOLDER_TEXT, LABEL_TEXT, BUTTON_TEXT } from 'config/types';

import { IEditMenuValues } from './types';

const EditMenuForm: FC<FormikProps<IEditMenuValues>> = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  handleReset,
}) => {
  const { title, description } = values;
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
          helperText={touched.title && errors?.title}
          autoFocus
          fullWidth
          onChange={handleChange('title')}
        />
        <TextField
          id='description'
          name='description'
          variant='outlined'
          margin='dense'
          placeholder={PLACEHOLDER_TEXT.PASSWORD}
          label={LABEL_TEXT.DESCRIPTION}
          value={description}
          helperText={touched.description && errors?.description}
          fullWidth
          autoFocus
          multiline
          onChange={handleChange('description')}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='secondary' onClick={handleReset}>
          {BUTTON_TEXT.CANCEL}
        </Button>
        <Button
          variant='contained'
          type='submit'
          disabled={!!(errors?.description || errors?.title)}
        >
          {BUTTON_TEXT.SAVE}
        </Button>
      </DialogActions>
    </Form>
  );
};

export default EditMenuForm;
