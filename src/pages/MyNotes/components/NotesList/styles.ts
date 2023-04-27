import styled from '@emotion/styled';
import { List, ListItemButton } from '@mui/material';

import { Color } from 'ui';

const StyledList = styled(List)({
  display: 'grid',
  width: '100%',
  gridTemplateColumns: 'repeat(auto-fill, 345px)',
  placeContent: 'center',
  gap: '40px',
  backgroundColor: 'background.paper',
  ariaLabel: 'contacts',
});

const StyledListItemButton = styled(ListItemButton)`
  max-width: 345px;
  &:hover {
    background-color: ${Color.PRIMARY};
    opacity: 1;
  }
`;

export { StyledList, StyledListItemButton };
