import { BASE_URL } from 'api/constants';
import { RESPONSE_LIMIT } from 'config/constants';

export const setRouteWithParams = (
  route: string,
  isShared: boolean,
  page?: number,
  userId?: string,
): string => {
  const url = new URL(route, BASE_URL);
  const urlParams = url.searchParams;
  isShared && urlParams.append('isShared', isShared.toString());
  userId && urlParams.append('userId', userId);
  page && urlParams.append('page', page.toString());
  urlParams.append('limit', RESPONSE_LIMIT.toString());
  return url.toString();
};
