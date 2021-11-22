// 引入插入排序来对每个桶进行排序
import { insertionSort } from './insertion-sort'

// 创建桶
function createBuckets(array, bucketSize) {
  let minValue = array[0]
  let maxValue = array[0]
  // 迭代数组找到最大/小值
  for (let i = 1; i < array.length; i++){
    if (array[i] < minValue) {
      minValue = array[i]
    } else if (array[i] > maxValue) {
      maxValue = array[i]
    }
  }
  // 计算需要的桶的个数，根据公式：(最大值-最小值)/桶的大小+1
  const bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1
  const buckets = []
  // 初始化每个桶
  // buckets数据结构是一个矩阵（多维数组）。buckets中的每个位置包含了另一个数组。
  for (let i = 0; i < bucketCount; i++){
    buckets[i] = []
  }
  // 利用映射函数将数据分配到各个桶中
  for (let i = 0; i < array.length; i++){
    const bucketIndex = Math.floor((array[i] - minValue) / bucketSize)
    buckets[bucketIndex].push(array[i])
  }
  return buckets
}

// 将每个桶进行排序
function sortBuckets(buckets) {
  // 创建一个用作结果数组的新数组
  const sortedArray = []
  // 迭代每个可迭代的桶并应用插入排序
  for (let i = 0; i < buckets.length; i++){
    insertionSort(buckets[i])
    // 将排好序的桶中的所有元素加入结果数组中
    sortedArray.push(...buckets[i])
  }
  // 返回排好序的新数组
  return sortedArray
}

// 桶排序，需要指定每个桶容纳的元素个数
export function bucketSort(array, bucketSize = 5) {
  if (array.length < 2) {
    return array
  }
  // 创建桶并将元素分布到不同的桶中
  const buckets = createBuckets(array, bucketSize)
  // 对每个桶执行插入排序算法并将所有桶合并为排序后的结果数组
  return sortBuckets(buckets)
}
