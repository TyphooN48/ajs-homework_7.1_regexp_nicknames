import Validator from '../app';

test.each([
  ['test_-12a', true], // корректное имя
  ['test@$tt', false], // содержит символы кроме латинских букв, -, _ и цифр (0-9)
  ['test123tt', false], // содержит 3 цифры подряд
  ['1test', false], // начинается на цифру
  ['-test', false], // начинается на -
  ['_test', false], // начинается на _
  ['test1', false], // заканфивается на цифру
  ['test-', false], // заканфивается на -
  ['test_', false], // заканфивается на _
])(
  ('should validate username'),
  (input, expected) => {
    const result = Validator.validateUsername(input);
    expect(result).toBe(expected);
  },
);
