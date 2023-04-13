import { DoublyLinkedList } from './doublyLinkedList';

// ---------------- 封装的双向链表结构测试 ---------------- //
console.log('// ----- 双向链表结构测试 START -----//');
const doublyLinkedList = new DoublyLinkedList();

// append() 测试
console.log('append() 测试');
doublyLinkedList.append('ZZ');
doublyLinkedList.append('XX');
doublyLinkedList.append('CC');
console.log(doublyLinkedList.toString()); //--> ZZ XX CC

// insert() 测试
console.log('insert() 测试');
doublyLinkedList.insert(0, '00');
doublyLinkedList.insert(2, '22');
console.log(doublyLinkedList.toString()); //--> 00 ZZ 22 XX CC

// getData() 测试
console.log('getData() 测试');
console.log(doublyLinkedList.getData(1)); //--> ZZ

// indexOf() 测试
console.log('indexOf() 测试');
console.log(doublyLinkedList.indexOf('XX')); //--> 3

// removeAt() 测试
console.log('removeAt() 测试');
doublyLinkedList.removeAt(0);
doublyLinkedList.removeAt(1);
console.log(doublyLinkedList.toString()); //--> ZZ XX CC

// update() 测试
console.log('update() 测试');
doublyLinkedList.update(0, '111111');
console.log(doublyLinkedList.toString()); //--> 111111 XX CC

// remove() 测试
console.log('remove() 测试');
console.log(doublyLinkedList.remove('111111'));
// console.log(doublyLinkedList.remove('XX'));
console.log(doublyLinkedList.toString()); //--> XX CC

// forwardToString() 测试
console.log('forwardToString() 测试');
console.log(doublyLinkedList.forwardToString()); //--> XX--CC--

// backwardString() 测试
console.log('backwardString() 测试');
console.log(doublyLinkedList.backwardString()); //--> CC--XX--

console.log('// ----- 双向链表结构测试 END -----//');


