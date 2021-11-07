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

  // insert(position, data) 在指定位置（position）插入节点
  insert(position, data) {
    // position 新插入节点的位置
    // position = 0 表示新插入后是第一个节点
    // position = 1 表示新插入后是第二个节点，以此类推

    // 1、对 position 进行越界判断，不能小于 0 或大于链表长度
    if (position < 0 || position > this.length) return false

    // 2、创建新节点
    const newNode = new Node(data)

    // 3、插入节点
    if (position === 0) {
      // position = 0 即新插入节点为第一个节点的情况
      // 顺序很重要，先让新节点指向原来的第一个节点，之后修改头指针指向新节点

      // 让新节点的 next 指向 原来的第一个节点，即 head
      newNode.next = this.head
      // head 赋值为 newNode
      this.head = newNode
    } else {
      // 0 < position <= length 的情况

      // 初始化一些状态变量
      let index = 0           // 遍历索引初始化为 0
      let current = this.head // 遍历的当前节点初始化为 head
      let previous = null     // 遍历的的上一节点初始化为 null

      // 在 0 ~ position 之间遍历，不断地更新 current 和 previous
      // 直到找到要插入的位置
      while (index++ < position) {
        previous = current
        current = current.next
      }

      // 在当前节点和当前节点的上一节点之间插入新节点，即改变它们的指向
      newNode.next = current
      previous.next = newNode

    }

    // 4、追加完新节点后，链表长度 + 1
    this.length++
    // 5、返回新添加的节点，方便其他操作
    return newNode
  }

  // getData(position) 获取指定位置的 data
  getData(position) {
    // 1、position越界判断,注意链表长度为0也应直接返回null
    if (position < 0 || position > this.length || this.length === 0) return null

    // 2、获取指定 position 节点的 data
    let index = 0
    let current = this.head
    while (index++ < position) {
      current = current.next
    }

    // 3、返回 data
    return current.data

  }

  // indexOf(data) 返回指定 data 的 index，如果没有，返回 -1。
  indexOf(data) {
    // 1、定义遍历变量
    let index = 0
    let current = this.head

    // 2、遍历比较链表中数据
    while (current) {
      if (current.data === data) {
        // 找到相应数据,返回索引
        return index
      }
      current = current.next
      index++
    }

    // 未找到相应数据，返回-1
    return -1
  }

  // toString() 链表数据以字符串形式返回
  toString() {
    let current = this.head
    let resultString = ''

    // 遍历所有的节点，拼接为字符串，直到尾节点(值为null)
    while (current) {
      resultString += current.data + ' '
      current = current.next
    }

    return resultString
  }
}