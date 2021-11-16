# JavaScript 数据结构与算法（十七）二叉堆和堆排序

二叉堆是一种特殊的二叉树，也就是堆数据结构。二叉堆是计算机科学中一种非常著名的数据结构，由于它能高效、快速地找出最大值和最小值，常被应用于优先队列。它也被用于著名的堆排序算法中。

## 二叉堆

二叉堆是一种**特殊的二叉树**，有以下两个特性。

- 它是一棵**完全二叉树**，表示树的每一层都有左侧和右侧子节点（除了最后一层的叶节点），并且最后一层的叶节点尽可能都是左侧子节点，这叫作**结构特性**。
- 二叉堆不是**最小堆**就是**最大堆**。最小堆允许你快速导出树的最小值，最大堆允许你快速导出树的最大值。所有的节点都大于等于（最大堆）或小于等于（最小堆）每个它的子节点。这叫作**堆特性**。

下图展示了一些合法的和不合法的堆。

![image](https://cdn.jsdelivr.net/gh/dragon-liu/picBed@master/img/image.3svcnye4sx40.png)

尽管二叉堆是二叉树，但并不一定是二叉搜索树（BST）。在二叉堆中，每个子节点都要大于等于父节点（最小堆）或小于等于父节点（最大堆）。然而在二叉搜索树中，左侧子节点总是比父节点小，右侧子节点也总是更大。

### 创建最小堆类

我们先来创建MinHeap类，如下所示。

```js
import { defaultCompare } from '../util'

export class MinHeap {
  constructor(compareFn = defaultCompare) {
    // 使用compareFn在没有传入自定义函数的时候进行基本的比较
    this.compareFn = compareFn
    // 用数组来存储数据
    this.heap = []
  }
}
```

#### 1．二叉树的数组表示

二叉树有两种表示方式。第一种是使用一个动态的表示方式，也就是指针（用节点表示），在BST使用过。第二种是使用一个数组，通过索引值检索父节点、左侧和右侧子节点的值。下图展示了两种不同的表示方式。

![image](https://cdn.jsdelivr.net/gh/dragon-liu/picBed@master/img/image.53d8mw95fts0.png)

要访问使用普通数组的二叉树节点，我们可以用下面的方式操作index。

对于给定位置index的节点：

- 它的左侧子节点的位置是2 * index+1（如果位置可用）；
- 它的右侧子节点的位置是2 * index+2（如果位置可用）；
- 它的父节点位置是index / 2（如果位置可用）。

用上面的方法来访问特定节点，我们可以把下面的方法加入MinHeap类。

```js
// 取得左侧子节点索引
getLeftIndex(index) {
  return (2 * index) + 1
}

// 取得右侧子节点索引
getRightIndex(index) {
  return (2 * index) + 2
}

// 取得父节点索引
getParentIndex(index) {
  if (index === 0) {
    return undefined
  }
  return Math.floor((index - 1) / 2)
}
```

可以在堆数据结构中进行三个主要操作。

`insert(value)`：向堆中插入一个新的值。如果插入成功，它返回true，否则返回false。

`extract()`：移除最小值（最小堆）或最大值（最大堆），并返回这个值。

`findMinimum()`：返回最小值（最小堆）或最大值（最大堆）且不会移除这个值。

接下来依次实现每个方法。

#### 2．向堆中插入值

向堆中插入值是指将值插入堆的底部叶节点（数组的最后一个位置）再执行siftUp方法，表示我们将要将这个值和它的父节点进行交换，直到父节点小于这个插入的值。这个上移操作也被称为up head、percolate up、bubble up、heapify up或cascade up。

- 向堆中插入新值的代码如下。

```

```

- 上移操作

```

```



#### 3．从堆中找到最小值或最大值

