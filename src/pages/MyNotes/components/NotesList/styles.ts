import styled from 'styled-components';
import { List, ListItemButton } from '@mui/material';

import { Color } from 'ui';

const StyledList = styled(List)({
  display: 'grid',
  width: '100%',
  gap: '20px',

  '&.MuiList-root': {
    '@media screen and (max-width: 600px)': {
      gridTemplateColumns: '260px',
    },
  },
  '&.MuiListItem-root': {
    width: '100%',
  },
});

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

export { StyledList, StyledListItemButton };
