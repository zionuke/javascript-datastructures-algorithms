import { modifiedBubbleSort } from '../bubble-sort-improved'

function createNonSortedArray(size){
  const array = [];
  for (let i = size; i > 0; i--){
      array.push(i);
  }
  return array;
}

let array = createNonSortedArray(5);
console.log(array.join());
array = modifiedBubbleSort(array);
console.log(array.join());
