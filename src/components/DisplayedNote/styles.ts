import { styled } from 'styled-components';
import { Card, Typography } from '@mui/material';

import { Color } from 'ui';

const StyledCard = styled(Card)({
  maxWidth: 600,
  width: '100%',
  '&.MuiCard-root': {
    borderRadius: '10px',
  },
});

const StyledTitle = styled(Typography)({
  color: Color.SECONDARY_DARK,
});

const StyledDateCreation = styled(Typography)({
  marginBottom: 10,
  fontSize: '12px',
  fontWeight: 300,
  color: Color.SECONDARY_LIGHT,
});

const StyledAuthorInfo = styled(Typography)({});

export { StyledCard, StyledTitle, StyledDateCreation, StyledAuthorInfo };
