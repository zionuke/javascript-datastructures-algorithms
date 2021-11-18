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




