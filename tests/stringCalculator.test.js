import {StringCalculator} from '../js/stringCalculator.js'

let strCalc;

beforeAll(() =>{
    strCalc = new StringCalculator()
})

test('"" == 0', () => {
    expect(strCalc.add("")).toBe(0);
})

test('"1" == 1', () => {
    expect(strCalc.add("1")).toBe(1);
})

test('"1,2" == 3', () => {
    expect(strCalc.add("1,2")).toBe(3);
})

test('"1,2,5,10,20,50" == 88', () => {
    expect(strCalc.add("1,2,5,10,20,50")).toBe(88)
})

test('"1\n2,3" == 6', () => {
    expect(strCalc.add("1\n2,3")).toBe(6);
})

test('"//;\n1;2" == 3', () => {
    expect(strCalc.add("//;\n1;2")).toBe(3);
})

test('-1', () => {
    expect(() => strCalc.add("-1")).toThrow(Error);
})

test('for //;\n1;2;-4 return error', () => {
    expect(() => strCalc.add('//;\n1;2;-4')).toThrow(Error)
})

test('"1\n2,1002" == 3', () => {
    expect(strCalc.add("1\n2,1002")).toBe(3);
})

test('"//[***]\n1***2***3" == 6', () => {
    expect(strCalc.add("//[***]\n1***2***3")).toBe(6);
})