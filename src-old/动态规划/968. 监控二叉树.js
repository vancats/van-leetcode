/*
 * @Author: Lqf
 * @Date: 2022-02-23 18:58:12
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-23 19:24:32
 * @Description: 我添加了修改
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const minCameraCover = function(root) {
  return dfs(root)[1]
}

// a 该节点放置摄像头，整颗树被覆盖
// b 不管该节点是否放置摄像头，整颗数被覆盖
// c 该节点的两颗子树被覆盖，不管整颗树是否被覆盖
// 所以可得
//  a = lc + rc + 1
//  b = Math.min(a, la + rb, lb + ra)
//  c = Math.min(a, lb + rb)
// 最终所得的 b 就是结果
function dfs(root) {
  if (!root)
    return [Math.floor(Number.MAX_SAFE_INTEGER / 2), 0, 0]
  const [la, lb, lc] = dfs(root.left)
  const [ra, rb, rc] = dfs(root.right)
  const a = lc + rc + 1
  const b = Math.min(a, la + rb, lb + ra)
  const c = Math.min(a, lb + rb)
  return [a, b, c]
}
