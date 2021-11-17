import Dictionary from '../Map/map'

export default class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected //表示图是否有向，默认情况下无向
    this.vertices = [] // 用数组存储顶点的名字
    this.adjList = new Dictionary() //用字典来存储邻接表
  }
}
