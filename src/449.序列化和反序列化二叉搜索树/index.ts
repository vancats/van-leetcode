import { TreeNode } from './../../utils/TreeNode'

export function serialize(root: TreeNode | null): string {
  return `${getFirst(root).join(',')}&${getMid(root).join(',')}`
}

export function deserialize(data: string): TreeNode | null {
  const arr = data.split('&')
  const preorder = arr[0].split(',')
  const inorder = arr[1].split(',')
  if (preorder[0] === '')
    return null
  return buildTree(preorder, inorder)
}

// 先序遍历
function getFirst(root: TreeNode | null, ans: number[] = []): number[] {
  if (!root)
    return []
  ans.push(root.val)
  root.left && getFirst(root.left, ans)
  root.right && getFirst(root.right, ans)
  return ans
}

// 中序遍历
function getMid(root: TreeNode | null, ans: number[] = []): number[] {
  if (!root)
    return []
  root.left && getMid(root.left, ans)
  ans.push(root.val)
  root.right && getMid(root.right, ans)
  return ans
}

// 从先序和中序遍历树
function buildTree(preorder: string[], inorder: string[]): TreeNode | null {
  if (!preorder.length) return null
  let i = 0
  for (; i < inorder.length; i++)
    if (preorder[0] === inorder[i]) break

  const leftPre: string[] = preorder.slice(1, i + 1)
  const rightPre: string[] = preorder.slice(i + 1)
  const leftIn: string[] = inorder.slice(0, i)
  const rightIn: string[] = inorder.slice(i + 1)

  const node = new TreeNode(Number(preorder[0]))
  node.left = buildTree(leftPre, leftIn)
  node.right = buildTree(rightPre, rightIn)

  return node
}
