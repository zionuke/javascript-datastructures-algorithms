const INF = Number.MAX_SAFE_INTEGER

// 计算顶点间的minDistance，搜索dist数组中的最小值，返回它在数组中的索引
const minDistance = (dist, visited) => {
  let min = INF
  let minIndex = -1
  // 从尚未处理的顶点中选出距离最近的顶点
  for (let v = 0; v < dist.length; v++){
    if (visited[v] === false && dist[v] <= min) {
      min = dist[v]
      minIndex = v
    }
  }
  return minIndex
}

// 迪杰斯特拉算法,计算从单个源到所有其他源的最短路径的贪心算法
export const dijkstra = (graph, src) => {
  const dist = []
  const visited = []
  const { length } = graph
  // 把所有距离(dist)初始化为无限大，visited[]初始化为false
  for (let i = 0; i < length; i++){
    dist[i] = INF
    visited[i] = false
  }
  // 把源顶点到自己的距离设为0
  dist[src] = 0
  // 找出到其余顶点的最短路径
  for (let i = 0; i < length - 1; i++){
    // 从尚未处理的顶点中选出距离最近的顶点
    const u = minDistance(dist, visited)
    // 把选出的顶点标为visited，以免重复计算
    visited[u] = true
    // 如果找到更短的路径，则更新最短路径的值
    for (let v = 0; v < length; v++) {
      if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
        dist[v] = dist[u] + graph[u][v]
      }
    }
  }
  // 处理完所有顶点后，返回从源顶点（src）到图中其他顶点最短路径的结果
  return dist
}
