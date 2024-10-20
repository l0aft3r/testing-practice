import { capitalize, reverseString, calculator, ceasarCipher, analyzeArray } from "./index.js";

test('Capitalization', () => {
    expect(capitalize('hello world')).toBe('Hello world');
    expect(capitalize('world')).toBe('World');
})

test('Reverse String', () => {
    expect(reverseString('Hello world')).toBe('dlrow olleH');
    expect(reverseString('Cheese planet')).toBe('tenalp eseehC');
})

test('calculator addition', (calc = calculator()) => {
    expect(calc.add(1, 1)).toBe(2);
    expect(calc.add(0.1, 0.2)).toBeCloseTo(0.3);
})

test('calc subtraction', (calc = calculator()) => {
    expect(calc.subtract(1, 1)).toBe(0);
    expect(calc.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
})

test('calc division', (calc = calculator()) => {
    expect(calc.divide(1, 1)).toBe(1);
    expect(calc.divide(0.1, 0.2)).toBeCloseTo(0.5);
})

test('calc multiplication', (calc = calculator()) => {
    expect(calc.multiply(1, 1)).toBe(1);
    expect(calc.multiply(0.1, 0.2)).toBeCloseTo(0.02);
})

test('ceasarCipher default', () => {
    expect(ceasarCipher('abc', 3)).toBe('def');
    expect(ceasarCipher('gce', 0)).toBe('gce');
    expect(ceasarCipher('bhi', 1)).toBe('cij');
})

test('ceasarCipher capitalisation', () => {
    expect(ceasarCipher('aBc', 3)).toBe('dEf');
})

test('ceasarCipher wrapping', () => {
    expect(ceasarCipher('xyz', 3)).toBe('abc');
})

test('ceasarCipher ignore punctuation', () => {
    expect(ceasarCipher('abc!', 3)).toBe('def!');
})

test('analyzeArray average', (obj = analyzeArray([1,8,3,4,2,6])) => {
    expect(obj).toEqual({average: 4, min: 1, max: 8, length: 6});
})