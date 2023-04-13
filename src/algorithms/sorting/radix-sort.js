import { findMaxValue, findMinValue } from '../search/min-max-search'

// 获得元素基于有效位应该插入的桶的索引
const getBucketIndex = (value, minValue, significantDigit, radixBase) =>
  Math.floor(((value - minValue) / significantDigit) % radixBase)

//基于有效位的计数排序
const countingSortForRadix = (array, radixBase, significantDigit, minValue) => {
  let bucketsIndex
  const buckets = []
  const aux = []
  // 基于基数初始化桶
  for (let i = 0; i < radixBase; i++){
    buckets[i] = 0
  }
  // 基于数组中数的有效位进行计数排序
  for (let i = 0; i < array.length; i++){
    bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase)
    buckets[bucketsIndex]++
  }
  // 由于进行的是计数排序，还需要计算累积结果来得到正确的计数值,即累加后才能得出相应元素基于有效位排序后应该插入的正确索引
  for (let i = 1; i < radixBase; i++){
    buckets[i] += buckets[i - 1]
  }
  // 倒序遍历原始数组，将原始数组按有效位排序后相应的元素插入到新数组的正确索引
  for (let i = array.length - 1; i >= 0; i--){
    bucketsIndex = getBucketIndex(array[i], minValue, significantDigit, radixBase)
    // 这里很关键，--buckets[bucketsIndex]就是该元素基于有效值排序后要插入的正确索引
    aux[--buckets[bucketsIndex]] = array[i]
  }
  // 将aux(排序好的)数组中的每个值转移到原始数组中
  for (let i = 0; i < array.length; i++){
    array[i] = aux[i]
  }
  return array
}

// 基数排序，根据数字的有效位或基数将整数分布到桶中
export function radixSort(array, radixBase = 10) {
  if (array.length < 2) {
    return array
  }
  const minValue = findMinValue(array)
  const maxValue = findMaxValue(array)
  // 对每一个有效位执行计数排序，从1开始
  let significantDigit = 1
  // 继续这个过程直到没有待排序的有效位
  while ((maxValue - minValue) / significantDigit >= 1) {
    array = countingSortForRadix(array, radixBase, significantDigit, minValue)
    significantDigit *= radixBase
  }
  return array
}
