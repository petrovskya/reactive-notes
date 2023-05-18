import { styled } from 'styled-components';
import { Card, CardActions, Typography } from '@mui/material';

import { Color } from 'ui';

const StyledCard = styled(Card)({
  display: 'grid',
  maxWidth: 345,
  width: '100%',
  gap: 10,

  '&.MuiPaper-root': {
    borderRadius: '10px',
  },
});

const StyledTitle = styled(Typography)({
  '&.MuiTypography-root': {
    padding: '5px 40px 5px 5px',
    color: Color.SECONDARY,
  },
  borderRadius: '6px',
});

const StyledDateCreation = styled(Typography)({
  '&.MuiTypography-root': {
    color: Color.SECONDARY_LIGHT,
  },
});

const StyledCardActions = styled(CardActions)({
  '&.MuiCardActions-root': {
    display: 'flex',
    justifyContent: 'right',
    padding: '15px 15px',
    gap: '10px',
  },
});

export { StyledCard, StyledTitle, StyledDateCreation, StyledCardActions };
