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

  // put(key, value) 哈希表添加或修改数据
  put(key, value) {

    // 1、根据传入的key获取对应的hashCode, 也就是数组的index
    const index = this.hashFn(key, this.limit)

    // 2、从哈希表的index位置中取出桶(另外一个数组)
    let bucket = this.storage[index]

    // 3、判断相应位置是否存在 bucket
    if (bucket === undefined) {
      bucket = [] // 不存在则创建
      this.storage[index] = bucket
    }

    // 4、判断是插入数据操作还是修改数据操作
    // 注意for...of语句在可迭代对象如数组为空时，不执行循环体内容
    for (const tuple of bucket) {
      // 如果 key 相等，则直接修改数据即可
      if (tuple[0] === key) {
        tuple[1] = value
        return
      }
    }

    // 5、遍历发现哈希表中无此数据，则在相应 bucket 添加数据
    bucket.push([key, value])
    this.count++
  }

  // get(key) 获取数据
  get(key) {

    // 1、根据key获取hashCode(也就是index)
    const index = this.hashFn(key)
    // 2、根据index取出bucket
    const bucket = this.storage[index]
    // 3、bucket不存在，直接返回null
    if (bucket === undefined) {
      return null
    }
    // 4、bucket存在, 遍历判断是否有对应的key
    for (const tuple of bucket) {
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    // 5、没有找到, return null
    return null
  }
}

