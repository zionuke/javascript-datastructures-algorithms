// Floyd-Warshall算法,是一种计算图中所有最短路径的动态规划算法
export const floydWarshall = graph => {
  const dist = [];
  const { length } = graph;
  // 把distance数组初始化为每个顶点之间的权值
  for (let i = 0; i < length; i++) {
    dist[i] = [];
    for (let j = 0; j < length; j++) {
      if (i === j) {
        // 顶点到自身的距离为0
        dist[i][j] = 0;
      } else if (!isFinite(graph[i][j])) {
        // 如果两个顶点之间没有边，就将其表示为Infinity
        dist[i][j] = Infinity;
      } else {
        // 两个顶点之间有边,就初始化为顶点间权值
        dist[i][j] = graph[i][j];
      }
    }
  }
  // 将顶点0到k作为中间点，从i到j的最短路径经过k
  for (let k = 0; k < length; k++) {
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        // 计算通过顶点k的i和j之间的最短路径，是Floyd-Warshall算法的核心
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          // 如果一个最短路径的新的值被找到，使用并存储它
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }
  return dist;
};
