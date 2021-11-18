import { MinHeap, MaxHeap } from './heap'

console.log('// ----- 最小堆结构测试 START -----//');
let heap = new MinHeap();

heap.insert(2);
heap.insert(3);
heap.insert(4);
heap.insert(5);

heap.insert(2);

console.log(heap.getAsArray());

console.log('Heap size: ', heap.size()); // 5
console.log('Heap is empty: ', heap.isEmpty()); // false
console.log('Heap min value: ', heap.findMinimum()); // 1

heap = new MinHeap();
for (let i = 1; i < 10; i++) {
  heap.insert(i);
}

console.log(heap.getAsArray());

console.log('Extract minimum: ', heap.extract()); // 1
console.log(heap.getAsArray()); // [2, 4, 3, 8, 5, 6, 7, 9]
console.log('// ----- 最小堆结构测试 END -----//');

console.log('// ----- 最大堆结构测试 START -----//');
const maxHeap = new MaxHeap();

maxHeap.insert(2);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(5);

maxHeap.insert(1);

console.log(maxHeap.getAsArray());

console.log('Heap size: ', maxHeap.size()); // 5
console.log('Heap is empty: ', maxHeap.isEmpty()); // false
console.log('Heap max value: ', maxHeap.findMinimum()); // 5

maxHeap.insert(6);
maxHeap.insert(9);
maxHeap.insert(10);
maxHeap.insert(14);

console.log(maxHeap.getAsArray());

console.log('Extract maximum: ', maxHeap.extract());
console.log(maxHeap.getAsArray());
console.log('// ----- 最大堆结构测试 END -----//');
