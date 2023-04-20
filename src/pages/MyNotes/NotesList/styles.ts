import styled from '@emotion/styled';
import { List, ListItemButton } from '@mui/material';

import { Color } from 'ui';

export const StyledList = styled(List)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 345px);
  place-content: center;
  gap: 40px;
`;

export const StyledListItemButton = styled(ListItemButton)`
  max-width: 345px;
  &:hover {
    background-color: ${Color.PRIMARY};
    opacity: 1;
  }
`;
