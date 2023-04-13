// 引入工具函数
import {
  Compare, defaultCompare, reverseCompare, swap
} from '../../util'

// 封装最小堆类
export class MinHeap {
  constructor(compareFn = defaultCompare) {
    // 使用compareFn在没有传入自定义函数的时候进行基本的比较
    this.compareFn = compareFn
    // 用数组来存储数据
    this.heap = []
  }

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

  // 返回堆中元素个数
  size() {
    return this.heap.length
  }

  // 判断堆是否为空
  isEmpty() {
    return this.size() === 0
  }

  // 清空最小堆
  clear() {
    this.heap = []
  }

  // 返回堆中最小值(最小堆)或最大值(最大堆)且不会移除这个值
  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  // 向堆中插入值
  insert(value) {
    // 插入值非undefined或null
    if (value != null) {
      // 将值插入堆的底部叶节点
      this.heap.push(value)
      // 将这个值上移直至父节点小于这个插入的值
      this.siftUp(this.heap.length - 1)
      return true
    }
    return false
  }

  // 上移操作，接收插入值的位置作为参数
  siftUp(index) {
    // 获取其父节点的位置
    let parent = this.getParentIndex(index)
    // 如果插入的值小于它的父节点（在最小堆中，或在最大堆中比父节点大），那么我们将这个元素和父节点交换，一直比较到根节点
    while (
      index > 0
      && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN
    ) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  // 移除最小值（最小堆）或最大值（最大堆）
  extract() {
    // 堆为空，直接返回undefined
    if (this.isEmpty()) {
      return undefined
    }
    // 堆中只有一个值，直接移除并返回即可
    if (this.size() === 1) {
      return this.heap.shift()
    }
    // 堆中有不止一个值，移除第一个值并将堆中最后一个元素移动至根部
    const removedValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    // 下移新的根元素直至堆结构正常
    this.siftDown(0)
    return removedValue
  }

  // 下移操作(堆化)，接收下移元素的位置作为参数
  siftDown(index) {
    // 将下移元素索引保存到element变量中
    let element = index
    // 获取左右子节点索引
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    // 获取堆的大小
    const size = this.size()
    // 将元素和最小子节点（最小堆）和最大子节点（最大堆）进行交换
    // 如果元素比左侧子节点要大（且index合法），最小子节点索引就记为左子节点
    if (
      left < size
      && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN
    ) {
      element = left
    }
    // 同理，比较找出最小子节点索引
    if (
      right < size
      && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN
    ) {
      element = right
    }
    // 只有最小子节点不是自己才和最小子节点交换，并递归重复下移直至该元素被放在正确的位置
    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }

  // 取得堆对应的数组
  getAsArray() {
    return this.heap
  }
}

// 通过继承实现最大堆类
export class MaxHeap extends MinHeap {
  constructor(compareFn = defaultCompare) {
    super(compareFn)
    // this.compareFn = compareFn
    // 将比较反转，不将a和b进行比较，而是将b和a进行比较
    this.compareFn = reverseCompare(compareFn)
  }
}
