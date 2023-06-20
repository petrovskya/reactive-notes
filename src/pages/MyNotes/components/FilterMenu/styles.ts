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
  padding: '2px',
  borderRadius: '6px',
  backgroundColor: Color.SECONDARY,
  color: Color.WHITE,
  cursor: 'pointer',
  '.MuiBadge-badge': {
    minWidth: '14px',
    height: '14px',
    borderRadius: '8px',
    backgroundColor: Color.PRIMARY,
  },
});

const FilterMenuButton = styled(ToggleButton)({
  '&.MuiToggleButton-root': {
    border: 'none',
    marginBottom: '15px',
  },
});

const Wrapper = styled(Box)({
  display: 'grid',
  '&.MuiBox-root': {
    display: 'grid',
    gap: '20px',
  },
});

export { StyledBadge, FilterMenuButton, StyledFilterMenu, Wrapper };
