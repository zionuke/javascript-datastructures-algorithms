import { PriorityQueue } from './priorityQueue';

// ---------------- 封装的优先队列结构测试 ---------------- //
console.log('// ----- 优先队列结构测试 START -----//');

const priorityQueue = new PriorityQueue();

// 入队 enqueue() 测试
priorityQueue.enqueue('A', 10);
priorityQueue.enqueue('B', 15);
priorityQueue.enqueue('C', 11);
priorityQueue.enqueue('D', 20);
priorityQueue.enqueue('E', 18);
console.log(priorityQueue.toString());
//--> output:
// A-10 C-11 B-15 E-18 D-20


// 出队 dequeue() 测试
priorityQueue.dequeue();
priorityQueue.dequeue();
console.log(priorityQueue.toString());
//--> output:
// B-15 E-18 D-20

// isEmpty() 测试
console.log(priorityQueue.isEmpty()); //--> false

// size() 测试
console.log(priorityQueue.size()); //--> 3

// toString() 测试
console.log(priorityQueue.toString()); //--> B-15 E-18 D-20

console.log('// ----- 优先队列结构测试 END -----//');


