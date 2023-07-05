import { styled } from 'styled-components';
import { Card, Typography, Box, ListItemButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

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
  maxWidth: '345px',
  width: '100%',
  gap: '10px',
  borderRadius: '10px',
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

const StyledAuthorInfo = styled(Typography)({
  '&.MuiTypography-root': {
    color: Color.SECONDARY_LIGHT,
  },
});

const StyledBox = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledShareIcon = styled(ShareIcon)({
  padding: '5px',
  backgroundColor: Color.PRIMARY,
  borderRadius: '6px',
  fontSize: 'medium',
  color: Color.SECONDARY_DARK,
});

export {
  StyledListItemButton,
  StyledCard,
  StyledTitle,
  StyledDateCreation,
  StyledAuthorInfo,
  StyledShareIcon,
  StyledBox,
};
