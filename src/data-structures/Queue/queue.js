// @ts-check

export default class Queue {
  constructor() {
    // 用于控制队列的大小
    this.count = 0;
    // 用于追踪第一个元素
    this.lowestCount = 0;
    this.items = {};
  }

  // 1.将元素加入到队列中
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  // 2.删除队列前端元素
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  // 3.查看队列前端的元素
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  // 4.查看队列是否为空
  isEmpty() {
    return this.size() === 0;
  }

  // 5.清空队列
  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  // 6.查看队列中元素个数
  size() {
    return this.count - this.lowestCount;
  }

  // 7.toString方法
  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.items[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`;
    }
    return objString;
  }
}

// ---------------- 封装的队列结构测试 ---------------- //
console.log('// ----- 队列结构测试 START -----//');
const queue = new Queue();

// enqueue() 测试
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');
queue.enqueue('d');
console.log(queue.toString()); //--> a,b,c,d

// dequeue() 测试
queue.dequeue();
queue.dequeue();
console.log(queue.toString()); //--> c,d

// front() 测试
console.log(queue.peek()); //--> c

// isEmpty() 测试
console.log(queue.isEmpty()); //--> false

// size() 测试
console.log(queue.size()); //--> 2

// toString() 测试
console.log(queue.toString()); //--> c d
console.log('// ----- 队列结构测试 END -----//');
