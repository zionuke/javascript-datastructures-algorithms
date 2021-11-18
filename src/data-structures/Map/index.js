import Map from './map';

// ---------------- 封装的字典结构测试 ---------------- //
console.log('// ----- 字典结构测试 START -----//');
const map = new Map();

// set() 测试
map.set('name', 'Jack');
map.set('age', 22);
map.set('email', '@hust.edu.cn');
console.log(map.items); // {items: {name: 'Jack', age: 22, email: '@hust.edu.cn'}}

// has() 测试
console.log(map.has('name')); //--> true
console.log(map.has('address')); //--> false

// remove() 测试
map.remove('name');
console.log(map.items); // {age: 22, email: "@hust.edu.cn"}

// get() 测试
console.log(map.get('age')); //--> 22

// keys() 测试
console.log(map.keys()); //--> ["age", "email"]

// values() 测试
console.log(map.values()); //--> [22, "@hust.edu.cn"]

// size() 测试
console.log(map.size()); //--> 2

console.log('// ----- 字典结构测试 END -----//');


