export default class Stack {
  constructor() {
    // count属性记录栈的大小
    this.count = 0
    this.items = {}
  }

  push(element) {
    // 使用count变量作为items对象的键名，插入的元素则是它的值
    this.items[this.count] = element
    // 在向栈插入元素后，递增count变量
    this.count++
  }

  pop() {
    // 如果栈为空，就返回undefined
    if (this.isEmpty()) {
      return undefined
    }
    // 将count属性减1，并保存栈顶的值
    this.count--
    const result = this.items[this.count]
    // 用delete运算符从对象中删除一个特定的值
    delete this.items[this.count]

    return result
  }

  peek() {
    if (this.isEmpty()) {
      return undefined
    }

    return this.items[this.count - 1]
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  size() {
    return this.count
  }

  isEmpty() {
    return this.count === 0
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = `${this.items[0]}`
    for (let i = 1; i < this.count; i++){
      objString = `${objString},${this.items[i]}`
    }
    return objString
  }
}

// // 测试代码
// console.log('// ----- 基于JavaScript对象的栈结构测试 START -----//');
// const stack = new Stack()
// console.log('stack.isEmpty() => ', stack.isEmpty()); // outputs true

// stack.push(5);
// stack.push(8);

// console.log('stack after push 5 and 8 => ', stack.toString());

// console.log('stack.peek() => ', stack.peek()); // outputs 8

// stack.push(11);

// console.log('stack.size() after push 11 => ', stack.size()); // outputs 3
// console.log('stack.isEmpty() => ', stack.isEmpty()); // outputs false

// stack.push(15);

// stack.pop();
// stack.pop();

// console.log('stack.size() after push 15 and pop twice => ', stack.size()); // outputs 2

// console.log('// ----- 基于JavaScript对象的栈结构测试 END -----//');
