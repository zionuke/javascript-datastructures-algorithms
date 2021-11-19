// 作为枚举器标记顶点
const Colors = {
  WHITE: 0, // 白色：表示该顶点还没有被访问
  GREY: 1, // 灰色：表示该顶点被访问过，但并未被探索过
  BLACK: 2 // 黑色：表示该顶点被访问过且被完全探索过
}

// 用于生成辅助对象来帮助存储顶点是否被访问过
const initializeColor = vertices => {
  const color = {}
  // 初始化，所有的顶点会被标记为未访问（白色）
  for (let i = 0; i < vertices.length; i++){
    color[vertices[i]] = Colors.WHITE
  }
  return color
}

export const depthFirstSearch = (graph, callback) => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)

  // 对于图实例中每一个未被访问过的顶点，调用私有的递归函数depthFirstSearchVisit
  for (let i = 0; i < vertices.length; i++){
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback)
    }
  }
}

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  // 访问顶点u时，标注其为被发现的（灰色）
  color[u] = Colors.GREY
  // 有callback函数，则执行该函数输出已访问过的顶点
  if (callback) {
    callback(u)
  }
  // console.log('Discovered ' + u)
  const neighbors = adjList.get(u)
  // 对于顶点u的每一个未被访问过（颜色为白色）的邻点w，调用depthFirstSearchVisit函数，传递w和其他参数（添加顶点w入栈，这样接下来就能访问它）
  for (let i = 0; i < neighbors.length; i++){
    const w = neighbors[i]
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback)
    }
  }
  // 在该顶点和邻点按深度访问之后回退，即该顶点已被完全探索，并将其标注为黑色
  color[u] = Colors.BLACK
  // console.log('explored ' + u)
}

// 对于给定的图G，深度优先搜索遍历图G的所有节点，构建“森林”（有根树的一个集合）以及一组源顶点（根），并输出两个数组：发现时间和完成探索时间
export const DFS = graph => {
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  const color = initializeColor(vertices)
  // 顶点u的发现时间d[u]
  const d = {}
  // 当顶点u被标注为黑色时，u的完成探索时间f[u]
  const f = {}
  // 顶点u的前溯点p[u]
  const p = {}
  // 次数统计在这个算法执行过程中是全局使用的，所以需要将参数以对象传递，而不是原始值
  const time = { count: 0 }
  // 初始化相应对象
  for (let i = 0; i < vertices.length; i++) {
    f[vertices[i]] = 0
    d[vertices[i]] = 0
    p[vertices[i]] = null
  }
  for (let i = 0; i < vertices.length; i++) {
    if (color[vertices[i]] === Colors.WHITE) {
      DFSVisit(vertices[i], color, d, f, p, time, adjList)
    }
  }
  return {
    discovery: d,
    finished: f,
    predecessors: p
  }
}

const DFSVisit = (u, color, d, f, p, time, adjList) => {
  // console.log('discovered ' + u)
  color[u] = Colors.GREY
  // 当一个顶点第一次被发现时，追踪其发现时间
  d[u] = ++time.count
  const neighbors = adjList.get(u)
  for (let i = 0; i < neighbors.length; i++) {
    const w = neighbors[i]
    if (color[w] === Colors.WHITE) {
      // 当顶点w是由引自顶点u的边而被发现的，它的前溯点即为u
      p[w] = u
      DFSVisit(w, color, d, f, p, time, adjList)
    }
  }
  color[u] = Colors.BLACK
  // 当这个顶点被完全探索后，追踪其完成时间
  f[u] = ++time.count
  // console.log('explored ' + u)
}


