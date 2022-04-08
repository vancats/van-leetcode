/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {Node} root
 */
export function levelOrder(root: Node | null): number[][] {
  if (!root) return []
  let stack: Node[] = [root], res: number[][] = []
  while (stack.length) {
    let cnt = stack.length
    let temp: any = []
    for (let i = 0; i < cnt; i++) {
      const root: any = stack.shift()
      temp.push(root.val)
      for (let j = 0; root.children && j < root.children.length; j++) {
        stack.push(root.children[j])
      }
    }
    res.push(temp)
  }
  return res
};
