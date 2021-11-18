// @ts-check
import Stack from './stack'

// 进制转换算法,把十进制转换成基数为2～36的任意进制
export function baseConverter(decNumber, base) {
  const remStack = new Stack();
  // 用于转化栈中的数字
  const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let number = decNumber;
  let rem;
  let baseString = '';

  if (!(base >= 2 && base <= 36)) {
    return '';
  }

  while (number > 0) {
    rem = Math.floor(number % base);
    remStack.push(rem);
    number = Math.floor(number / base);
  }

  while (!remStack.isEmpty()) {
    // 对栈中的数字做转化
    baseString += digits[remStack.pop()];
  }

  return baseString;
}

// 测试代码
console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2BW0
