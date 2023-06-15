import { Box } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import styled from 'styled-components';

import { Color } from 'ui';

const StyledBox = styled(Box)({
  position: 'absolute',
  top: 15,
  right: 20,
  zIndex: '1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 46,
  height: 46,
  borderRadius: '6px',
});

const StyledShareIcon = styled(ShareIcon)<{
  $isSharedStatus: boolean;
  $isNoteEditable: boolean;
}>(({ $isSharedStatus, $isNoteEditable }) => ({
  padding: '5px',
  backgroundColor: $isSharedStatus
    ? $isNoteEditable
      ? Color.PRIMARY
      : Color.PRIMARY_LIGHT
    : 'transparent',
  border: `2px solid ${
    $isNoteEditable ? ($isSharedStatus ? 'transparent' : Color.PRIMARY) : 'none'
  }`,
  borderRadius: '6px',
  fontSize: 'large',
  color: Color.SECONDARY_DARK,
  '&:hover': {
    backgroundColor: $isNoteEditable
      ? $isSharedStatus
        ? 'transparent'
        : Color.PRIMARY
      : Color.PRIMARY_LIGHT,
    border: `2px solid ${
      $isNoteEditable
        ? $isSharedStatus
          ? Color.PRIMARY
          : 'transparent'
        : 'none'
    }`,
  },
  '&.MuiSvgIcon-root': {
    width: 36,
    height: 36,
  },
}));

export { StyledBox, StyledShareIcon };
