import styled from '@emotion/styled';
import { Link, PathMatch } from 'react-router-dom';

import { Color } from 'ui';

export const StyledLink = styled(Link)<{
  match: PathMatch<string> | null;
}>(({ match }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '10px',
  borderRadius: '10px',
  backgroundColor: match ? Color.WHITE : 'none',
  fontSize: '18px',
  fontWeight: 600,
  textTransform: 'uppercase',
  color: match ? Color.SECONDARY_DARK : Color.SECONDARY_LIGHT,
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  transition: '0.2s',
  '&:hover': {
    backgroundColor: Color.WHITE,
  },
  '&:active': {
    color: Color.BLACK,
  },
}));
