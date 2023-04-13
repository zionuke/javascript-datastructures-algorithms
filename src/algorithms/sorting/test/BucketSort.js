import { bucketSort } from '../bucket-sort'

let array = [1,2,8,6,0,4,3,1,4];
console.log(array.join());
array = bucketSort(array, 3);
console.log(array.join());
