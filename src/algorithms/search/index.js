import { binarySearch } from './binary-search'
import {interpolationSearch} from './interpolation-search'

const array = [1,2,3,4,5,6,7,8,9,10];
const index = interpolationSearch(array, 4);
console.log(index);
