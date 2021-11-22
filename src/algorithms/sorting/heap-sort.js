import { defaultCompare, swap } from '../../util'

// 下移操作(堆化)
function heapify(array, index, heapSize, compareFn) {
  // 初始化最大值索引为要下移元素的索引
  let largest = index
  // 获取左右子节点索引
  const left = (2 * index) + 1
  const right = (2 * index) + 2
  // 如果元素比左侧子节点要小（且index合法），最大子节点索引就记为左子节点
  if (left < heapSize && compareFn(array[left], array[index]) > 0) {
    largest = left
  }
  // 同理，比较找出最大子节点索引
  if (right < heapSize && compareFn(array[right], array[largest]) > 0) {
    largest = right
  }
  // 只有最大子节点不是自己才和最大子节点交换，并递归重复下移直至该元素被放在正确的位置
  if (largest !== index) {
    swap(array, index, largest)
    heapify(array, largest, heapSize, compareFn)
  }
}

// 用数组创建一个最大堆用作源数据
function buildMaxHeap(array, compareFn) {
  // 初始化，i从最后一个父节点开始调整直至根节点
  for (let i = Math.floor(array.length / 2) - 1; i >= 0; i--){
    heapify(array, i, array.length, compareFn)
  }
}

// 堆排序，用最大堆得到一个升序排列的数组
export function heapSort(array, compareFn = defaultCompare) {
  let heapSize = array.length
  // 用数组创建一个最大堆用作源数据
  buildMaxHeap(array, compareFn)
  // 重复循环内操作直到堆的大小为1
  while (heapSize > 1) {
    // 创建最大堆后，最大的值会被存储在堆的第一个位置。我们要将它替换为堆的最后一个值，将堆的大小减1。
    swap(array, 0, --heapSize)
    // 将堆的根节点下移
    heapify(array, 0, heapSize, compareFn)
  }
  return array
}
