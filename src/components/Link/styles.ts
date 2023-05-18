import { styled } from 'styled-components';
import { Link, PathMatch } from 'react-router-dom';

import { Color } from 'ui';

export const StyledLink = styled(Link)<{
  match: PathMatch<string> | null;
}>(({ match }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px',
  margin: '0 15px',
  borderRadius: '6px',
  border: `2px solid ${match ? Color.SECONDARY : 'transparent'}`,
  backgroundColor: match ? Color.PRIMARY_LIGHT : 'transparent',
  fontSize: '18px',
  fontWeight: 600,
  textTransform: 'uppercase',
  whiteSpace: 'nowrap',
  textDecoration: 'none',
  transition: '0.2s',

  '&:hover': {
    backgroundColor: Color.PRIMARY_LIGHT,
  },

  '&:active': {
    color: Color.BLACK,
  },

  '@media (max-width: 780px)': {
    fontSize: '14px',
    fontWeight: 700,
  },
}));
