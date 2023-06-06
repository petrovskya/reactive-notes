import { PARAM_PATTERN } from 'api/constants';
import { EMPTY_STRING } from 'config/constants';

export const transformRoute = (route: string, value?: string): string =>
  route.replace(PARAM_PATTERN, value || EMPTY_STRING);
