/**
 * @description: 时间复制度 O(MN) 空间复杂度 O(1)
 * @return {*}
 * @param {string} strs
 */
export function minDeletionSize(strs: string[]): number {
  let cnt = 0
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i].charCodeAt(0) < strs[j - 1][i].charCodeAt(0)) {
        console.log(strs[j][i], strs[j][i - 1])
        cnt++
        break
      }
    }
  }
  return cnt
}
