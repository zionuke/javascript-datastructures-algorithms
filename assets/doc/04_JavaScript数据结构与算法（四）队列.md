# JavaScript 数据结构与算法（四）队列和双端队列

## 认识队列

队列（Queue）是一种运算受限的线性表，特点：先进先出。(FIFO：First In First Out)

**受限之处：**

- 只允许在表的前端（front）进行删除操作。
- 只允许在表的后端（rear）进行插入操作。

生活中类似队列结构的场景：

- 排队，比如在电影院，商场，甚至是厕所排队。
- 优先排队的人，优先处理。 (买票、结账、WC)。

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/JavaScript-数据结构与算法/image.5mmiw2kdwbs0.png)

### 队列图解

![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/JavaScript-数据结构与算法/image.mq92bw3am0g.png)

### 队列在程序中的应用

- 打印队列：计算机打印多个文件的时候，需要排队打印。
- 线程队列：当开启多线程时，当新开启的线程所需的资源不足时就先放入线程队列，等待 CPU 处理。

## 队列的实现

队列的实现和栈一样，有多种方案：

- 基于数组实现。
- 基于对象实现。
- 基于链表实现。

### 队列常见的操作

- `enqueue(element)` 向队列尾部添加一个（或多个）新的项。
- `dequeue()` 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
- `peek()` 返回队列中的第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息与Stack类的peek方法非常类似）。该方法在其他语言中也可以叫作front方法。
- `isEmpty()` 如果队列中不包含任何元素，返回 true，否则返回 false。
- `size()` 返回队列包含的元素个数，与数组的 length 属性类似。
- `toString()` 将队列中的内容，转成字符串形式。

### 代码实现

首先需要一个用于存储队列中元素的数据结构。我们可以使用数组，就像栈的StackArray类那样。但是，为了写出一个在获取元素时更高效的数据结构，我们将使用一个对象来存储我们的元素。你会发现Queue类和Stack类非常类似，只是添加和移除元素的原则不同。

```js
class Queue {
  constructor() {
    // 用于控制队列的大小
    this.count = 0;
    // 用于追踪第一个元素
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
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
```

### 测试代码

```js
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
```

## 队列的应用

使用队列实现小游戏：**击鼓传花**。

游戏规则：几个好朋友一起玩游戏，围成一圈，任选一个人作为开头，开始数数，数到某个数字的人自动淘汰，不断重复直到只剩下一人获得胜利，问最后剩下的是原来在哪一个位置的人。

分析：这里用队列比较好，先把所有参与的人按顺序加入到队列中，之后从头开始计数，没有数到相应数字的人从前端出队后再从后端入队，数到相应数字的人出队不再入队，不断重复这个流程直到只剩下一人，找出该人在原来队列中索引即可。

### 代码实现

```js
// 利用队列结构的特点实现击鼓传花游戏求解方法的封装
function passGame(nameList, number) {
  // 1、new 一个 Queue 对象
  const queue = new Queue();

  // 2、将 nameList 里面的每一个元素入队
  for (const name of nameList) {
    queue.enqueue(name);
  }

  // 3、开始数数
  // 队列中只剩下 1 个元素时就停止数数
  while (queue.size() > 1) {
    // 不是 number 时，重新加入到队尾
    // 是 number 时，将其删除

    for (let i = 0; i < number - 1; i++) {
      // number 数字之前的人重新放入到队尾（即把队头删除的元素，重新加入到队列中）
      queue.enqueue(queue.dequeue());
    }

    // number 对应这个人，直接从队列中删除
    // 由于队列没有像数组一样的下标值不能直接取到某一元素，
    // 所以采用，把 number 前面的 number - 1 个元素先删除后添加到队列末尾，
    // 这样第 number 个元素就排到了队列的最前面，可以直接使用 dequeue 方法进行删除
    queue.dequeue();
  }

  // 4、获取最后剩下的那个人
  const endName = queue.front();

  // 5、返回这个人在原数组中对应的索引
  return nameList.indexOf(endName);
}
```

### 测试代码

```js
// passGame() 测试
const names = ["lily", "lucy", "tom", "tony", "jack"];
const targetIndex = passGame(names, 4);
console.log("击鼓传花", names[targetIndex]); //--> lily
```
