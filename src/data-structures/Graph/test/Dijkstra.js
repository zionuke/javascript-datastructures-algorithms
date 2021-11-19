import {dijkstra} from '../algorithms/dijkstra'

const graph = [
  [0, 2, 4, 0, 0, 0],
  [0, 0, 2, 4, 2, 0],
  [0, 0, 0, 0, 3, 0],
  [0, 0, 0, 0, 0, 2],
  [0, 0, 0, 3, 0, 2],
  [0, 0, 0, 0, 0, 0]
];

console.log("********* Dijkstra's Algorithm - Shortest Path ***********");

const dist = dijkstra(graph, 0);

for (let i = 0; i < dist.length; i++){
    console.log(i + '\t\t' + dist[i]);
}
