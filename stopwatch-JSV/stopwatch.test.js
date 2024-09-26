const { formatTime } = require('./script');

describe('Stopwatch functionality', () => {

  test('formats time correctly for zero milliseconds', () => {
    expect(formatTime(0)).toBe('00:00:00.000');
  });

  test('formats time correctly for one hour', () => {
    expect(formatTime(3600000)).toBe('01:00:00.000');
  });

  test('formats time correctly for one minute and 500 milliseconds', () => {
    expect(formatTime(60500)).toBe('00:01:00.500');
  });

  test('formats time correctly for 1 hour, 2 minutes, and 3.456 seconds', () => {
    expect(formatTime(3723456)).toBe('01:02:03.456');
  });

});