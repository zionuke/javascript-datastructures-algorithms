import { insertionSort } from '../insertion-sort'

function createNonSortedArray(size){
  const array = [];
  for (let i = size; i > 0; i--){
      array.push(i);
  }
  return array;
}

let array = createNonSortedArray(5);
console.log(array.join());
array = insertionSort(array);
console.log(array.join());
