import { LinkedList, Node } from '../LinkedList/linkedList'

// 双向链表结构的封装

// 双向链表的节点类（继承单向链表的节点类）
class DoublyNode extends Node {
  constructor(element) {
    super(element)
    this.prev = null
  }
}

// 双向链表类（继承单向链表类）
export class DoublyLinkedList extends LinkedList {

  constructor() {
    super()
    this.tail = null
  }
}