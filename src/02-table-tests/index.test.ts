import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Subtract, expected: 0 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 3, b: 2, action: Action.Divide, expected: 1.5 },
  { a: 'str', b: 2, action: Action.Add, expected: null },
  { a: 1, b: 0, action: Action.Subtract, expected: 1 },
  { a: 2, b: 0, action: Action.Multiply, expected: 0 },
  { a: 3, b: 0, action: Action.Divide, expected: Infinity },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    '($a $action $b) should return $expected',
    ({ a, b, action, expected }) => {
      const res = simpleCalculator({ a, b, action });
      expect(res).toBe(expected);
    },
  );
});
