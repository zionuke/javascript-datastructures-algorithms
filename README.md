# JavaScript 数据结构与算法

本仓库内容根据哔哩哔哩 [《JavaScript 数据结构与算法》](https://www.bilibili.com/video/BV1x7411L7Q7?p=1) 视频与书籍《学习JavaScript数据结构与算法(第3版)》整理的学习笔记，视频教程讲的比较好，结合书籍ES6实现，配合本仓库的代码测试环境来练习，学习效果更佳，欢迎同学们 Star 和 Fork。  

推荐大家按照目录顺序来学习，由浅入深，循序渐进，轻松搞定数据结构和算法。

> 重点要掌握数据结构与算法的思想和原理，使用哪种编程语言区别不大。

> 本仓库在XPoet的[仓库](https://github.com/XPoet/js-data-structures-and-algorithms)基础上重构和补充代码完成

## 文档目录

- [JavaScript 数据结构与算法（一）前言](assets/doc/01_JavaScript数据结构与算法（一）前言.md)
- [JavaScript 数据结构与算法（二）数组](assets/doc/02_JavaScript数据结构与算法（二）数组.md)
- [JavaScript 数据结构与算法（三）栈](assets/doc/03_JavaScript数据结构与算法（三）栈.md)
- [JavaScript 数据结构与算法（四）队列](assets/doc/04_JavaScript数据结构与算法（四）队列.md)
- [JavaScript 数据结构与算法（五）优先队列](assets/doc/05_JavaScript数据结构与算法（五）优先队列.md)
- [JavaScript 数据结构与算法（六）单向链表](assets/doc/06_JavaScript数据结构与算法（六）单向链表.md)
- [JavaScript 数据结构与算法（七）双向链表](assets/doc/07_JavaScript数据结构与算法（七）双向链表.md)
- [JavaScript 数据结构与算法（八）集合](assets/doc/08_JavaScript数据结构与算法（八）集合.md)
- [JavaScript 数据结构与算法（九）字典](assets/doc/09_JavaScript数据结构与算法（九）字典.md)
- [JavaScript 数据结构与算法（十）哈希表](assets/doc/10_JavaScript数据结构与算法（十）哈希表.md)
- [JavaScript 数据结构与算法（十一）树](assets/doc/11_JavaScript数据结构与算法（十一）树.md)
- [JavaScript 数据结构与算法（十二）二叉树](assets/doc/12_JavaScript数据结构与算法（十二）二叉树.md)
- [JavaScript 数据结构与算法（十三）二叉搜索树](assets/doc/13_JavaScript数据结构与算法（十三）二叉搜索树.md)
- [JavaScript 数据结构与算法（十四）图](assets/doc/14_JavaScript数据结构与算法（十四）图.md)

## 代码目录

### 栈

- [基于数组的栈](src/Stack/stack-array.js)
- [基于JavaScript对象的栈](src/Stack/stack.js)
- [使用ES6 Symbol类型基于数组的栈](src/Stack/StackSymbol.js)
- [使用ES6 WeakMap类型基于对象的栈](src/Stack/StackWeakMap.js)

### 队列和双端队列

- [基于数组的队列](src/Queue/queue-array.js)
- [基于JavaScript对象的队列](src/Queue/queue.js)
- [双端队列的封装](src/Queue/deque.js)
- [优先队列的封装](src/PriorityQueue/priorityQueue.js)

### 链表

- [单向链表的封装](src/LinkedList/linkedList.js)
- [双向链表的封装](src/DoublyLinkedList/doublyLinkedList.js)

### 集合

- [集合的封装](src/Set/set.js)

### 字典和散列表

- [字典的封装](src/Map/map.js)
- [哈希表的封装](src/HashTable/hashTable.js)

### 递归

- 

### 树

- [二叉搜索树的封装](src/Tree/tree.js)

### 二叉堆和堆排序

- 

### 图

- [图的封装](src/Graph/graph.js)

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
比如：我要测试**栈**，把 `// import './Stack'` 的注释去掉，要测试哪个就去掉哪个的注释。

```js
// 导入栈结构的封装及测试代码
// import './Stack'

// 导入队列结构的封装及测试代码
// import './Queue'

// 导入优先队列结构的封装及测试代码
// import './PriorityQueue'

// 导入单向链表结构的封装及测试代码
// import './LinkedList'

// 导入双向链表结构的封装及测试代码
// import './DoublyLinkedList'

// 导入集合结构的封装及测试代码
// import './Set'

// 导入字典结构的封装及测试代码
// import './Map'

// 导入哈希表结构的封装及测试代码
// import './HashTable';

// 导入树结构的封装及测试代码
// import './Tree';

// 导入图结构的封装及测试代码
// import './Graph';
```
