import { swap } from '../../util';

// 迭代数组，从最后一位开始并将当前位置和一个随机位置进行交换
export function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--){
    const randomIndex = Math.floor(Math.random() * (i + 1))
    swap(array, i, randomIndex)
  }
  return array
}
