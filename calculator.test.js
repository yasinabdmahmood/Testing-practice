const calculator =require('./calculator.js')
const firstNum=3;
const secondNum=4;
describe('test calculator object', () => {
    test('3+4 is expected to be 7', () => {
        expect(calculator.add(firstNum,secondNum)).toBe(firstNum+secondNum);
    });
  
    test('3-4 is expected to be -1', () => {
        expect(calculator.subtract(firstNum,secondNum)).toBe(firstNum-secondNum);
    });

    test('3*4 is expected to be 12', () => {
        expect(calculator.multiply(firstNum,secondNum)).toBe(firstNum*secondNum);
      });
  });