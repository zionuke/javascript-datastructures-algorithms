import Deque from './deque';

// 回文检查器
export function palindromeChecker(aString) {
  // 检查传入的字符串参数是否合法
  if (
    aString === undefined
    || aString === null
    || (aString !== null && aString.length === 0)
  ) {
    return false;
  }

  const deque = new Deque();
  // 由于可能接收到同时包含大小写字母的字符串，将所有字母转化为小写，同时移除所有的空格
  const lowerString = aString.toLocaleLowerCase().split(' ').join('');
  let firstChar;
  let lastChar;

  // 对字符串中的所有字符执行enqueue操作
  for (let i = 0; i < lowerString.length; i++) {
    deque.addBack(lowerString.charAt(i));
  }

  // 如果只有一个字符的话，那它肯定是回文
  // 大于一个字符则两端各移除一个元素，判断是否相等
  // 若不相等则不是回文，比较至只剩0 / 1个字符仍相等则为回文
  while (deque.size() > 1) {
    firstChar = deque.removeFront();
    lastChar = deque.removeBack();
    if (firstChar !== lastChar) {
      return false;
    }
  }

  return true;
}

// palindromeChecker() 测试
console.log('// ----- 回文检查器测试 START -----//');
console.log('a', palindromeChecker('a'));
console.log('aa', palindromeChecker('aa'));
console.log('kayak', palindromeChecker('kayak'));
console.log('level', palindromeChecker('level'));
console.log('Was it a car or a cat I saw', palindromeChecker('Was it a car or a cat I saw'));
console.log('Step on no pets', palindromeChecker('Step on no pets'));
console.log('// ----- 回文检查器测试 END -----//');
