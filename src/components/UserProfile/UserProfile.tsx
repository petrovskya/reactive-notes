import { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { COMPONENT_TITLE } from 'config/types';

import { IUserProfileProps } from './types';

const UserProfile: FC<IUserProfileProps> = ({
  user: { firstName, lastName, email, dateOfBirth },
}) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant='h4' component='p' color='text.primary'>
        {COMPONENT_TITLE.USER_PROFILE}
      </Typography>
      <Typography gutterBottom variant='h4' component='p' color='text.primary'>
        {firstName} {lastName}
      </Typography>
      <Typography gutterBottom variant='h5' component='p' color='text.primary'>
        {email}
      </Typography>
      <Typography
        gutterBottom
        variant='h6'
        component='span'
        color='text.secondary'
      >
        {dateOfBirth}
      </Typography>
    </CardContent>
  </Card>
);

export default UserProfile;
