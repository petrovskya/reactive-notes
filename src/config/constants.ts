enum PLACEHOLDER_TEXT {
  TITLE = 'Enter title...',
  DESCRIPTION = 'Enter description...',
  FIRST_NAME = 'What is your first name?',
  LAST_NAME = 'What is your last name?',
  EMAIL = 'Enter your email',
  DATE_OF_BIRTH = 'Your date of birth is ...',
  PASSWORD = 'Your password',
  CONFIRM_PASSWORD = 'Confirm your password',
}

enum BUTTON_TEXT {
  SAVE = 'Save',
  EDIT = 'Edit',
  CANCEL = 'Cancel',
  CREATE = 'Create a new note',
  SIGN_UP = 'Sign up',
  SIGN_IN = 'Sign in',
  IS_USER = 'Already have an account? Sign in',
  // eslint-disable-next-line quotes
  NEW_USER = "Don't have an account? Sign up",
  SIGN_OUT = 'Sign out',
}

enum LABEL_TEXT {
  TITLE = 'Title',
  DESCRIPTION = 'Description',
}

enum COMPONENT_TITLE {
  ACTIVE_NOTE = 'Select note to display...',
  CREATE_NOTE = 'Add your note',
  EDIT_MENU = 'Do you want to change something?',
  SIGN_UP = 'Sign up',
  SIGN_IN = 'Sign in',
  USER_PROFILE = 'Profile',
}

enum STUB_TEXT {
  HOME_PAGE = 'Home page is coming soon ...',
  SHARED_NOTES_PAGE = 'Shared Notes page is coming soon ...',
  ABOUT = 'About page is coming soon ...',
}

const EMPTY_STRING = '';

enum NAV_LINKS {
  HOME = 'Home',
  MY_NOTES = 'My notes',
  SHARED_NOTES = 'Shared notes',
  ABOUT = 'About',
}

export {
  PLACEHOLDER_TEXT,
  BUTTON_TEXT,
  LABEL_TEXT,
  COMPONENT_TITLE,
  STUB_TEXT,
  EMPTY_STRING,
  NAV_LINKS,
};
