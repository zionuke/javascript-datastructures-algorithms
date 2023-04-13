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
    return this.minNode(this.root)
  }

  // min()的辅助方法，查找以节点node为根节点的树的最小的节点
  minNode(node) {
    if (!node) return null
    let current = node
    while (current.left !== null) {
      current = current.left
    }
    return current
  }

  // min() {
  //   if (!this.root) return null
  //   let node = this.root
  //   while (node.left !== null) {
  //     node = node.left
  //   }
  //   return node.key
  // }

  // max() 获取二叉搜索树最大值
  max() {
    return this.maxNode(this.root)
  }

  // max()的辅助方法，查找以节点node为根节点的树的最大的节点
  maxNode(node) {
    let current = node
    while (current != null && current.right != null) {
      current = current.right
    }
    return current
  }

  // max() {
  //   if (!this.root) return null
  //   let node = this.root
  //   while (node.right !== null) {
  //     node = node.right
  //   }
  //   return node.key
  // }

  // search(key) 查找BST中是否有特定的值key，存在返回 true，否则返回 false
  search(key) {
    return this.searchNode(this.root, key)
  }

  //search(key)的辅助方法，通过递归实现
  searchNode(node, key) {
    if (node === null) return false
    if (key < node.key) {
      // 这里注意要加return,否则此条件下无返回值了
      return this.searchNode(node.left, key)
    } else if (key > node.key) {
      return this.searchNode(node.right, key)
    } else {
      return true
    }
  }

  // 迭代实现查找BST某一个特定的值
  searchIterative(key) {
    // 取得根节点
    let node = this.root
    // 只要当前节点非空，就继续查找
    while (node !== null) {
      // 要查找的数据小于当前节点的数据，则向左查找
      if (key < node.key) {
        node = node.left
      // 要查找的数据大于当前节点的数据，则向右查找
      } else if (key > node.key) {
        node = node.right
      // 找到该数据，返回true
      } else {
        return true
      }
    }
    // 查到叶节点也没找到，说明无此数据，返回false
    return false
  }

  // 删除节点，通过递归实现
  remove(key) {
    // root被赋值为removeNode方法的返回值，这里很关键
    this.root = this.removeNode(this.root, key)
  }

  // remove(key)的辅助方法
  removeNode(node, key) {
    // 如果正在检测的节点为null，说明键不存在于树中，返回null
    if (node === null) {
      return null
    }
    // 要找的键比当前节点的值小，沿着树的左边找到下一个节点
    if (key < node.key) {
      node.left = this.removeNode(node.left, key)
      return node
      // 要找的键比当前节点的值大，沿着树的右边找到下一个节点
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 找到要删除的节点，分类讨论

      // 1、删除的是叶子节点的情况
      if (node.left === null && node.right === null) {

        // 返回null来将对应的父节点指针赋予null值
        return null

        // 2、删除的是只有一个子节点的节点
        // 2.1 要删除的节点只存在<右子节点>的情况
      } else if (node.left === null) {
        // 把对它的引用改为对它右侧子节点的引用
        return node.right

        // 2.2 要删除的节点只存在<左子节点>的情况
      } else if (node.right === null) {
        // 把对它的引用改为对它左侧子节点的引用
        return node.left

        // 3、删除的是有两个子节点的节点
      } else {

        // 找到它右边子树中最小的节点(它的继承者)
        const aux = this.minNode(node.right)
        // 用它右侧子树中最小节点的键去更新这个节点的值，即它被移除了
        node.key = aux.key
        // 把右侧子树中的最小节点移除，因为它已经被移至要移除的节点的位置了
        node.right = this.removeNode(node.right, aux.key)
        // 向它的父节点返回更新后节点的引用
        return node
      }
    }
  }

  // 删除节点,通过循环迭代实现
  removeIterative(key) {
    // 二叉树为空，直接返回false
    if (!this.root) return false

    // 寻找要删除的节点
    // 定义临时保存的变量
    let current = this.root //查找的当前节点
    let parent = null //当前节点的父节点
    let isLeftChild = true //当前节点是否为父节点的左子节点

    // 开始寻找要删除的节点
    while (current.key !== key) {
      parent = current
      // 要删除的节点小于当前节点，往左找
      if (key < current.key) {
        isLeftChild = true
        current = current.left
      // 要删除的节点大于当前节点，往右找
      } else {
        isLeftChild = false
        current = current.right
      }
      // 查找到叶节点仍未找到，返回false
      if (current === null) {
        return false
      }
    }

    // 找到要删除的节点，分类讨论
    // 1、删除的是叶子节点的情况
    if (current.left === null && current.right === null) {
      // 叶子节点同时是根节点
      if (current === this.root) {
        this.root = null
        // 是父节点的左子节点
      } else if (isLeftChild) {
        parent.left = null
        // 是父节点的右子节点
      } else {
        parent.right = null
      }

      // 2、删除的是只有一个子节点的节点
    } else if (current.right === null) {
      //-- 2.1、要删除的节点只存在<左子节点>的情况

      //---- 2.1.1、要删除的节点为根节点
      if (current === this.root) {
        this.root = current.left
        //---- 2.1.2、要删除的节点是其父节点的左子节点
      } else if (isLeftChild) {
        parent.left = current.left
        //---- 2.1.3、要删除的节点是其父节点的右子节点
      } else {
        parent.right = current.left
      }
    } else if (current.left === null) {
      //-- 2.2、要删除的节点只存在<右子节点>的情况

      //---- 2.2.1 要删除的节点为根节点
      if (current === this.root) {
        this.root = current.right
        //---- 2.2.2 要删除的节点是其父节点的左子节点
      } else if (isLeftChild) {
        parent.left = current.right
        //---- 2.2.3 要删除的节点是其父节点的右子节点
      } else {
        parent.right = current.right
      }

      // 3、删除的是有两个子节点的节点
    } else {

      // 3.1 找到要删除节点的后继节点
      const successor = this.getSuccessor(current)

      // 3.2.1 要删除的节点为根节点
      if (current === this.root) {
        this.root = successor
        // 3.2.2 要删除的节点是其父节点的左子节点
      } else if (isLeftChild) {
        parent.left = successor
        // 3.2.3 要删除的节点是其父节点的右子节点
      } else {
        parent.right = successor
      }

      // 3.3 将后继节点的左子节点改为被删除的节点的左子节点
      successor.left = current.left
    }
  }

  // 获取要删除节点的后继节点，即从要删除的节点的右边开始查找最小的值
  getSuccessor(delNode) {

    // 定义状态变量，保存要找到的后续节点相关的信息
    let successor = delNode     //保存后继节点
    let successorParent = null  //保存后继节点的父节点
    let current = delNode.right //当前节点，用于遍历标识是否已找到后续节点

    // 当没找到后继节点时，遍历要删除节点的右子树的左子节点，直到找到后继节点
    while (current !== null) {
      successorParent = successor
      successor = current
      current = current.left
    }

    // 若找到的后继节点不是要删除节点的直接右子节点，则后继节点可能有右子节点(不可能有左子节点，若有的话，该节点会成为后继节点，情况反而变简单了)，需要后继节点的父节点指向后继节点的右子节点，同时要删除节点的右子节点要成为后继节点的右子节点
    if (successor !== delNode.right) {
      // 后继节点的父节点指向后继节点的右子节点
      successorParent.left = successor.right
      // 要删除节点的右子节点要成为后继节点的右子节点
      successor.right = delNode.right
    }

    // 返回找到的后继节点
    return successor
  }
}
