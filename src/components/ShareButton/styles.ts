import styled from 'styled-components';
import ShareIcon from '@mui/icons-material/Share';

import { Color } from 'ui';

export const StyledShareIcon = styled(ShareIcon)<{
  $isSharedStatus: boolean;
  $isNoteEditable: boolean;
}>(({ $isSharedStatus, $isNoteEditable }) => ({
  position: 'absolute',
  top: 20,
  right: 30,
  zIndex: '1',
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
  fontSize: 'medium',
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
}));
