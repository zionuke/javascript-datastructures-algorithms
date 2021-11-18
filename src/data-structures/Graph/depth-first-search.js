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

  for (let i = 0; i < vertices.length; i++){
    if (color[vertices[i]] === Colors.WHITE) {
      depthFirstSearchVisit(vertices[i], color, adjList, callback)
    }
  }
}

const depthFirstSearchVisit = (u, color, adjList, callback) => {
  color[u] = Colors.GREY
  if (callback) {
    callback(u)
  }
  // console.log('Discovered ' + u)
  const neighbors = adjList.get(u)
  for (let i = 0; i < neighbors.length; i++){
    const w = neighbors[i]
    if (color[w] === Colors.WHITE) {
      depthFirstSearchVisit(w, color, adjList, callback)
    }
  }
  color[u] = Colors.BLACK
  // console.log('explored ' + u)
}




