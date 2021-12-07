# JavaScript 数据结构与算法

本书内容是根据哔哩哔哩 [《JavaScript 数据结构与算法》](https://www.bilibili.com/video/BV1x7411L7Q7?p=1) 视频与自己补充整理的学习笔记构成，视频教程讲的比较好，但用的是ES5语法，本书代码用ES6+实现，且用webpack搭建了代码测试环境，视频配合本仓库代码学习效果更佳，欢迎大家 Star 和 Fork，这是对作者最大的支持和鼓励。  

推荐大家按照目录顺序来学习，由浅入深，循序渐进，轻松搞定数据结构和算法。
- [本书地址](https://dragon-liu.github.io/javascript-datastructures-algorithms/)


> 重点要掌握数据结构与算法的思想和原理，使用哪种编程语言区别不大。

> 本仓库在XPoet的[仓库](https://github.com/XPoet/js-data-structures-and-algorithms)基础上重构和补充代码完成

## 结构和内容

### 基础

- [前言](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/1.前言.html)

### 第一部分 数据结构

- [第1章 数组](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/2.数组.html)
- [第2章 栈](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/3.%E6%A0%88.html)
- [第3章 队列和双端队列](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/4.%E9%98%9F%E5%88%97.html)
- [第4章 优先队列](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/5.%E4%BC%98%E5%85%88%E9%98%9F%E5%88%97.html)
- [第5章 单向链表](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/6.%E5%8D%95%E5%90%91%E9%93%BE%E8%A1%A8.html)
- [第6章 双向链表](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/7.%E5%8F%8C%E5%90%91%E9%93%BE%E8%A1%A8.html)
- [第7章 循环链表，有序链表和栈链表](assets/doc/.md)
- [第8章 集合](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/9.%E9%9B%86%E5%90%88.html)
- [第9章 字典](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/10.%E5%AD%97%E5%85%B8.html)
- [第10章 哈希表](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/11.%E5%93%88%E5%B8%8C%E8%A1%A8.html)
- [第11章 递归](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/12.%E9%80%92%E5%BD%92.html)
- [第12章 树](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/13.%E6%A0%91.html)
- [第13章 二叉树](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/14.%E4%BA%8C%E5%8F%89%E6%A0%91.html)
- [第14章 二叉搜索树](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/15.%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html)
- [第15章 自平衡树](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/16.%E8%87%AA%E5%B9%B3%E8%A1%A1%E6%A0%91.html)
- [第16章 二叉堆](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/17.%E4%BA%8C%E5%8F%89%E5%A0%86.html)
- [第17章 图](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/18.%E5%9B%BE.html)

### 第二部分 算法

- [第18章 排序算法](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/19%E6%8E%92%E5%BA%8F%E7%AE%97%E6%B3%95.html)
- [第19章 搜索算法](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/20%E6%90%9C%E7%B4%A2%E7%AE%97%E6%B3%95.html)
- [第20章 随机算法](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/21%E9%9A%8F%E6%9C%BA%E7%AE%97%E6%B3%95.html)
- [第21章 分而治之](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/22%E5%88%86%E8%80%8C%E6%B2%BB%E4%B9%8B.html)
- [第22章 动态规划](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/23%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html)
- [第23章 贪心算法](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/24%E8%B4%AA%E5%BF%83%E7%AE%97%E6%B3%95.html)
- [第24章 回溯算法](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/25%E5%9B%9E%E6%BA%AF%E7%AE%97%E6%B3%95.html)
- [第25章 算法复杂度](https://dragon-liu.github.io/javascript-datastructures-algorithms/md/26%E7%AE%97%E6%B3%95%E5%A4%8D%E6%9D%82%E5%BA%A6.html)
## 测试环境

### 安装依赖
```bash
npm install
```

### 启动服务
```bash
npm run start
```

开启**测试环境**的服务后，可在 `src/index.js` 选择要测试的代码，查看具体值输出。
比如：我要测试**栈**，把 `// import './data-structures/Stack'` 的注释去掉，要测试哪个就去掉哪个的注释。

```js
// 导入栈结构的封装及测试代码
// import './data-structures/Stack'

// 导入队列结构的封装及测试代码
// import './data-structures/Queue'

// 导入优先队列结构的封装及测试代码
// import './data-structures/PriorityQueue'

// 导入单向链表结构的封装及测试代码
// import './data-structures/LinkedList'

// 导入双向链表结构的封装及测试代码
// import './data-structures/DoublyLinkedList'

// 导入集合结构的封装及测试代码
// import './data-structures/Set'

// 导入字典结构的封装及测试代码
// import './data-structures/Map'

// 导入哈希表结构的封装及测试代码
// import './data-structures/HashTable'

// 导入递归的封装及测试代码
// import './data-structures/Recursion'

// 导入树结构的封装及测试代码
// import './data-structures/Tree'

// 导入二叉堆结构的封装及测试代码
// import './data-structures/Heap'

// 导入图结构的封装及测试代码
// import './data-structures/Graph'

// 导入排序算法的封装及测试代码
// import './algorithms/sorting'

// 导入搜索算法的封装及测试代码
// import './algorithms/search'

// 导入随机算法的封装及测试代码
// import './algorithms/shuffle'

// 导入贪心算法的封装及测试代码
// import './algorithms/greedy'

// 导入回溯算法的封装及测试代码
// import './algorithms/backtracking'
```

## 版权许可

本书采用“保持署名—非商用”创意共享 4.0 许可证。只要保持原作者署名和非商用，您可以自由地阅读、分享、修改本书。  
详细的法律条文请参见[创意共享](http://creativecommons.org/licenses/by-nc/4.0/)网站。  
