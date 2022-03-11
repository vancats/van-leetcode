
/**
 * @description: 空间复杂度 O(N) 时间复杂度 O(N)
 * @return {*}
 * @param {number} parents
 */
export function countHighestScoreNodes(parents: number[]): number {
  const arr: number[][] = new Array(parents.length).fill(0).map(i => new Array())
  // 储存每个节点对应子节点的数组
  for (let i = 0; i < parents.length; i++) {
    if (parents[i] > -1) arr[parents[i]].push(i)
  }

  // 储存以每个节点为根节点的树的节点数量的数组
  const size: number[] = new Array(parents.length).fill(0)
  let dfs = (root: number): number => {
    let temp: number = 1
    for (let node of arr[root]) {
      temp += dfs(node)
    }
    size[root] = temp
    return temp
  }
  dfs(0)

  // 遍历所有节点，计算可得最大数
  let maxNum: number = -Infinity, cnt: number = 0
  for (let i = 0; i < parents.length; i++) {
    // 题意可得，每个节点的分数为 左子节点数量 * 右子节点数量 * (整棵树总节点数 - 当前节点的总节点树)
    let rest: number = (size[0] - size[i]) || 1
    let left: number = arr[i].length > 0 ? size[arr[i][0]] : 1
    let right: number = arr[i].length > 1 ? size[arr[i][1]] : 1
    let total: number = rest * left * right
    if (total > maxNum) {
      maxNum = total
      cnt = 1
    } else if (total === maxNum) {
      cnt++
    }
  }
  return cnt
}
