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
    // 链表头节点，初始为 null
    this.head = null
    // 初始链表长度为 0
    this.length = 0
  }

  // ------------ 链表的常见操作 ------------ //

  // append(data) 往链表尾部追加数据
  append(data) {

    // 1、创建新节点
    const newNode = new Node(data)

    // 2、追加新节点
    if (this.length === 0) {
      // 链表长度为 0 时，直接修改头指针head即可
      this.head = newNode
    } else {
      // 链表长度大于 0 时，在尾节点后面添加新节点
      // 先取得链表第一个节点，之后循环遍历至尾节点
      let current = this.head
      // 当current.next!=null时表示不是尾节点
      while (current.next) {
        current = current.next
      }
      // 尾节点的 next 指向新节点
      current.next = newNode
    }

    // 3、追加完新节点后，链表长度 + 1
    this.length++
  }

}