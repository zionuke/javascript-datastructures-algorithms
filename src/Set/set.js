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

  // union(otherSet) 求两个集合的并集
  union(otherSet) {

    // 1、创建一个新集合,代表两个集合的并集
    const unionSet = new Set()

    // 2、将当前集合（this）的所有 value，添加到新集合（unionSet）中
    this.values().forEach(value => unionSet.add(value))

    // 3、将 otherSet 集合的所有 value，添加到新集合（unionSet）中
    otherSet.values().forEach(value => unionSet.add(value))

    return unionSet
  }

  // intersection(otherSet) 求两个集合的交集
  intersection(otherSet) {

    // 1、创建一个新集合，用于返回共有的元素
    const intersectionSet = new Set()

    // 2、迭代当前Set实例所有值，验证它们是否也存在于OtherSet实例中
    for (const value of this.values()) {
      if (otherSet.has(value)) {
        intersectionSet.add(value)
      }
    }

    return intersectionSet
  }

  // difference(otherSet) 求两个集合的差集
  difference(otherSet) {

    // 1、创建一个新集合,用于存放结果，因为不想修改原来的集合
    const differenceSet = new Set()

    // 2、迭代当前Set实例所有值，判断是否在 otherSet 集合中存在，不存在的即为差集
    for (const value of this.values()) {
      if (!otherSet.has(value)) {
        differenceSet.add(value)
      }
    }

    return differenceSet
  }

  // isSubsetOf(otherSet) 判断集合是否是另一个集合的子集
  isSubsetOf(otherSet) {

    // 1、如果当前实例中元素比otherSet实例更多，显然不是子集
    if (this.size() > otherSet.size()) {
      return false
    }

    // 2、迭代当前Set实例所有值，判断是否在otherSet集合中存在，有不存在的立即返回false(不是子集)
    // 如果所有元素都存在于otherSet中，返回true
    return this.values().every(value => otherSet.has(value))
  }
}
