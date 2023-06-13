import { createNewNote } from './createNewNote';

const TEST_TITLE = 'Test note';
const TEST_DESCRIPTION = 'Test description';
const TEST_DATE = '07.06.2023, 18:20:40';

const TEST_USER = {
  id: '2',
  createdAt: 'Tue May 09 2023',
  firstName: 'Yana',
  lastName: 'Petrova',
  dateOfBirth: 'Fri Sep 10 1999',
  email: 'yana99-09@yandex.ru',
  password: '12345678',
};

const EXPECTED_NOTE = {
  id: '',
  userId: '2',
  title: 'Test note',
  description: 'Test description',
  dateCreation: TEST_DATE,
  isShared: false,
  author: 'Yana Petrova, yana99-09@yandex.ru',
};

describe('create a new note with entered title and description and settled user id', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2023, 5, 7, 18, 20, 40, 444));
  });

  it('create a new note', () => {
    expect(createNewNote(TEST_USER, TEST_TITLE, TEST_DESCRIPTION)).toEqual(
      EXPECTED_NOTE,
    );
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
