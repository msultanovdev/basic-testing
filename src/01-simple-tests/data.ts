type dataType = {
  number1: number;
  number2: number;
  sum: number;
  diff: number;
  mult: number;
  part: number;
  exp: number;
};

export const calculations: dataType[] = [
  {
    number1: 5,
    number2: 3,
    sum: 8,
    diff: 2,
    mult: 15,
    part: 1.6666666666666667,
    exp: 125,
  },
  {
    number1: -4,
    number2: 7,
    sum: 3,
    diff: -11,
    mult: -28,
    part: -0.5714285714285714,
    exp: -16384,
  },
  {
    number1: 9,
    number2: 2,
    sum: 11,
    diff: 7,
    mult: 18,
    part: 4.5,
    exp: 81,
  },
  {
    number1: 123,
    number2: 456,
    sum: 579,
    diff: -333,
    mult: 56088,
    part: 0.26973684210526316,
    exp: Infinity,
  },
  {
    number1: -8,
    number2: -6,
    sum: -14,
    diff: -2,
    mult: 48,
    part: 1.3333333333333333,
    exp: 0.000003814697265625,
  },
];
