import { FC } from 'react';
import { Card, CardContent, Typography } from '@mui/material';

import { COMPONENT_TITLE } from 'config/types';

import { IUserProfileProps } from './types';

const UserProfile: FC<IUserProfileProps> = ({
  user: { firstName, lastName, email, dateOfBirth },
}) => (
  <Card>
    <CardContent>
      <Typography gutterBottom variant='h2' component='p' color='secondary'>
        {COMPONENT_TITLE.USER_PROFILE}
      </Typography>
      <Typography gutterBottom variant='h4' component='p' color='secondary'>
        {firstName} {lastName}
      </Typography>
      <Typography gutterBottom variant='h4' component='p' color='secondary'>
        {email}
      </Typography>
      <Typography gutterBottom variant='h6' component='span' color='secondary'>
        {dateOfBirth}
      </Typography>
    </CardContent>
  </Card>
);

export default UserProfile;
