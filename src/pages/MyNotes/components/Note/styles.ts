import { styled } from 'styled-components';
import { Card, CardActions, Typography } from '@mui/material';

import { Color } from 'ui';

const StyledCard = styled(Card)({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '900px',
  width: '100%',
  gap: 10,

  '&.MuiPaper-root': {
    borderRadius: '10px',
  },
  '.MuiCardContent-root': {
    maxWidth: '800px',
    width: '80%',
    // '@media (max-width: 1200px)': {
    //   width: '400px',
    // },
  },
  '@media (max-width: 1024px)': {
    flexDirection: 'column',
  },
});

const StyledTitle = styled(Typography)({
  '&.MuiTypography-root': {
    padding: '5px',
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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
    gap: '10px',
    borderRadius: 6,
  },
  '.MuiButtonBase-root': {
    padding: '6px',
  },
});

export { StyledCard, StyledTitle, StyledDateCreation, StyledCardActions };