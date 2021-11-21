// 快速排序
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
