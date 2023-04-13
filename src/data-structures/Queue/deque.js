export default class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // 将一个元素添加到双端队列的前端，存在三种场景
  addFront(element) {
    // 1、双端队列为空
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      // 2、一个元素已经被从双端队列的前端移除，即lowestCount属性大于等于1
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else { // 3、lowestCount为0的情况
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.items[0] = element;
    }
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

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

// 双端队列测试代码
console.log('// ----- 双端队列结构测试 START -----//');
const deque = new Deque();
console.log(deque.isEmpty()); //--> true
deque.addBack('John');
deque.addBack('Jack');
console.log(deque.toString()); //--> John,Jack
deque.addBack('Camila');
console.log(deque.toString()); //--> John,Jack,Camila
console.log(deque.size()); //--> 3
console.log(deque.isEmpty()); //--> false
deque.removeFront(); // remove John
console.log(deque.toString()); //--> Jack,Camila
deque.removeBack();
console.log(deque.toString()); //--> Jack
deque.addFront('John');
console.log(deque.toString()); //--> John,Jack
console.log('// ----- 双端队列结构测试 END -----//');
