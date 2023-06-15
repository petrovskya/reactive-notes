import { FC } from 'react';
import { Form, FormikProps } from 'formik';
import { Button, TextField, DialogActions } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { PLACEHOLDER_TEXT, LABEL_TEXT, BUTTON_TEXT } from 'config/types';

import { Wrapper } from './styles';
import { IFilterByTitleValues } from './types';

const FilterByTitleForm: FC<FormikProps<IFilterByTitleValues>> = ({
  values,
  handleChange,
  handleSubmit,
  handleBlur,
  handleReset,
}) => {
  const { titleForFilter } = values;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Form onSubmit={handleSubmit} onBlur={handleSubmit}>
        <Wrapper>
          <TextField
            id='titleForFilter'
            name='titleForFilter'
            variant='outlined'
            margin='dense'
            placeholder={PLACEHOLDER_TEXT.TITLE}
            label={LABEL_TEXT.TITLE}
            value={titleForFilter}
            autoFocus
            fullWidth
            onChange={handleChange('titleForFilter')}
            onBlur={handleBlur('titleForFilter')}
          />
        </Wrapper>
        <DialogActions>
          <Button variant='contained' color='secondary' onClick={handleReset}>
            {BUTTON_TEXT.CLEAR}
          </Button>
          <Button variant='contained' type='submit'>
            {BUTTON_TEXT.FILTER}
          </Button>
        </DialogActions>
      </Form>
    </LocalizationProvider>
  );
};

export default FilterByTitleForm;
