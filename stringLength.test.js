const stringLength = require('./stringLength.js');



test('Hello is five character long', () => {
    const testCase='hello';
  expect(stringLength(testCase)).toBe(testCase.length);
 });
test('the input string is more too long', () => {
    const testCase2='helooooooooooooooooo';
    const error1='Error strings longer than 10 characters are nort allowed';
    expect(stringLength(testCase2)).toBe(error1);
  
    
  });

  test('the input string is empty', () => {
    const testCase3='';
    const error2='Error string should be at least one character long';
    expect(stringLength(testCase3)).toBe(error2);
  
});