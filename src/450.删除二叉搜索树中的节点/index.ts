import type { TreeNode } from '../../utils/TreeNode'

/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(1)
 * @return {*}
 * @param {TreeNode} root
 * @param {number} key
 */
export function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root)
    return root
  if (root.val === key) {
    // 叶子节点直接删除
    if (!root.left && !root.right) {
      root = null
    }
    else if (root.left) {
      // 找到左子树的最大值
      let temp = root.left
      while (temp.right)
        temp = temp.right

      // 替换值
      root.val = temp.val
      // 删除的值需要继续向下递归
      root.left = deleteNode(root.left, temp.val)
    }
    else if (root.right) {
      // 找到右子树的最小值
      let temp = root.right
      while (temp.left)
        temp = temp.left

      // 替换值
      root.val = temp.val
      // 删除的值需要继续向下递归
      root.right = deleteNode(root.right, temp.val)
    }
  }
  else if (root.val < key) {
    root.right = deleteNode(root.right, key)
  }
  else {
    root.left = deleteNode(root.left, key)
  }
  return root
}
