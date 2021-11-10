import StackArray from "./stack-array"
// 函数:将十进制转换为二进制
export default function (decNumber) {
  // 1.定义栈对象
  let stack = new StackArray()

  // 2.循环取余压栈
  while (decNumber > 0) {
    stack.push(decNumber % 2)
    decNumber = Math.floor(decNumber / 2)
  }

  // 3.按顺序出栈显示结果
  let binaryString = ''
  while (!stack.isEmpty()) {
    binaryString += stack.pop()
  }
  return binaryString
}
