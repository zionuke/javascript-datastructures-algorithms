/**
* 分数背包问题(贪心算法)
* @param capacity 背包容量
* @param weights 物品重量数组
* @param values 物品价值数组
*/
export function knapSack(capacity, weights, values) {
  const n = values.length;
  let load = 0;
  let val = 0;
  // 当物品未遍历完或背包物品重量未超过容量，迭代物品
  for (let i = 0; i < n && load < capacity; i++) {
    // 若物品可以完整装入背包，就将其价值和重量分别计入背包已装入物品的总价值（val）和总重量
    if (weights[i] <= capacity - load) {
      val += values[i];
      load += weights[i];
      // console.log('using item ' + (i + 1) + ' for the solution');
    // 如果物品不能完整地装入背包，计算能够装入部分的比例r
    } else {
      const r = (capacity - load) / weights[i];
      val += r * values[i];
      // 这里load本来应该加上r*weights[i]，但实际效果一样，均导致退出循环
      load += weights[i];
      // console.log('using ratio of ' + r + ' for item ' + (i + 1) + ' for the solution');
    }
  }
  return val;
}

// 测试代码
const values = [3,4,5];
const weights = [2,3,4];
const capacity = 5;

console.log(knapSack(capacity, weights, values)); // 7
