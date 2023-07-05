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
  const isButtonDisabled = !!(errors?.description || errors?.title);

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
          fullWidth
          onChange={handleChange}
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
          multiline
          onChange={handleChange}
        />
      </DialogContent>
      <DialogActions>
        <Button variant='contained' color='secondary' onClick={handleReset}>
          {BUTTON_TEXT.CANCEL}
        </Button>
        <Button variant='contained' type='submit' disabled={isButtonDisabled}>
          {BUTTON_TEXT.SAVE}
        </Button>
      </DialogActions>
    </Form>
  );
};

export default EditMenuForm;
