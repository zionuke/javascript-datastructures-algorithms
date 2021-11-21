import { quickSort } from '../quicksort'

let array = [2,4,3,4,6,3,2,5,6,2,3,6,5,4];
console.log(array.join());
array = quickSort(array);
console.log(array.join());
