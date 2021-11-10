// 封装队列类
export default class QueueArray {

  // 属性
  constructor() {
    this.items = []
  }

  // 方法
  // 1.将元素加入到队列中
  enqueue(element) {
    this.items.push(element)
  }

  // 2.删除队列前端元素
  dequeue() {
    return this.items.shift()
  }

  // 3.查看队列前端的元素
  front() {
    return this.items[0]
  }

  // 4.查看队列是否为空
  isEmpty() {
    return this.items.length === 0
  }

  // 5.查看队列中元素个数
  size() {
    return this.items.length
  }

  // 6.toString方法
  toString() {
    let resultString = ''
    for (const item of this.items) {
      resultString += item + ' '
    }
    return resultString
  }
}
