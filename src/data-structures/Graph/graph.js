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

  // 添加边,接收两个顶点作为参数
  addEdge(v, w) {
    // 如果顶点v或w不存在于图中，要将它们加入顶点列表
    if (!this.adjList.get(v)) {
      this.addVertex(v)
    }
    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }
    // 将w加入到v的邻接表中，即添加了一条自顶点v到顶点w的边
    this.adjList.get(v).push(w)
    // 无向图，所以需要添加一条自w到v的边
    if (!this.isDirected) {
      this.adjList.get(w).push(v)
    }
  }

  // 返回顶点列表
  getVertices() {
    return this.vertices
  }

  // 返回邻接表
  getAdjList() {
    return this.adjList
  }

  // 方便在控制台输出图
  toString() {
    let s = ''
    // 迭代vertices数组列表将顶点名字加入字符串
    for (let i = 0; i < this.vertices.length; i++) {
      s += `${this.vertices[i]} -> `
      // 取得该顶点邻接表将相邻顶点加入字符串
      const neighbors = this.adjList.get(this.vertices[i])
      for (let j = 0; j < neighbors.length; j++) {
        s += `${neighbors[j]} `
      }
      // 邻接表迭代完成后换行
      s += '\n'
    }
    return s
  }
}
