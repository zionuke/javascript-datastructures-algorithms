import { countSort } from '../counting-sort'

let array = [1,2,8,6,0,4,3,1,4];
console.log(array.join());
array = countSort(array);
console.log(array.join());
