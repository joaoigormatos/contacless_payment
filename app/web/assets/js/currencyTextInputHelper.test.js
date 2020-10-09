const { localStringToNumber } = require('./currency-text-input');

describe('localStringToNumber', () => {
  it('must convert a value matching the regex pattern', () => {
    const SUT = localStringToNumber('1234')
    expect(SUT).toBe(1234)
  });
  it('must not convert a value that doenst matching the regex pattern', () => {
    const SUT = localStringToNumber('*#$21')
    expect(SUT).toBe(21)
  });
  it('must not return a empty string if no values matches the pattern', () => {
    const SUT = localStringToNumber('*#$!!@')
    expect(SUT).toBe(0)
  });
});