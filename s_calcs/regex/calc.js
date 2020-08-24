const digits = {
    Z: 2000,
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
}

const stringValidation = string => {
    let pattern = /[^IVX0-9+*\/-\s]/ // ^ - invertion, s - spaces
    if ([...string.matchAll(pattern)].length > 0) {
        throw new Error('Введите корректные символы')
    }
    pattern = /[+*\/-\s]{2,}/
    if ([...string.matchAll(pattern)].length > 0) {
        throw new Error('Больше одного операнда')
    }
    
    return true
}

const getOperand = string => {
    return [...string.match(/[+*\/-]/g)] // array with the operand [ '+' ]
}
const getNums = string => {
    return string.split(/[+*\/-]/g).map(num => num.trim())
}

const isRoman = string => {
    const pattern = /^[IVX]+$/
    let arrNums = getNums(string) // [ 'VII', 'IX' ]
    const countRomans = arrNums.reduce((prevNum, currentNum) => prevNum + pattern.test(currentNum), 0) // +true == +1
    if (countRomans === 1) {
        throw new Error('Только арабские либо римские')
    } else if (countRomans === 2) {

        return true
    }
}

function romanToArabic(string) {
    return string.split('').reduce((prevValue, currentValue, i, arr) => {
        const [a, b, c] = [
            digits[arr[i]],
            digits[arr[i + 1]],
            digits[arr[i + 2]],
        ]
        return b > a ? prevValue - a : prevValue + a
    }, 0)
}

const substraction = nums => {
    return nums.reduce((a, b) => a - b)
}
const sum = nums => {
    return nums.reduce((a, b) => a + b)
}
const mult = nums => {
    return nums.reduce((a, b) => a * b)
}
const division = nums => {
    return nums.reduce((a, b) => a / b)
}

const doOperation = (str, nums) => {
    const operand = getOperand(str).join('')
    let result
    switch (operand) {
        case '+':
            return sum(nums)
        case '-':
            result = substraction(nums)
            break
        case '*':
            result = mult(nums)
            break
        case '/':
            result = division(nums)
    }
    
    return result
}
const calc = string => {
    stringValidation(string)
    let nums = getNums(string)
    if (isRoman(string)) {
        nums = nums.map(num => romanToArabic(num))
    }
    nums = nums.map(num => +num)
    
    return Math.floor(doOperation(string, nums))
}

calc('9/5')



//string.split('') === [...string]
// matchAll(pattern)  вощвращает массив с первым найденным совпадением, введенной строкой и группой [ 'D', index: 0, input: 'D = H', groups: undefined ]
