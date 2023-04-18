import styled from '@emotion/styled';
import { List } from '@mui/material';

export const StyledList = styled(List)`
  display: grid;
  grid-template-columns: repeat(auto-fill, 345px);
  place-content: center;
  gap: 40px;
`;
