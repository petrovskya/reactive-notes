import styled from '@emotion/styled';
import { Container } from '@mui/material';

export const StyledMainTemplate = styled(Container)`
  max-width: 1920px;
  padding: 40px 64px;
  margin: 0 auto;
  @media screen and (min-width: 1920px) {
    max-width: 1920px;
    width: 100%;
  }
  @media screen and (max-width: 1920px) {
    max-width: 1920px;
    width: 100%;
  }
`;
