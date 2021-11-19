const INF = Number.MAX_SAFE_INTEGER;

// 防止MST出现环路
const find = (i, parent) => {
  while (parent[i]) {
    i = parent[i]; // eslint-disable-line prefer-destructuring
  }
  return i;
};

// 判断u和v是否是不同的边
const union = (i, j, parent) => {
  if (i !== j) {
    parent[j] = i;
    return true;
  }
  return false;
};

// 把邻接矩阵的值复制到cost数组
const initializeCost = graph => {
  const cost = [];
  const { length } = graph;
  for (let i = 0; i < length; i++) {
    cost[i] = [];
    for (let j = 0; j < length; j++) {
      if (graph[i][j] === 0) {
        cost[i][j] = INF;
      } else {
        cost[i][j] = graph[i][j];
      }
    }
  }
  return cost;
};

// Kruskal算法，一种求加权无向连通图的MST的贪心算法
export const kruskal = graph => {
  const { length } = graph;
  const parent = [];
  let ne = 0;
  let a;
  let b;
  let u;
  let v;
  // 把邻接矩阵的值复制到cost数组，以方便修改且可以保留原始值行
  const cost = initializeCost(graph);
  // 当MST的边数小于顶点总数减1时
  while (ne < length - 1) {
    // 找出权值最小的边
    for (let i = 0, min = INF; i < length; i++) {
      for (let j = 0; j < length; j++) {
        if (cost[i][j] < min) {
          min = cost[i][j];
          a = u = i;
          b = v = j;
        }
      }
    }
    // 检查MST中是否已存在这条边，以避免环路
    u = find(u, parent);
    v = find(v, parent);
    // 如果u和v是不同的边，则将其加入MST
    if (union(u, v, parent)) {
      ne++;
    }
    // 从列表中移除这些边，以免重复计算
    cost[a][b] = cost[b][a] = INF;
  }
  // 返回MST
  return parent;
};
