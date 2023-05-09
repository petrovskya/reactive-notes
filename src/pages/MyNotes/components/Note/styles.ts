import { styled, Card, Typography } from '@mui/material';
import { Color } from 'ui';

const StyledCard = styled(Card)({
  maxWidth: 345,
  width: '100%',
  borderRadius: '6px',
});

const StyledTitle = styled(Typography)<{ active: string }>(({ active }) => ({
  gutterBottom: true,
  borderBottom: `5px solid ${
    active === 'true' ? Color.PRIMARY : Color.TRANSPARENT
  }`,
  borderRadius: '6px',
  fontSize: '20px',
  color: active === 'true' ? Color.SECONDARY_LIGHT : Color.SECONDARY,
}));

const StyledDateCreation = styled(Typography)({
  gutterBottom: true,
  fontSize: '16px',
  variant: 'body2',
  color: Color.SECONDARY_LIGHT,
});
const StyledDescription = styled(Typography)({
  fontSize: '20px',
  color: 'text.secondary',
});

export { StyledCard, StyledTitle, StyledDateCreation, StyledDescription };
