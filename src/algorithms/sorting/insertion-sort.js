import { Compare, defaultCompare } from '../../util'

// 插入排序
export const insertionSort = (array, compareFn = defaultCompare) => {
  const { length } = array
  let temp
  // 从第二个位置（索引1）而不是0位置开始（我们认为第一项已排序了）
  for (let i = 1; i < length; i++){
    // j存储要插入的正确位置，初始为元素当前所在位置
    let j = i
    // 暂存要插入元素的值，便于比较和后续插入
    temp = array[i]
    // 循环找出正确的插入位置
    // 只要变量j比0大（因为数组的第一个索引是0——没有负值的索引）并且数组中前面的值比待比较的值大，我们就把这个值移到当前位置上并减小j
    while (j > 0 && compareFn(array[j - 1], temp) === Compare.BIGGER_THAN) {
      array[j] = array[j - 1]
      j--
    }
    // 循环结束时j即正确的插入位置，直接插入即可
    array[j] = temp
  }
  return array
}
