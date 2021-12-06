// 判断某位置是否空闲
function isSafe(maze, x, y) {
  const n = maze.length
  // 位置合法且空闲
  if (x >= 0 && y >= 0 && x < n && y < n && maze[x][y] !== 0) {
    return true
  }
  return false
}

// 从位置x和y开始在给定的maze矩阵中找到一个解，递归使得算法具有回溯能力
function findPath(maze, x, y, solution) {
  const n = maze.length
  // 验证老鼠是否到达了终点
  // 如果到了，就将最后一个位置标记为路径的一部分并返回true，表示移动成功结束
  if (x === n - 1 && y === n - 1) {
    solution[x][y] = 1
    return true
  }
  // 如果不是最后一步，要验证老鼠能否安全移动至该位置
  if (isSafe(maze, x, y) === true) {
    // 如果是安全的，我们将这步加入路径
    solution[x][y] = 1
    // 试着在maze矩阵中水平移动（向右）到下一个位置
    // 判断能否从右边的位置找出一个解，可以则返回true
    if (findPath(maze, x + 1, y, solution)) {
      return true
    }
    // 如果水平移动不可行，就试着垂直向下移动到下一个位置
    if (findPath(maze, x, y + 1, solution)) {
      return true
    }
    // 如果水平和垂直都不能移动，那么将这步从路径中移除并回溯,表示无法从位置x和y开始找到一个解
    solution[x][y] = 0
    return false
  }
  // 尝试所有可能动作仍找不到解，返回false表示无解
  return false
}

/**
* 迷宫老鼠问题(回溯算法)
* @param maze 迷宫矩阵
*/
export function ratInAMaze(maze) {
  // 创建包含解的矩阵
  const solution = []
  // 将矩阵每个位置初始化为零
  for (let i = 0; i < maze.length; i++){
    solution[i] = []
    for (let j = 0; j < maze[i].length; j++){
      solution[i][j] = 0
    }
  }
  // 如果算法能找到一个解，返回解决矩阵
  if (findPath(maze, 0, 0, solution) === true) {
    return solution
  }
  // 否则返回一条错误信息
  return 'NO PATH FOUND'
}
