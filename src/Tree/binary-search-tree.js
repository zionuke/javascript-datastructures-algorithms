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

  // ----------- 二叉树遍历 ----------- //

  /**
  * 先序遍历（根左右 DLR）
  * @param {function} callback 回调函数,用来定义对遍历到的每个节点进行的操作(这也叫作访问者模式)
  */
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  /**
  * 先序遍历的辅助方法
  * @param node 要遍历的树的根节点
  * @param {function} callback 回调函数,用来定义对遍历到的每个节点进行的操作
  */
  preOrderTraverseNode(node, callback) {
    // 检查以参数形式传入的节点是否为null，是递归算法的基线条件
    if (node !== null) {
      // 访问根节点
      callback(node.key)
      // 先序遍历其左子树
      this.preOrderTraverseNode(node.left, callback)
      // 先序遍历其右子树
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  // 中序遍历（左根右 LDR）
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    if (node != null) {
      // 中序遍历其左子树
      this.inOrderTraverseNode(node.left, callback)
      // 访问根节点
      callback(node.key)
      // 中序遍历其右子树
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  // 后序遍历（左右根 LRD）
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node != null) {
      // 后序遍历其左子树
      this.postOrderTraverseNode(node.left, callback)
      // 后序遍历其右子树
      this.postOrderTraverseNode(node.right, callback)
      // 访问根节点
      callback(node.key)
    }
  }

  // min() 获取二叉搜索树最小值
  min() {
    if (!this.root) return null
    let node = this.root
    while (node.left !== null) {
      node = node.left
    }
    return node.key
  }

  // max() 获取二叉搜索树最大值
  max() {
    if (!this.root) return null
    let node = this.root
    while (node.right !== null) {
      node = node.right
    }
    return node.key
  }


}
