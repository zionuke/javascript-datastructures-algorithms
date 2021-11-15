// JavaScript调用栈大小的限制
// 每个浏览器都有自己的上限，可用以下代码测试。

let i = 0;
function recursiveFn() {
  i++;
  recursiveFn();
}

try {
  recursiveFn();
} catch (ex) {
  console.log('i = ' + i + ' error: ' + ex);
}
