import { getAuthorInfo } from './getAuthorInfo';

const TEST_USER = {
  id: '2',
  createdAt: 'Tue May 09 2023',
  firstName: 'Yana',
  lastName: 'Petrova',
  dateOfBirth: 'Fri Sep 10 1999',
  email: 'yana99-09@yandex.ru',
  password: '12345678',
};

const EXPECTED_AUTHOR_INFO = 'Yana Petrova, yana99-09@yandex.ru';

it('get information about the author of the note from user', () => {
  expect(getAuthorInfo(TEST_USER)).toBe(EXPECTED_AUTHOR_INFO);
});
