//封装栈类
export default class Stack {
  // 栈中的属性
  constructor() {
    this.items = []
  }

  // 栈的相关操作
  // 1.将元素压入栈
  push(element) {
    this.items.push(element)
  }
  // 2.从栈中取出元素
  pop() {
    return this.items.pop()
  }
  // 3.查看一下栈顶元素
  peek() {
    return this.items[this.items.length-1]
  }
  // 4.判断栈是否为空
  isEmpty() {
    return this.items.length === 0
  }
  // 5.获取栈中元素个数
  size() {
    return this.items.length
  }
  // 6.toString方法
  toString() {
    let resultString = ''
    for (const item of this.items) {
      resultString += item + ' '
    }
    return resultString
  }

}