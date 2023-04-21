import styled from '@emotion/styled';
import { AppBar } from '@mui/material';

import { Color } from 'ui';

export const StyledAppBar = styled(AppBar)`
  position: fixed;
  display: flex;
  flex-direction: row;
  max-width: 100%;
  background-color: ${Color.PRIMARY};
`;
