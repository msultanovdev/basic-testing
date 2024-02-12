import { calculations } from './data';
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    for (const data of calculations) {
      const sum = simpleCalculator({
        a: data.number1,
        b: data.number2,
        action: Action.Add,
      });
      expect(sum).toBe(data.sum);
    }
  });

  test('should subtract two numbers', () => {
    for (const data of calculations) {
      const diff = simpleCalculator({
        a: data.number1,
        b: data.number2,
        action: Action.Subtract,
      });
      expect(diff).toBe(data.diff);
    }
  });

  test('should multiply two numbers', () => {
    for (const data of calculations) {
      const mult = simpleCalculator({
        a: data.number1,
        b: data.number2,
        action: Action.Multiply,
      });
      expect(mult).toBe(data.mult);
    }
  });

  test('should divide two numbers', () => {
    for (const data of calculations) {
      const part = simpleCalculator({
        a: data.number1,
        b: data.number2,
        action: Action.Divide,
      });
      expect(part).toBe(data.part);
    }
  });

  test('should exponentiate two numbers', () => {
    for (const data of calculations) {
      const exp = simpleCalculator({
        a: data.number1,
        b: data.number2,
        action: Action.Exponentiate,
      });
      expect(exp).toBe(data.exp);
    }
  });

  test('should return null for invalid action', () => {
    for (const data of calculations) {
      const invalidRes = simpleCalculator({
        a: data.number1,
        b: data.number2,
        action: 'Invalid',
      });
      expect(invalidRes).toBeNull();
    }
  });

  test('should return null for invalid arguments', () => {
    for (const data of calculations) {
      const invalidRes = simpleCalculator({
        a: 'Invalid arg',
        b: data.number2,
        action: Action.Add,
      });
      expect(invalidRes).toBeNull();
    }
  });
});
