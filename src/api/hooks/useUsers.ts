import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { fetchUsers } from 'api/queries';
import { IUser } from 'types';

export const useUsers = () => {
  const { data: users }: UseQueryResult<IUser[], Error> = useQuery<
    IUser[],
    Error,
    IUser[]
  >(['users'], fetchUsers);

  return users;
};
