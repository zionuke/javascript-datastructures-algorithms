import Graph from '../graph'
import Stack from '../../Stack/stack'
import { breadthFirstSearch, BFS } from '../algorithms/breadth-first-search'

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
/*
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

console.log('********* shortest path - BFS ***********');
const shortestPathA = BFS(graph, myVertices[0]);
console.log(shortestPathA.distances);
console.log(shortestPathA.predecessors);

// 通过前溯点数组，可以用下面这段代码来构建从顶点A到其他顶点的最短路径（衡量标准是边的数量）
// 用顶点A作为源顶点
const fromVertex = myVertices[0]
// 对于每个其他顶点（除了顶点A），计算顶点A到它的路径
for (let i = 1; i < myVertices.length; i++) {
  // 从myVertices数组得到值，然后创建一个栈来存储路径值
  const toVertex = myVertices[i]
  const path = new Stack()
  // 追溯toVertex到fromVertex的路径。变量v被赋值为其前溯点的值，这样我们能够反向追溯这条路径
  for (let v = toVertex; v !== fromVertex; v = shortestPathA.predecessors[v]) {
    // 将变量v添加到栈中
    path.push(v)
  }
  // 源顶点添加到栈中
  path.push(fromVertex)
  // 创建一个s字符串，并将源顶点赋值给它（它是最后一个加入栈中的，所以是第一个被弹出的项)
  let s = path.pop()
  // 当栈非空时，从栈中移出一个项并将其拼接到字符串s的后面
  while (!path.isEmpty()) {
    s += ' - ' + path.pop()
  }
  console.log(s)
}
