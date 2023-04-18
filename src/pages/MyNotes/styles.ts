import styled from '@emotion/styled';
import { Container } from '@mui/material';

export const StyledMyNotes = styled(Container)`
  width: 100%;
  display: grid;
  gap: 40px;
  margin: 100px 0 0;
  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    width: 100%;
  }
  @media screen and (max-width: 1920px) {
    max-width: 1920px;
    width: 100%;
  }
`;
