import { Compare, defaultCompare, swap } from '../../util'

export const selectionSort = (array, compareFn = defaultCompare) => {
  const { length } = array
  let indexMin
  for (let i = 0; i < length - 1; i++){
    indexMin = i
    // console.log('index ' + array[i])
    for (let j = i + 1; j < length; j++){
      if (compareFn(array[indexMin], array[j]) === Compare.BIGGER_THAN) {
        // console.log('new index min ' + array[j])
        indexMin = j
      }
    }
    if (indexMin !== i) {
      // console.log('swap ' + array[i] + ' with ' + array[indexMin])
      swap(array, indexMin, i)
    }
  }
  return array
}
