import { Compare, defaultCompare, DOES_NOT_EXIST } from '../../util'
import { quickSort1 } from '../sorting/quicksort'

export function binarySearch(array, value, compareFn = defaultCompare) {
  // 使用快速排序将数组排序
  const sortedArray = quickSort1(array)
  // 设置low,high两个边界指针
  let low = 0
  let high = sortedArray.length - 1
  // low <= high时计算中间项索引并取得中间项的值和待搜索值进行比较
  while (low <= high) {
    const mid = Math.floor((low + high) / 2)
    const element = sortedArray[mid]
    // 中间项的值比待搜索值要小，在右半数组继续查找
    if (compareFn(element, value) === Compare.LESS_THAN) {
      low = mid + 1
    // 中间项的值比待搜索值要大，在左半数组继续查找
    } else if (compareFn(element, value) === Compare.BIGGER_THAN) {
      high = mid - 1
    // 找到待搜索值，直接返回索引
    } else {
      return mid
    }
  }
  // 没找到返回-1
  return DOES_NOT_EXIST
}
