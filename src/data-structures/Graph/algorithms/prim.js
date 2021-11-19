const INF = Number.MAX_SAFE_INTEGER;

// 与Dijkstra算法中使用的minDistance函数一样，只是名字不同
const minKey = (graph, key, visited) => {
  // Initialize min value
  let min = INF;
  let minIndex = 0;
  for (let v = 0; v < graph.length; v++) {
    if (visited[v] === false && key[v] < min) {
      min = key[v];
      minIndex = v;
    }
  }
  return minIndex;
};

// Prim算法,求解加权无向连通图的MST(最小生成树)问题的贪心算法
export const prim = graph => {
  const parent = [];
  const key = [];
  const visited = [];
  const { length } = graph;
  // 把所有顶点(key)初始化为无限大，visited[]初始化为false
  for (let i = 0; i < length; i++) {
    key[i] = INF;
    visited[i] = false;
  }
  // 选择第一个key作为第一个顶点
  key[0] = 0;
  // 第一个顶点总是MST的根节点
  parent[0] = -1;
  // 对所有顶点求MST
  for (let i = 0; i < length - 1; i++) {
    // 从未处理的顶点集合中选出key值最小的顶点
    const u = minKey(graph, key, visited);
    // 把选出的顶点标为visited，以免重复计算
    visited[u] = true;
    // 如果得到更小的权值，则保存MST路径并更新其权值
    for (let v = 0; v < length; v++) {
      if (graph[u][v] && !visited[v] && graph[u][v] < key[v]) {
        parent[v] = u;
        key[v] = graph[u][v];
      }
    }
  }
  // 处理完所有顶点，返回包含MST的结果
  return parent;
};
