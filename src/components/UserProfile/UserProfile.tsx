import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { UserPhoto } from 'assets';
import { COMPONENT_TITLE } from 'config/types';

import { StyledAvatar, StyledCard, StyledCardContent } from './styles';
import { IUserProfileProps } from './types';

const UserProfile: FC<IUserProfileProps> = ({
  user: { firstName, lastName, email, dateOfBirth },
}) => (
  <StyledCard>
    <Typography gutterBottom variant='h2' component='p' color='secondary'>
      {COMPONENT_TITLE.USER_PROFILE}
    </Typography>
    <StyledCardContent>
      <StyledAvatar src={UserPhoto} />
      <Box>
        <Typography gutterBottom variant='h4' component='p' color='secondary'>
          {firstName} {lastName}
        </Typography>
        <Typography gutterBottom variant='h4' component='p' color='secondary'>
          {email}
        </Typography>
        <Typography
          gutterBottom
          variant='h6'
          component='span'
          color='secondary'
        >
          {dateOfBirth}
        </Typography>
      </Box>
    </StyledCardContent>
  </StyledCard>
);

export default UserProfile;
