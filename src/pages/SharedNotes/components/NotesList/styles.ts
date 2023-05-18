import styled from 'styled-components';
import { List, ListItemButton } from '@mui/material';

import { Color } from 'ui';

const StyledList = styled(List)({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(auto-fill, 345px)',
  placeContent: 'center',
  gap: '40px',
  '&.MuiList-root': {
    '@media screen and (max-width: 600px)': {
      gridTemplateColumns: '260px',
    },
  },
});

const StyledListItemButton = styled(ListItemButton)<{ $isActive: boolean }>(
  ({ $isActive }) => ({
    msxWidth: 345,
    '&.MuiListItemButton-root': {
      backgroundColor: $isActive ? Color.PRIMARY : 'transparent',
      borderRadius: '10px',
    },

    '&.MuiListItemButton-root:hover': {
      backgroundColor: Color.PRIMARY,
      opacity: 1,
    },
  }),
);

export { StyledList, StyledListItemButton };
