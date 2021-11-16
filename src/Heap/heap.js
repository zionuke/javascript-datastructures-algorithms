import {
  Compare, defaultCompare, reverseCompare, swap
} from '../util'

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

  size() {
    return this.heap.length
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.heap = []
  }

  findMinimum() {
    return this.isEmpty() ? undefined : this.heap[0]
  }

  insert(value) {
    if (value != null) {
      const index = this.heap.length
      this.heap.push(value)
      this.siftUp(index)
      return true
    }
    return false
  }

  siftUp(index) {
    let parent = this.getParentIndex(index)
    while (
      index > 0
      && this.compareFn(this.heap[parent], this.heap[index]) === Compare.BIGGER_THAN
    ) {
      swap(this.heap, parent, index)
      index = parent
      parent = this.getParentIndex(index)
    }
  }

  extract() {
    if (this.isEmpty()) {
      return undefined
    }
    if (this.size() === 1) {
      return this.heap.shift()
    }
    const removedValue = this.heap[0]
    this.heap[0] = this.heap.pop()
    this.siftDown(0)
    return removedValue
  }

  siftDown(index) {
    let element = index
    const left = this.getLeftIndex(index)
    const right = this.getRightIndex(index)
    const size = this.size()
    if (
      left < size
      && this.compareFn(this.heap[element], this.heap[left]) === Compare.BIGGER_THAN
    ) {
      element = left
    }
    if (
      right < size
      && this.compareFn(this.heap[element], this.heap[right]) === Compare.BIGGER_THAN
    ) {
      element = right
    }
    if (index !== element) {
      swap(this.heap, index, element)
      this.siftDown(element)
    }
  }
}
