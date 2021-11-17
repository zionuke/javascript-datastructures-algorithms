import Dictionary from '../Map/map'

export default class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected //表示图是否有向，默认情况下无向
    this.vertices = [] // 用数组存储顶点的名字
    this.adjList = new Dictionary() //用字典来存储邻接表
  }

  // 添加顶点
  addVertex(v) {
    // 顶点不存在于图中时才添加
    if (!this.vertices.includes(v)) {
      // 将顶点添加到顶点列表中
      this.vertices.push(v)
      // 在邻接表中，设置顶点v作为键，对应的字典值为一个空数组
      this.adjList.set(v, [])
    }
  }


}
