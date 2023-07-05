import { convertToLowerCase, compareUserEmail } from './compareUserEmail';

const TEST_TEXT = ['Test', 'test'];
const TEST_EMAILS = ['Yana99-09@yandex.ru', 'yana99-09@yandex.ru'];
const TEST_EMAILS_FALSY = ['petrovska.ya@icloud.com', 'ivanov'];
const TEST_USER = {
  id: '2',
  createdAt: 'Tue May 09 2023',
  firstName: 'Yana',
  lastName: 'Petrova',
  dateOfBirth: 'Fri Sep 10 1999',
  email: 'yana99-09@yandex.ru',
  password: '12345678',
};

describe('compare email from the input with the email of the active user returning true, if they are equal, and false, if they are not equal, ignoring the first letter case', () => {
  it('convert first letter of the text to lower case', () => {
    TEST_TEXT.forEach((text) => expect(convertToLowerCase(text)).toBe('test'));
  });

  it('covert first letter of the email to lower case', () => {
    const [INITIAL_EMAIL, EXPECTED_EMAIL] = TEST_EMAILS;
    expect(convertToLowerCase(INITIAL_EMAIL)).toBe(EXPECTED_EMAIL);
  });

  it('compare two emails', () => {
    TEST_EMAILS.forEach((email) =>
      expect(compareUserEmail(TEST_USER, email)).toBeTruthy(),
    );

    TEST_EMAILS_FALSY.forEach((email) =>
      expect(compareUserEmail(TEST_USER, email)).toBeFalsy(),
    );
  });
});
