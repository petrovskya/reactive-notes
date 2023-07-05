import { getDateCreation } from './getDateCreation';

const TEST_DATE = '14.05.2023, 17:26:25';

describe('get date in specific format', () => {
  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date(2023, 4, 14, 17, 26, 25, 444));
  });

  it('get date', () => {
    expect(getDateCreation()).toBe(TEST_DATE);
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
