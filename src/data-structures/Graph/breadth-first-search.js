import Queue from '../Queue/queue'

// 作为枚举器标记顶点
const Colors = {
  WHITE: 0,
  GREY: 1,
  BLACK: 2
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

// 广度优先搜索算法
export const breadthFirstSearch = (graph, startVertex, callback) => {
  // 取得图对应顶点和邻接表
  const vertices = graph.getVertices()
  const adjList = graph.getAdjList()
  // 用initializeColor函数来将color对象所有顶点初始化为白色
  const color = initializeColor(vertices)
  // 创建一个Queue实例，它将会存储待访问和待探索的顶点
  const queue = new Queue()
  // 将起始顶点入队列
  queue.enqueue(startVertex)
  // 如果队列非空，并
  while (!queue.isEmpty()) {
    // 通过出队列操作从队列中移除一个顶点
    const u = queue.dequeue()
    // 取得一个包含其所有邻点的邻接表数组
    const neighbors = adjList.get(u)
    // 将该顶点标注为灰色，表示我们发现了它（但还未完成对其的探索）
    color[u] = Colors.GREY
    // 对于u的每个邻点
    for (let i = 0; i < neighbors.length; i++){
      // 取得其值（该顶点的名字）
      const w = neighbors[i]
      // 如果它还未被访问过（颜色为白色），则将其标注为我们已经发现了它（颜色设置为灰色），并将这个顶点加入队列
      if (color[w] === Colors.WHITE) {
        color[w] = Colors.GREY
        queue.enqueue(w)
      }
    }
    // 标注u为已被探索的（黑色）
    color[u] = Colors.BLACK
    // 如果传递了回调函数，就使用回调函数
    if (callback) {
      callback(u)
    }
  }
}


