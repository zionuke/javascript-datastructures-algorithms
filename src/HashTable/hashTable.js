// 引入转换字符串工具函数
import { defaultToString } from '../util'

// 哈希表的封装
export default class HashTable {

  constructor() {
    this.storage = [] // 用数组实现哈希表
    this.count = 0  // 当前存放的元素个数
    this.limit = 7  // 哈希表长度（初始设为质数 7）
  }

  /**
 * 设计哈希函数，将传入的键哈希化，转换成 hashCode
 * @param key 要哈希化的键
 * @param {number} limit 哈希表的最大个数（数组长度）
 * @returns {number} hashCode
 */
  hashFn(key, limit = 7) {

    // 将键转化为字符串
    const tableKey = defaultToString(key)

    // 自己采用的一个质数（无强制要求，质数即可）
    const PRIME = 37

    // 初始化一个hash变量并赋值为一个质数(大多数实现都使用5381)
    let hashCode = 5381

    // 使用霍纳法则（秦九韶算法），计算 hashCode 的值
    // 迭代参数key，将hashCode与PRIME相乘（用作一个幻数），并和当前迭代到的字符的Unicode码值相加
    for (let item of tableKey) {
      hashCode = hashCode * PRIME + item.charCodeAt()
    }

    // 对 hashCode 取余，并返回
    return hashCode % limit
  }
}

