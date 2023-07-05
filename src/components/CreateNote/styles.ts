import { styled } from 'styled-components';
import { Dialog } from '@mui/material';

export const StyledDialog = styled(Dialog)({
  '.MuiDialogTitle-root + .MuiDialogContent-root': {
    paddingTop: '5px',
  },
});
