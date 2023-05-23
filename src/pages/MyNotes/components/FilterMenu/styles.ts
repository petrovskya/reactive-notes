import { styled } from 'styled-components';
import { Badge, Box, ToggleButton } from '@mui/material';

import { Color } from 'ui';

const StyledFilterMenu = styled(Box)({
  '.MuiBox-root': {
    display: 'flex',
    justifyContent: 'left',
    width: '100%',
  },
});

const StyledBadge = styled(Badge)({
  padding: 2,
  borderRadius: 6,
  backgroundColor: Color.SECONDARY,
  color: Color.WHITE,
  cursor: 'pointer',
  '.MuiBadge-badge': {
    minWidth: 14,
    height: 14,
    borderRadius: 8,
    backgroundColor: Color.PRIMARY,
  },
});

const FilterMenuButton = styled(ToggleButton)({
  '&.MuiToggleButton-root': {
    border: 'none',
    marginBottom: 15,
  },
});

const Wrapper = styled(Box)({
  display: 'grid',
  '&.MuiBox-root': {
    display: 'grid',
    gap: 20,
  },
});

export { StyledBadge, FilterMenuButton, StyledFilterMenu, Wrapper };
