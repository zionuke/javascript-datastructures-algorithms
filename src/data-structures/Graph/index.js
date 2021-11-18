import Graph from './graph';
import {breadthFirstSearch} from './breadth-first-search'
// ---------------- 封装的图构测试 ---------------- //
console.log('// ----- 图结构测试 START -----//');


// 测试代码
const graph = new Graph()
// 添加顶点
const myVertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
for (let i = 0; i < myVertices.length; i++) {
  graph.addVertex(myVertices[i]);
}
// 添加边
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
// 输出图结构
console.log('********* printing graph ***********');

console.log(graph.toString());

console.log('********* bfs with callback ***********');

const printVertex = (value) => console.log('Visited vertex: ' + value);
breadthFirstSearch(graph, myVertices[0], printVertex);
/**
 *
 Visited vertex: A
 Visited vertex: B
 Visited vertex: C
 Visited vertex: D
 Visited vertex: E
 Visited vertex: F
 Visited vertex: G
 Visited vertex: H
 Visited vertex: I
 */

console.log('// ----- 图结构测试 END -----//');
