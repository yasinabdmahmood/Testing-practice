
const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

test('capitize first letter',()=>{
    expect(capitalizeFirstLetter('hello')).toBe('Hello')
})