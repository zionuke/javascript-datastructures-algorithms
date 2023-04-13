import { swap } from '../../util'

// 快速排序，简单易懂版本
export const quickSort = (array) => {
  // 检查数组的元素个数，如果小于等于1，就返回
  if (array.length <= 1) {
    return array
  }
  // 选择"基准"（pivot），并将其与原数组分离，再定义两个空数组，用来存放一左一右的两个子集
  const pivotIndex = Math.floor(array.length / 2)
  const pivot = array.splice(pivotIndex, 1)[0]
  const left = []
  const right = []
  // 遍历数组，小于"基准"的元素放入左边的子集，大于基准的元素放入右边的子集
  for (let i = 0; i < array.length; i++){
    if (array[i] < pivot) {
      left.push(array[i])
    } else {
      right.push(array[i])
    }
  }
  // 使用递归不断重复这个过程，就可以得到排序后的数组
  return quickSort(left).concat(pivot, quickSort(right))
}





// 选择枢纽
function getPivot(array, left, right) {
  // 1.求出中间的位置
  const center = Math.floor((left + right) / 2)

  // 2.判断并且进行交换
  if (array[left] > array[center]) {
    swap(array, left, center)
  }
  if (array[center] > array[right]) {
    swap(array, center, right)
  }
  if (array[left] > array[center]) {
    swap(array, left, center)
  }

  // 3.巧妙的操作: 将center移动到right - 1的位置.
  swap(array, center, right - 1)

  // 4.返回pivot
  return array[right - 1]
}

// 快速排序的内部递归主函数
function quick(array, left, right) {
  // 0.递归结束条件
  if (left >= right) return array

  // 1.获取枢纽
  const pivot = getPivot(array, left, right)

  // 2.开始进行交换
  // 2.1.记录左边开始位置和右边开始位置
  let i = left
  let j = right - 1
  // 2.2.循环查找位置
  while (i < j) {
    while (array[++i] < pivot) { }
    while (array[--j] > pivot) { }
    if (i < j) {
      // 2.3.交换两个数值
      swap(array, i, j)
    }
  }

  // 3.将枢纽放在正确的位置
  swap(array, i, right - 1)

  // 4.递归调用左边
  quick(array, left, i - 1)
  quick(array, i + 1, right)

  return array
}

// 快速排序原地排序版，不借助新数组
export function quickSort1(array) {
  return quick(array, 0, array.length - 1)
}

