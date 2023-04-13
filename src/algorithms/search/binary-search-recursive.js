import { Compare, defaultCompare, DOES_NOT_EXIST } from '../../util';
import { quickSort } from '../sorting/quicksort';

// 分而治之算法
function binarySearchRecursive(array, value, low, high, compareFn = defaultCompare) {
  if (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const element = array[mid];
    if (compareFn(element, value) === Compare.LESS_THAN) {
      return binarySearchRecursive(array, value, mid + 1, high, compareFn);
    }
    if (compareFn(element, value) === Compare.BIGGER_THAN) {
      return binarySearchRecursive(array, value, low, mid - 1, compareFn);
    }
    // 不大也不小，表示找到了这个值，这就是一种基本情形
    return mid;
  }
  // 没有找到这个值，这也是一种基本情形
  return DOES_NOT_EXIST;
}

// 分而治之实现二分搜索，主函数用于暴露给开发者使用
export function binarySearch(array, value, compareFn = defaultCompare) {
  const sortedArray = quickSort(array);
  const low = 0;
  const high = sortedArray.length - 1;
  return binarySearchRecursive(array, value, low, high, compareFn);
}
