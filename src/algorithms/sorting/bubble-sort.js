import { Compare, defaultCompare, swap } from '../../util'

// 冒泡排序
export function bubbleSort(array, compareFn = defaultCompare) {
  const { length } = array
  for (let i = 0; i < length - 1; i++){
    for (let j = 0; j < length - 1; j++){
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1)
      }
    }
  }
  return array
}
