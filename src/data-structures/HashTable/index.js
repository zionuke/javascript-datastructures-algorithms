import HashTable from './hashTable';
// ---------------- 封装的哈希表结构测试 ---------------- //
console.log('// ----- 哈希表结构测试 START -----//');

const hashTable = new HashTable();

console.log('=== START 哈希函数测试 START === ');
console.log(hashTable.hashFn('Aethelwulf')); //--> 1
console.log(hashTable.hashFn('Jamie')); //--> 4
console.log('=== END 哈希函数测试 END === ');

// put() 添加测试
hashTable.put('Aethelwulf', 'aethelwulf@email.com');
hashTable.put('Jamie', 'jamie@email.com');
hashTable.put('Jack', 'jack@email.com');
hashTable.put('Nathan', 'nathan@email.com');
hashTable.put('Sue', 'sue@email.com');
console.log(hashTable.toString());
/**
 *哈希表存储数据
  0=>Jack,jack@email.com
  0=>Sue,sue@email.com
  1=>Aethelwulf,aethelwulf@email.com
  3=>Nathan,nathan@email.com
  4=>Jamie,jamie@email.com
 */

// put() 修改测试
hashTable.put('Sue', 'changed');
console.log(hashTable.get('Sue')); //--> changed

// get() 测试
console.log(hashTable.get('Jack')); //--> jack@email.com
console.log(hashTable.get('name')); //--> null

// remove() 测试
console.log(hashTable.remove('Nathan')); //--> ['Nathan', 'nathan@email.com']
console.log(hashTable.toString());
/**
 *哈希表存储数据
  0=>Jack,jack@email.com
  0=>Sue,changed
  1=>Aethelwulf,aethelwulf@email.com
  4=>Jamie,jamie@email.com
 */

console.log('// ----- 哈希表结构测试 END -----//');


