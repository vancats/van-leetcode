import type { TreeNode } from './../../utils/TreeNode'
import type { ListNode } from './../../utils/ListNode'
/**
 * @description: Annotation
 * @return {*}
 * @param {ListNode} head
 * @param {TreeNode} root
 */
export function isSubPath(head: ListNode | null, root: TreeNode | null): boolean {
  if (!root) return false
  return dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
}

function dfs(head: ListNode | null, root: TreeNode | null): boolean {
  if (!head) return true
  if (!root) return false
  if (head.val !== root.val)
    return false

  return dfs(head.next, root.left) || dfs(head.next, root.right)
}
