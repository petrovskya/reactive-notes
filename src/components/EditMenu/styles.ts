import { styled } from 'styled-components';
import { Button } from '@mui/material';

const StyledButton = styled(Button)({
  '&.MuiButton-root': {
    borderRadius: '6px',
  },
});

export { StyledButton };
