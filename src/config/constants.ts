export const PAGES_STEP = 1;

export const INITIAL_PAGE_NUMBER = 1;

export const RESPONSE_LIMIT = 8;

export const SEPARATOR_INDEX = 7;

export const MAX_LENGTH_OF_DESCRIPTION = 450;

export const EMPTY_STRING = '';

export const APPLICATION_NAME = 'Reactive notes';

export const VALIDATION_MESSAGES = {
  VALIDITY: {
    EMAIL: 'Enter a valid email',
  },
  REQUIRED: {
    EMAIL: 'Email is required',
    PASSWORD: 'Password is required',
    FIRST_NAME: 'First name is required',
    LAST_NAME: 'Last name is required',
    DATE_OF_BIRTH: 'Date of birth is required',
  },
  MIN_LENGTH: {
    PASSWORD: 'Password should be of minimum 8 characters length',
    FIRST_NAME: 'First name should be of minimum 3 characters length',
    LAST_NAME: 'Last name should be of minimum 3 characters length',
  },
  MAX_LENGTH: {
    DESCRIPTION: 'Description should be of maximum 450 characters length',
  },
};

export const LOCAL_STORAGE_KEYS = {
  USER: 'user',
  ACTIVE_NOTE: 'activeNote',
  ACTIVE_SHARED_NOTE: 'activeSharedNote',
};

export const HELPER_TEXT = {
  HOME_PAGE:
    'Please, log in to have access to notes and be able to create your own!',
};
