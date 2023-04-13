// 引入转换字符串工具函数
import { defaultToString } from '../../util'

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

  /**
  * 判断一个数是否为质数
  * @param number
  * @returns {boolean}
  */
  // 方法一，性能较差
  // isPrime(number) {
  //   if (number <= 1) {
  //     return false
  //   }
  //   for (let i = 2; i < number; i++){
  //     if (number % i === 0) {
  //       return false
  //     }
  //   }
  //   return true
  // }
  isPrime(number) {
    if (number <= 1) {
      return false
    }
    const sqrt = Math.floor(Math.sqrt(number))
    for (let i = 2; i <= sqrt; i++){
      if (number % i === 0) {
        return false
      }
    }
    return true
  }

  // getPrime(number) 根据传入的 number 获取最接近的质数
  getPrime(number) {
    while (!this.isPrime(number)) {
      number++
    }
    return number
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

    // 6、判断哈希表是否要扩容，若装填因子 > 0.75，则扩容
    if (this.count > this.limit * 0.75) {
      this.resize(this.getPrime(this.limit * 2))
    }
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
    // 4、bucket存在, 遍历判断是否有key对应的数据
    for (const tuple of bucket) {
      if (tuple[0] === key) {
        return tuple[1]
      }
    }
    // 5、没有找到, return null
    return null
  }

  // remove(key) 删除数据
  remove(key) {

    // 1.获取key对应的index
    const index = this.hashFn(key)
    // 2.获取对应的bucket
    const bucket = this.storage[index]
    // 3.bucket不存在，直接返回null
    if (bucket === undefined) {
      return null
    }
    // 4.bucket存在, 遍历判断是否有key对应的数据
    for (let i = 0; i < bucket.length; i++){
      let tuple = bucket[i]
      if (tuple[0] === key) {
        // 找到则删除对应位置的数组项
        bucket.splice(i, 1)
        this.count--
        // 根据装填因子的大小，判断是否要进行哈希表压缩
        if (this.count > 7 && this.count < this.limit * 0.25) {
          this.resize(this.getPrime(Math.floor(this.limit / 2)))
        }
        return tuple
      }
    }
    // 没有找到, return null
    return null
  }

  // resize(newLimit) 重新调整哈希表大小，扩容或压缩
  resize(newLimit) {

    // 1、保存旧的哈希表数组内容
    const oldStorage = this.storage

    // 2、重置哈希表
    this.storage = []
    this.count = 0
    this.limit = newLimit

    // 3、遍历旧哈希表中的所有数据项, 并且重新插入到新哈希表中
    for (const bucket of oldStorage) {
      // bucket存在则遍历bucket重新插入数据
      if (bucket !== undefined) {
        for (const tuple of bucket) {
          this.put(tuple[0], tuple[1])
        }
      }
    }
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }
    let objString = '哈希表存储数据'
    for (const bucket of this.storage) {
      // 数组空位不能迭代
      if (bucket !== undefined) {
        for (const tuple of bucket) {
          // 模板字符串拼接，为了换行后前面无空格，写法有点丑
          objString = objString + '\n' + `${this.storage.indexOf(bucket)}=>${tuple[0]},${tuple[1]}`
        }
      }
    }
    return objString
  }
}

