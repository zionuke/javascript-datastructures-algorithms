// 封装链表结构

// 封装链表节点类
class Node{
  constructor(data) {
    this.data = data
    this.next = null
  }
}

// 单向链表结构的封装
export default class LinkedList{
  constructor() {
    // 链表头结点，初始为 null
    this.head = null
    // 初始链表长度为 0
    this.length = 0
  }
}