import { floydWarshall } from '../algorithms/floyd-warshall'

const INF = Infinity;
const graph = [
  [INF, 2, 4, INF, INF, INF],
  [INF, INF, 2, 4, 2, INF],
  [INF, INF, INF, INF, 3, INF],
  [INF, INF, INF, INF, INF, 2],
  [INF, INF, INF, 3, INF, 2],
  [INF, INF, INF, INF, INF, INF]
];

console.log('********* Floyd-Warshall Algorithm - All-Pairs Shortest Path ***********');

const dist = floydWarshall(graph);

let s = '';
for (let i = 0; i < dist.length; ++i) {
  s = '';
  for (var j = 0; j < dist.length; ++j) {
    if (dist[i][j] === INF) s += 'INF ';
    else s += dist[i][j] + '   ';
  }
  console.log(s);
}
