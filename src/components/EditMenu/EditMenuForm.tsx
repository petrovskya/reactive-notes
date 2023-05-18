import { FC } from 'react';
import { Form, FormikProps } from 'formik';
import { Button, TextField, DialogActions, DialogContent } from '@mui/material';

import { PLACEHOLDER_TEXT, LABEL_TEXT, BUTTON_TEXT } from 'config/types';

import { IEditMenuValues } from './types';

const EditMenuForm: FC<FormikProps<IEditMenuValues>> = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  handleReset,
}) => (
  <Form onSubmit={handleSubmit}>
    <DialogContent>
      <TextField
        id='title'
        name='title'
        variant='outlined'
        margin='dense'
        placeholder={PLACEHOLDER_TEXT.EMAIL}
        label={LABEL_TEXT.TITLE}
        value={values.title}
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
        value={values.description}
        fullWidth
        autoFocus
        multiline
        onChange={handleChange('description')}
        onBlur={handleBlur('description')}
      />
    </DialogContent>
    <DialogActions>
      <Button variant='contained' color='secondary' onClick={handleReset}>
        {BUTTON_TEXT.CANCEL}
      </Button>
      <Button variant='contained' type='submit'>
        {BUTTON_TEXT.SAVE}
      </Button>
    </DialogActions>
  </Form>
);

export default EditMenuForm;
