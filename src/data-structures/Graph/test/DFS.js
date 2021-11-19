import Graph from '../graph'
import { depthFirstSearch, DFS } from '../algorithms/depth-first-search'

// 有向图
let graph = new Graph(true);

let myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];

for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('C', 'D');
graph.addEdge('C', 'G');
graph.addEdge('D', 'G');
graph.addEdge('D', 'H');
graph.addEdge('B', 'E');
graph.addEdge('B', 'F');
graph.addEdge('E', 'I');

console.log('********* printing graph ***********');

console.log(graph.toString());

console.log('********* dfs with callback ***********');

const printVertex = value => console.log('Visited vertex: ' + value);

depthFirstSearch(graph, printVertex);

console.log('********* topological sort - DFS ***********');

graph = new Graph(true); // 有向图

myVertices = ['A', 'B', 'C', 'D', 'E', 'F'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
graph.addEdge('A', 'C');
graph.addEdge('A', 'D');
graph.addEdge('B', 'D');
graph.addEdge('B', 'E');
graph.addEdge('C', 'F');
graph.addEdge('F', 'E');

// 执行改进版本的深度优先搜索算法，并将结果保存到result变量
const result = DFS(graph);
console.log('discovery', result.discovery);
console.log('finished', result.finished);
console.log('predecessors', result.predecessors);


const fTimes = result.finished;
let s = '';
// 倒序输出完成时间数组，以得出该图的拓扑排序
for (let count = 0; count < myVertices.length; count++) {
  let max = 0;
  let maxName = null;
  // 遍历找出完成时间最晚的顶点
  for (let i = 0; i < myVertices.length; i++) {
    if (fTimes[myVertices[i]] > max) {
      max = fTimes[myVertices[i]];
      maxName = myVertices[i];
    }
  }
  s += ' - ' + maxName;
  delete fTimes[maxName];
}
console.log(s);
