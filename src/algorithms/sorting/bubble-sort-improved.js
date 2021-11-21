import { Compare, defaultCompare, swap } from '../../util';

// 冒泡排序改进版
export function modifiedBubbleSort(array, compareFn = defaultCompare) {
  // 声明一个名为length的变量，用来存储数组的长度
  const { length } = array;
  // n个数则n-1轮排序即可
  for (let i = 0; i < length - 1; i++) {
    // 从内循环减去外循环中已跑过的轮数，以避免内循环中所有不必要的比较
    // 从第一位迭代至倒数第二位，将最大的项移至最后一位，之后依次选出第二，三...大的项即可
    for (let j = 0; j < length - 1 - i; j++) {
      if (compareFn(array[j], array[j + 1]) === Compare.BIGGER_THAN) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}
