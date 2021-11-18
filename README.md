# JavaScript 数据结构与算法

本仓库内容根据哔哩哔哩 [《JavaScript 数据结构与算法》](https://www.bilibili.com/video/BV1x7411L7Q7?p=1) 视频与书籍《学习JavaScript数据结构与算法(第3版)》整理的学习笔记，视频教程讲的比较好，结合书籍ES6实现，配合本仓库的代码测试环境来练习，学习效果更佳，欢迎大家 Star 和 Fork，这是对作者最大的支持和鼓励。  

推荐大家按照目录顺序来学习，由浅入深，循序渐进，轻松搞定数据结构和算法。

> 重点要掌握数据结构与算法的思想和原理，使用哪种编程语言区别不大。

> 本仓库在XPoet的[仓库](https://github.com/XPoet/js-data-structures-and-algorithms)基础上重构和补充代码完成

## 文档目录

- [JavaScript 数据结构与算法（一）前言](assets/doc/01_JavaScript数据结构与算法（一）前言.md)
- [JavaScript 数据结构与算法（二）数组](assets/doc/02_JavaScript数据结构与算法（二）数组.md)
- [JavaScript 数据结构与算法（三）栈](assets/doc/03_JavaScript数据结构与算法（三）栈.md)
- [JavaScript 数据结构与算法（四）队列和双端队列](assets/doc/04_JavaScript数据结构与算法（四）队列.md)
- [JavaScript 数据结构与算法（五）优先队列](assets/doc/05_JavaScript数据结构与算法（五）优先队列.md)
- [JavaScript 数据结构与算法（六）单向链表](assets/doc/06_JavaScript数据结构与算法（六）单向链表.md)
- [JavaScript 数据结构与算法（七）双向链表](assets/doc/07_JavaScript数据结构与算法（七）双向链表.md)
- [JavaScript 数据结构与算法（八）循环链表，有序链表和栈链表](assets/doc/.md)
- [JavaScript 数据结构与算法（九）集合](assets/doc/09_JavaScript数据结构与算法（九）集合.md)
- [JavaScript 数据结构与算法（十）字典](assets/doc/10_JavaScript数据结构与算法（十）字典.md)
- [JavaScript 数据结构与算法（十一）哈希表](assets/doc/11_JavaScript数据结构与算法（十一）哈希表.md)
- [JavaScript 数据结构与算法（十二）递归](assets/doc/12_JavaScript数据结构与算法（十二）递归.md)
- [JavaScript 数据结构与算法（十三）树](assets/doc/13_JavaScript数据结构与算法（十三）树.md)
- [JavaScript 数据结构与算法（十四）二叉树](assets/doc/14_JavaScript数据结构与算法（十四）二叉树.md)
- [JavaScript 数据结构与算法（十五）二叉搜索树](assets/doc/15_JavaScript数据结构与算法（十五）二叉搜索树.md)
- [JavaScript 数据结构与算法（十六）自平衡树](assets/doc/16_JavaScript数据结构与算法（十六）自平衡树.md)
- [JavaScript 数据结构与算法（十七）二叉堆和堆排序](assets/doc/17_JavaScript数据结构与算法（十七）二叉堆和堆排序.md)
- [JavaScript 数据结构与算法（十八）图](assets/doc/18_JavaScript数据结构与算法（十八）图.md)

## 代码目录

### 栈

- [基于数组的栈](src/data-structures/Stack/stack-array.js)
- [基于JavaScript对象的栈](src/data-structures/Stack/stack.js)
- [使用ES6 Symbol类型基于数组的栈](src/data-structures/Stack/StackSymbol.js)
- [使用ES6 WeakMap类型基于对象的栈](src/data-structures/Stack/StackWeakMap.js)

### 队列

- [基于数组的队列](src/data-structures/Queue/queue-array.js)
- [基于JavaScript对象的队列](src/data-structures/Queue/queue.js)
- [双端队列的封装](src/data-structures/Queue/deque.js)
- [优先队列的封装](src/data-structures/PriorityQueue/priorityQueue.js)

### 链表

- [单向链表的封装](src/data-structures/LinkedList/linkedList.js)
- [双向链表的封装](src/data-structures/DoublyLinkedList/doublyLinkedList.js)

### 集合

- [集合的封装](src/data-structures/Set/set.js)

### 字典和散列表

- [字典的封装](src/data-structures/Map/map.js)
- [哈希表的封装](src/data-structures/HashTable/hashTable.js)

### 递归

- [阶乘](src/data-structures/Recursion/Factorial.js)
- [裴波那契数列](src/data-structures/Recursion/Fibonacci.js)
- [测试JS调用栈大小](src/data-structures/Recursion/JSCallStack.js)

### 树

- [二叉搜索树的封装](src/data-structures/Tree/binary-search-tree.js)

### 二叉堆和堆排序

- [二叉堆的封装](src/data-structures/Heap/heap.js)

### 图

- [图的封装](src/data-structures/Graph/graph.js)
- [广度优先搜索](src/data-structures/Graph/breadth-first-search.js)

### 排序和搜索算法

### 算法设计与技巧

## 测试环境

### 安装依赖
```bash
npm install
```

### 启动服务
```bash
npm run start
```

开启**测试环境**的服务后，可在 `src/index.js` 选择要测试的代码，查看具体值输出。
比如：我要测试**栈**，把 `// import './data-structures/Stack'` 的注释去掉，要测试哪个就去掉哪个的注释。

```js
// 导入栈结构的封装及测试代码
// import './data-structures/Stack'

// 导入队列结构的封装及测试代码
// import './data-structures/Queue'

// 导入优先队列结构的封装及测试代码
// import './data-structures/PriorityQueue'

// 导入单向链表结构的封装及测试代码
// import './data-structures/LinkedList'

// 导入双向链表结构的封装及测试代码
// import './data-structures/DoublyLinkedList'

// 导入集合结构的封装及测试代码
// import './data-structures/Set'

// 导入字典结构的封装及测试代码
// import './data-structures/Map'

// 导入哈希表结构的封装及测试代码
// import './data-structures/HashTable'

// 导入递归的封装及测试代码
// import './data-structures/Recursion'

// 导入树结构的封装及测试代码
// import './data-structures/Tree'

// 导入二叉堆结构的封装及测试代码
// import './data-structures/Heap'

// // 导入图结构的封装及测试代码
// import './data-structures/Graph'
```
