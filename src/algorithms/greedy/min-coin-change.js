// 最小硬币找零问题(用贪心算法解决)
export function minCoinChange(coins, amount) {
  // 初始化找零结果数组change和当前找零总额total
  const change = []
  let total = 0
  // 遍历零钱面额数组
  // 从最大面额的硬币开始，拿尽可能多的这种硬币找零。当无法再拿更多这种价值的硬币时，开始拿第二大价值的硬币，依次继续
  for (let i = coins.length - 1; i >= 0; i--){
    const coin = coins[i]
    while (total + coin <= amount) {
      change.push(coin)
      total += coin
    }
  }
  return change
}

// 测试代码
console.log(minCoinChange([1, 5, 10], 15)); // [10, 5]
console.log(minCoinChange([1, 3, 4], 6)); // [4, 1, 1]
