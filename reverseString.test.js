const reverseString=require('./reverseString.js')

test('hello becomes olleh',()=>{
    testCase='hello';
    result='olleh';
    expect(reverseString(testCase)).toBe(result)
})