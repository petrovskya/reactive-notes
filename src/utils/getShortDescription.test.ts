import { getShortDescription } from './getShortDescription';

const TEST_LONG_DESCRIPTION =
  'Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!';
const TEST_SHORT_DESCRIPTION = 'Jest is a delightful';

const EXPECTED_DESCRIPTION = 'Jest is a delightful...';

it('get short description if it is more than 20 characters', () => {
  expect(getShortDescription(TEST_LONG_DESCRIPTION)).toBe(EXPECTED_DESCRIPTION);
  expect(getShortDescription(TEST_SHORT_DESCRIPTION)).toBe(
    TEST_SHORT_DESCRIPTION,
  );
});
