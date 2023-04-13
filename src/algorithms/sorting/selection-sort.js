import { Compare, defaultCompare, swap } from '../../util'

// 选择排序
export const selectionSort = (array, compareFn = defaultCompare) => {
  const { length } = array
  let indexMin
  for (let i = 0; i < length - 1; i++){
    // 假设本轮循环第一个值为数组最小值
    indexMin = i
    // 从第2个数开始到数组结束比较找出数组最小值索引，有比当前最小值更小的就更新索引
    for (let j = i + 1; j < length; j++){
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        indexMin = j
      }
    }
    // 当内循环结束，将得出数组第n小的值
    // 如果循环结束找出的最小值和原最小值不同，则交换其值使得最小值到数组头部
    if (indexMin !== i) {
      swap(array, indexMin, i)
    }
  }
  return array
}
