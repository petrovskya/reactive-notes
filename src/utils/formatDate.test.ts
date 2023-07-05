import { formatDate } from './formatDate';

const EXPECTED_DATE = '14.05.2023';
const EXPECTED_EMPTY_DATE = '';

describe('get day, month and year from date in specific format', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2023, 4, 14, 17, 26, 25, 444));
  });

  it('get format date when parameter is defined ', () => {
    const TEST_DATE = new Date();
    expect(formatDate(TEST_DATE)).toBe(EXPECTED_DATE);
  });

  it('get format date when parameter is undefined ', () => {
    expect(formatDate()).toBe(EXPECTED_EMPTY_DATE);
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
