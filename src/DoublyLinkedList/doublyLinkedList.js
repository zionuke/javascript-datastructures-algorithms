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

  // ------------ 链表的常见操作 ------------ //

  // append(element) 往双向链表尾部追加一个新的元素
  // 重写 append()
  append(data) {

    // 1、创建新节点
    const newNode = new DoublyNode(data)

    // 2、追加新节点
    if (this.length === 0) {
      // 链表长度为 0 时，直接修改头指针head即可
      this.head = newNode
      this.tail = newNode
    } else {
      // ！！跟单向链表不同,不用通过循环找到最后一个节点,因为有尾指针
      // 当添加一个节点时，涉及3个指针要修改
      // 1、原来的尾节点的next指针要指向新节点
      // 2、新节点的prev指针要指向原来的尾节点
      // 3、尾指针要指向新节点
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }

    // 3、追加完新节点后，链表长度 + 1
    this.length++
  }

  // forwardToString() 链表数据从前往后以字符串形式返回
  forwardToString() {
    let currentNode = this.head
    let result = ''

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.data + '--'
      currentNode = currentNode.next
    }

    return result
  }

  // backwardString() 链表数据从后往前以字符串形式返回
  backwardString() {
    let currentNode = this.tail
    let result = ''

    // 遍历所有的节点，拼接为字符串，直到节点为 null
    while (currentNode) {
      result += currentNode.data + '--'
      currentNode = currentNode.prev
    }

    return result
  }

}