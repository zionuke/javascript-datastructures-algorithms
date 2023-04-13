import { Compare, defaultCompare } from '../../util'

export function shellSort(array, compareFn = defaultCompare) {
  // 根据数组长度计算增量
  let increment = Math.floor(array.length / 2)
  // 增量不断变小, 大于0就继续排序
  while (increment > 0) {
    // 实现间隔为增量的插入排序
    for (let i = increment; i < array.length; i++){
      // j存储要插入的正确位置，初始为元素当前所在位置
      let j = i
      // 暂存要插入元素的值，便于比较和后续插入
      const temp = array[i]
      // 循环找出正确的插入位置
      while (j >= increment && compareFn(array[j - increment], temp) === Compare.BIGGER_THAN) {
        array[j] = array[j - increment]
        j -= increment
      }
      // 循环结束时j即正确的插入位置，直接插入即可
      array[j] = temp
    }
    // 重新计算新的增量
    if (increment === 2) {
      increment = 1
    } else {
      increment = Math.floor((increment * 5) / 11)
    }
  }
  return array
}
