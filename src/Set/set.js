// 集合结构的封装
export default class Set {

  constructor() {
    this.items = {}
  }

  // has(value) 判断集合中是否存在 value 值，存在返回 true，否则返回 false
  has(value) {
    return Object.prototype.hasOwnProperty.call(this.items, value)
  }

  // add(value) 往集合中添加 value,这里把value同时作为键和值保存，有利于查找
  add(value) {
    if (this.has(value)) {
      return false
    }
    this.items[value] = value
    return true
  }

  // remove(value) 删除集合中指定的 value
  remove(value) {
    if (!this.has(value)) {
      return false
    }
    delete this.items[value]
    return true
  }

  // clear() 清空集合中所有 value
  clear() {
    this.items = {}
  }

  // size() 获取集合中的 value 个数
  size() {
    return Object.keys(this.items).length
  }

  // values() 获取集合中所有的 value
  values() {
    return Object.values(this.items)
  }

  // ------- 集合间的操作 ------- //

  // union() 求两个集合的并集
  union(otherSet) {
    
  }
}
