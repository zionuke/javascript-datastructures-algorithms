import { findMaxValue } from '../search/min-max-search'

// 计数排序，用于排序自然数的优秀算法
export function countSort(array) {
  // 如果待排序的数组为空或只有一个元素，则不需要运行排序算法
  if (array.length < 2) {
    return array
  }
  // 创建计数数组，从索引0开始直到最大值索引maxValue
  const maxValue = findMaxValue(array)
  const counts = new Array(maxValue + 1)
  // 迭代数组中的每个位置并在counts数组中增加元素计数值
  array.forEach((element) => {
    // 如果counts数组中用来计数某个元素的位置一开始没有用0初始化的话，将其赋值为0
    if (!counts[element]) {
      counts[element] = 0
    }
    counts[element]++
  })
  // 辅助索引（sortedIndex）用于将值赋值到结果数组中的正确位置
  let sortedIndex = 0
  // 迭代counts数组并构建排序后的结果数组，因为可能有相同的值，所以要根据计数值递减来将元素放到结果数组中合适的位置
  counts.forEach((count, i) => {
    while (count > 0) {
      array[sortedIndex++] = i
      count--
    }
  })
  return array
}


