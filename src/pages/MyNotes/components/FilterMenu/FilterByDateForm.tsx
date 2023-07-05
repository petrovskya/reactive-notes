import { FC } from 'react';
import { Form, FormikProps } from 'formik';
import { Button, DialogActions } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { LABEL_TEXT, BUTTON_TEXT } from 'config/types';

import { Wrapper } from './styles';
import { IFilterByDateValues } from './types';

const FilterByDateForm: FC<FormikProps<IFilterByDateValues>> = ({
  initialValues,
  values,
  setFieldValue,
  handleSubmit,
}) => {
  const { dateForFilter } = values;
  const { dateForFilter: initialDateForFilter } = initialValues;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Form onSubmit={handleSubmit} onBlur={handleSubmit}>
        <Wrapper>
          <DatePicker
            slotProps={{
              textField: {
                label: LABEL_TEXT.DATE,
                variant: 'outlined',
                value: dateForFilter,
              },
            }}
            autoFocus
            disableFuture
            onChange={(value) => setFieldValue('dateForFilter', value)}
          />
        </Wrapper>
        <DialogActions>
          <Button
            variant='contained'
            color='secondary'
            onClick={() => setFieldValue('dateForFilter', initialDateForFilter)}
            type='reset'
          >
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

export default FilterByDateForm;
