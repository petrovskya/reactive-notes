import { FC } from 'react';
import { CardContent, Typography } from '@mui/material';

import { ShareButton } from 'components';
import { getShortDescription } from 'utils';

import {
  StyledAuthorInfo,
  StyledCard,
  StyledDateCreation,
  StyledListItemButton,
  StyledTitle,
} from './styles';
import { INoteProps } from './types';

const Note: FC<INoteProps> = ({ note, isNoteActive, handleSetActiveNote }) => {
  const { title, dateCreation, description, author } = note;
  return (
    <StyledListItemButton $isActive={isNoteActive}>
      <StyledCard>
        <ShareButton note={note} />
        <CardContent onClick={handleSetActiveNote}>
          <StyledTitle variant='h3'>{title}</StyledTitle>
          <StyledDateCreation variant='h6'>{dateCreation}</StyledDateCreation>
          <Typography variant='h4'>
            {getShortDescription(description)}
          </Typography>
          <StyledAuthorInfo variant='h6'>{author}</StyledAuthorInfo>
        </CardContent>
      </StyledCard>
    </StyledListItemButton>
  );
};

export default Note;
