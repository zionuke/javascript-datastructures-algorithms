## JavaScript 数据结构与算法（三）栈

数组是一个线性结构，并且可以在数组的任意位置插入和删除元素。

但是有时候，我们为了实现某些功能，必须对这种任意性加以限制。

栈和队列就是比较常见的受限的线性结构。

## 什么是栈

栈（stack）是一种运算受限的线性表：

- `LIFO（last in first out）`表示就是后进入的元素，第一个弹出栈空间。类似于自动餐托盘，最后放上的托盘，往往先拿出去使用。
- 其限制是仅允许在表的一端进行插入和删除运算。这一端被称为栈顶，相对地，把另一端称为栈底。
- 向一个栈插入新元素又称作进栈、入栈或压栈，它是把新元素放到栈顶元素的上面，使之成为新的栈顶元素；
- 从一个栈删除元素又称作出栈或退栈，它是把栈顶元素删除掉，使其相邻的元素成为新的栈顶元素。

如下图所示：
![image](https://cdn.jsdelivr.net/gh/XPoet/image-hosting@master/JavaScript-数据结构与算法/image.71xt32okr3k0.png)

栈的特点：**先进后出，后进先出**。

## 程序中的栈结构

- 栈被用在编程语言的编译器和内存中保存变量、方法调用等，也被用于浏览器历史记录（浏览器的返回按钮）。
- 函数调用栈：A(B(C(D())))：
  即 A 函数中调用 B，B 调用 C，C 调用 D；在 A 执行的过程中会将 A 压入栈，随后 B 执行时 B 也被压入栈，函数 C 和 D 执行时也会被压入栈。所以当前栈的顺序为：A->B->C->D（栈顶）；函数 D 执行完之后，会弹出栈被释放，弹出栈的顺序为 D->C->B->A;
- 递归：
  为什么没有停止条件的递归会造成栈溢出？比如函数 A 为递归函数，不断地调用自己（因为函数还没有执行完，不会把函数弹出栈），不停地把相同的函数 A 压入栈，最后造成栈溢出（Queue Overfloat）。

## 练习

题目：有 6 个元素 6，5，4，3，2，1 按顺序进栈，问下列哪一个不是合法的出栈顺序？

- A：5 4 3 6 1 2 （√）
- B：4 5 3 2 1 6 （√）
- C：3 4 6 5 2 1 （×）
- D：2 3 4 1 5 6 （√）

题目所说的按顺序进栈指的不是一次性全部进栈，而是有进有出，进栈顺序为 6 -> 5 -> 4 -> 3 -> 2 -> 1。

解析：

- A 答案：65 进栈，5 出栈，4 进栈出栈，3 进栈出栈，6 出栈，21 进栈，1 出栈，2 出栈（整体入栈顺序符合 654321）。
- B 答案：654 进栈，4 出栈，5 出栈，3 进栈出栈，2 进栈出栈，1 进栈出栈，6 出栈（整体的入栈顺序符合 654321）。
- C 答案：6543 进栈，3 出栈，4 出栈，之后应该 5 出栈而不是 6，所以错误。
- D 答案：65432 进栈，2 出栈，3 出栈，4 出栈，1 进栈出栈，5 出栈，6 出栈。符合入栈顺序。

## 栈结构实现

### 栈常见的操作

- `push()` 添加一个新元素到栈顶位置。
- `pop()` 移除栈顶的元素，同时返回被移除的元素。
- `peek()` 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
- `isEmpty()` 如果栈里没有任何元素就返回 `true`，否则返回 `false`。
- `size()` 返回栈里的元素个数。这个方法和数组的 `length` 属性类似。
- `clear()` 移除栈里的所有元素。
- `toString()` 将栈结构的内容以字符串的形式返回。

### 创建一个基于数组的栈

```js
class StackArray {
  // 用数组来保存栈内元素
  constructor() {
    this.items = []
  }

  // 栈的相关操作

  // 1.添加一个（或几个）新元素到栈顶
  push(element) {
    this.items.push(element)
  }

  // 2.移除栈顶的元素，同时返回被移除的元素
  pop() {
    return this.items.pop()
  }

  // 3.返回栈顶的元素，不对栈做任何修改
  peek() {
    return this.items[this.items.length-1]
  }

  // 4.判断栈是否为空，如果栈里没有任何元素就返回true，否则返回false
  isEmpty() {
    return this.items.length === 0
  }

  // 5.获取栈中元素个数
  size() {
    return this.items.length
  }

  // 6.移除栈里所有元素
  clear() {
    this.items = []
  }

  // 7.toString方法
  toString() {
    let resultString = ''
    for (const item of this.items) {
      resultString += item + ' '
    }
    return resultString
  }
}
```

### 测试封装的栈结构

```js
// push() 测试
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.items); //--> [1, 2, 3]

// pop() 测试
console.log(stack.pop()); //--> 3

// peek() 测试
console.log(stack.peek()); //--> 2

// isEmpty() 测试
console.log(stack.isEmpty()); //--> false

// size() 测试
console.log(stack.size()); //--> 2

// toString() 测试
console.log(stack.toString()); //--> 1 2
```

## 栈结构的简单应用

利用栈结构的特点封装实现十进制转换为二进制的方法。

分析：把十进制转换为二进制的通用方法就是模二取余法，将十进制数字不断模二取余，直到被除数等于零时停止，将得到的余数逆序输出即为相应二进制数字。

### 代码实现

```js
function dec2bin(dec) {
  // new 一个 Stack，保存余数
  const stack = new Stack();

  // 当不确定循环次数时，使用 while 循环
  while (dec > 0) {
    // 除二取余法
    stack.push(dec % 2); // 获取余数，放入栈中
    dec = Math.floor(dec / 2); // 除数除以二，向下取整
  }

  let binaryString = "";
  // 不断地从栈中取出元素（0 或 1），并拼接到一起。
  while (!stack.isEmpty()) {
    binaryString += stack.pop();
  }

  return binaryString;
}
```

### 测试

```js
// dec2bin() 测试
console.log(dec2bin(100)); //--> 1100100
console.log(dec2bin(88)); //--> 1011000
```

## 补充

### 创建一个基于JavaScript对象的栈

创建一个Stack类最简单的方式是使用一个数组来存储其元素。在处理大量数据的时候（这在现实生活中的项目里很常见），我们同样需要评估如何操作数据是最高效的。在使用数组时，大部分方法的时间复杂度是O(n)。O(n)的意思是，我们需要迭代整个数组直到找到要找的那个元素，在最坏的情况下需要迭代数组的所有位置，其中的n代表数组的长度。如果数组有更多元素的话，所需的时间会更长。另外，数组是元素的一个有序集合，为了保证元素排列有序，它会占用更多的内存空间。

如果我们能直接获取元素，占用较少的内存空间，并且仍然保证所有元素按照我们的需要排列，那不是更好吗？对于使用JavaScript语言实现栈数据结构的场景，我们也可以使用一个JavaScript对象来存储所有的栈元素，保证它们的顺序并且遵循LIFO原则。我们来看看如何实现这样的行为。

```js
class Stack {
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
```

