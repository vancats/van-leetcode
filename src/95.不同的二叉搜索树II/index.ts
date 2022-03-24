import { TreeNode } from "../../utils/TreeNode"

/**
 * @description: Annotation
 * @return {*}
 * @param {number} n
 */
export function generateTrees(n: number): Array<TreeNode | null> {
  if (n === 0) return []
  return dfs(1, n)
};

function dfs(left: number, right: number): Array<TreeNode | null> {
  if (left > right) return [null]
  let ans: Array<TreeNode | null> = []
  // 递归得出所有节点
  for (let i = left; i <= right; i++) {
    // 分别得出左右节点的值
    let leftTree = dfs(left, i - 1)
    let rightTree = dfs(i + 1, right)
    for (let l of leftTree) {
      for (let r of rightTree) {
        ans.push(new TreeNode(i, l, r))
      }
    }
  }
  return ans
}