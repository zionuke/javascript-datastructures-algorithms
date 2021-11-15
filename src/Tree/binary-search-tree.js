// 节点类
class Node {
  constructor(key) {
    this.key = key //节点值
    this.left = null // 左侧子节点引用
    this.right = null //右侧子节点引用
  }
}

// 封装二叉搜索树（特点：左子树节点值 < 根节点，右子树节点值 > 根节点）
export default class BinarySearchTree {
  constructor() {
    this.root = null
  }

  // insert(key) 插入数据
  insert(key) {
    // 根据传入的key, 创建对应的Node
    const newNode = new Node(key)
    // 判断根节点是否存在,不存在则直接把新节点作为根节点
    if (this.root === null) {
      this.root = newNode
    } else { //若存在根节点则调用insertNode比较决定插入的位置
      this.insertNode(this.root, newNode)
    }
  }

  /**
  * 比较决定新节点插入的位置
  * @param node 用于比较的节点
  * @param newNode 要插入的节点
  */
  insertNode(node, newNode) {
    // 往左边查找插入
    if (newNode.key < node.key) {
      // 左子节点为空，直接插入(同时作为递归结束条件)
      if (node.left === null) {
        node.left = newNode
      } else { // 左子节点非空，则问题变成了比较左子节点和新节点决定插入位置，递归调用即可
        this.insertNode(node.left, newNode)
      }
    } else { // 往右边查找插入
      // 右子节点为空，直接插入(同时作为递归结束条件)
      if (node.right === null) {
        node.right = newNode
      } else { // 右子节点非空，则问题变成了比较右子节点和新节点决定插入位置，递归调用即可
        this.insertNode(node.right, newNode)
      }
    }
  }
}
