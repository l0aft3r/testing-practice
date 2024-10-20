function capitalize(input) {
    input = input.split('');
    input[0] = input[0].toUpperCase();
    return input.join('');
}

function reverseString(input) {
    return input.split('').reverse().join('');
}

function calculator() {
    const add = function (a, b) {
        return a + b;
    }

    const subtract = function (a, b) {
        return a - b;
    }

    const divide = function (a, b) {
        return a / b;
    }

    const multiply = function (a, b) {
        return a * b;
    }
    return { add, subtract, divide, multiply };
}

function ceasarCipher(text, shift) {
    if (shift === 0) return text;
    let newText = '';
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (const letter of text.split('')) {
        if (alphabet.includes(letter)) {
            newText += alphabet[(alphabet.indexOf(letter)+shift) % 26];
        } else if (alphabet.includes(letter.toLowerCase())) {
            newText += alphabet[(alphabet.indexOf(letter.toLowerCase())+shift) % 26].toUpperCase();
        } else {
            newText += letter;
        }
    }

    return newText;
}

function analyzeArray(arr) {
    return { 
        average: arr.reduce((prev, next) => prev + next) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

export { capitalize, reverseString, calculator, ceasarCipher, analyzeArray };