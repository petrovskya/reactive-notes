import { FC } from 'react';
import { Box, Typography } from '@mui/material';

import { UserPhoto } from 'assets';
import { COMPONENT_TITLE } from 'config/types';

import { USER_DATE_OF_BIRTH, USER_EMAIL, USER_NAME } from './constants';
import {
  StyledAvatar,
  StyledBoxContent,
  StyledCard,
  StyledCardContent,
} from './styles';
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
        <StyledBoxContent>
          <Typography gutterBottom variant='h3' color='secondary'>
            {USER_NAME}
          </Typography>
          <Typography gutterBottom variant='h4' component='p'>
            {firstName} {lastName}
          </Typography>
        </StyledBoxContent>
        <StyledBoxContent>
          <Typography gutterBottom variant='h3' color='secondary'>
            {USER_EMAIL}
          </Typography>
          <Typography gutterBottom variant='h4' component='p' color='secondary'>
            {email}
          </Typography>
        </StyledBoxContent>
        <StyledBoxContent>
          <Typography gutterBottom variant='h3' color='secondary'>
            {USER_DATE_OF_BIRTH}
          </Typography>
          <Typography
            gutterBottom
            variant='h6'
            component='span'
            color='secondary'
          >
            {dateOfBirth}
          </Typography>
        </StyledBoxContent>
      </Box>
    </StyledCardContent>
  </StyledCard>
);

export default UserProfile;
