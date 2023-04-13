import { radixSort } from '../radix-sort'

let array = [1,2,8,6,0,4,3,1,4];
console.log(array.join());
array = radixSort(array);
console.log(array.join());
