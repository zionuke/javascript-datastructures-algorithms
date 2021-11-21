import { Compare, defaultCompare } from '../../util'

// 归并排序，由于是分治法，归并排序也是递归的。将算法分为两个函数

// 主函数：将一个大数组分为多个小数组并调用用来排序的辅助函数
export function mergeSort(array, compareFn = defaultCompare) {
  // 数组的长度比1大，将其分成小数组
  if (array.length > 1) {
    const { length } = array
    // 找到数组的中间位
    const middle = Math.floor(length / 2)
    // 将数组分成两个小数组，分别叫作left和right
    // left数组由索引0至中间索引的元素组成
    const left = mergeSort(array.slice(0, middle), compareFn)
    // right数组由中间索引至原始数组最后一个位置的元素组成
    const right = mergeSort(array.slice(middle, length), compareFn)
    // 调用merge函数，它负责合并和排序小数组来产生大数组，直到回到原始数组并已排序完成
    array = merge(left, right, compareFn)
  }
  // 数组的长度为1则直接返回这个长度为1的数组，因为它已排序了
  return array
}

// merge函数接收两个数组作为参数，并将它们归并至一个大数组
function merge(left, right, compareFn) {
  // 声明归并过程要创建的新数组以及用来迭代两个数组（left和right数组）所需的两个变量
  let i = 0
  let j = 0
  const result = []
  // 迭代两个数组，把两个数组中最小的项依次添加至归并结果数组
  while (i < left.length && j < right.length) {
    result.push(compareFn(left[i], right[j]) === Compare.LESS_THAN ? left[i++] : right[j++])
  }
  // 迭代完成一定有一个数组还未迭代完，将这个数组所有剩余的项添加到归并数组并返回一个新数组
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}
