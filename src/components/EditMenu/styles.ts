import { styled } from 'styled-components';
import { Button, Dialog } from '@mui/material';

import { Color } from 'ui';

const StyledButton = styled(Button)({
  '&.MuiButton-root': {
    borderRadius: '6px',
  },
});

const StyledDialog = styled(Dialog)({
  '.MuiDialog-paper': {
    scrollbarWidth: 'thin',
    scrollbarColor: `${Color.SECONDARY} ${Color.PRIMARY}`,
    '&::-webkit-scrollbar': {
      width: '6px',
    },
    '&::-webkit-scrollbar-track': {
      borderRadius: '16px',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: Color.SECONDARY,
      borderRadius: '16px',
    },
  },
});

export { StyledButton, StyledDialog };
