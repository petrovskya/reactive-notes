import styled from 'styled-components';
import { Avatar, Card, CardContent } from '@mui/material';

export const StyledCard = styled(Card)({
  padding: '20px',
});

export const StyledAvatar = styled(Avatar)({
  '&.MuiAvatar-root': {
    width: '250px',
    height: '250px',
    '@media (max-width: 768px)': {
      width: '150px',
      height: '150px',
    },
  },
});

export const StyledCardContent = styled(CardContent)({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '20px',
  '@media (max-width: 768px)': {
    display: 'grid',
  },
});
