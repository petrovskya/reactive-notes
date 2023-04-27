import { styled, Card, Typography } from '@mui/material';

const StyledCard = styled(Card)({ maxWidth: 345, width: '100%' });

const StyledTitle = styled(Typography)({
  gutterBottom: true,
  component: 'p',
  variant: 'h3',
  fontSize: '20px',
  color: 'text.primary',
});

const StyledDateCreation = styled(Typography)({
  gutterBottom: true,
  component: 'span',
  variant: 'body2',
  color: 'text.secondary',
});

const StyledDescription = styled(Typography)({
  variant: 'h6',
  fontSize: '16px',
  color: 'text.secondary',
});

export { StyledCard, StyledTitle, StyledDateCreation, StyledDescription };
