import { styled } from 'styled-components';
import { Card, CardActions, ListItemButton, Typography } from '@mui/material';

import { Color } from 'ui';

const StyledListItemButton = styled(ListItemButton)<{ $isActive: boolean }>(
  ({ $isActive }) => ({
    '&.MuiListItemButton-root': {
      maxWidth: '900px',
      width: '100%',
      backgroundColor: $isActive ? Color.PRIMARY : 'transparent',
      borderRadius: '10px',
    },
    '&.MuiListItemButton-root:hover': {
      backgroundColor: Color.PRIMARY,
      opacity: 1,
    },
  }),
);

const StyledCard = styled(Card)({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '900px',
  width: '100%',
  gap: '10px',

  '&.MuiPaper-root': {
    borderRadius: '10px',
  },
  '.MuiCardContent-root': {
    maxWidth: '800px',
    width: '80%',
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
    padding: '15px',
    gap: '10px',
    borderRadius: '6px',
  },
  '.MuiButtonBase-root': {
    padding: '6px',
  },
});

export {
  StyledListItemButton,
  StyledCard,
  StyledTitle,
  StyledDateCreation,
  StyledCardActions,
};
