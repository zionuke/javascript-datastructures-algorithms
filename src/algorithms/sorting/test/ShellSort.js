import { shellSort } from '../shell-sort'

let array = [1,2,8,6,0,4,3,1,4];
console.log(array.join());
array = shellSort(array);
console.log(array.join());
