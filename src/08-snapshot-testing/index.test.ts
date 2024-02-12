import { moviesList1, moviesList2 } from './data';
import { generateLinkedList } from './index';

describe('generateLinkedList', (): void => {
  const expected = {
    value: { id: 1, name: 'Interstellar', rating: 10 },
    next: {
      value: { id: 2, name: 'The dark Knight', rating: 8 },
      next: {
        value: { id: 3, name: 'Hobbit', rating: 6 },
        next: {
          value: null,
          next: null,
        },
      },
    },
  };
  test('should generate linked list from values 1', (): void => {
    expect(generateLinkedList(moviesList1)).toStrictEqual(expected);
  });
  test('should generate linked list from values 2', (): void => {
    expect(generateLinkedList(moviesList2)).toMatchSnapshot();
  });
});
