/**
 * @param {number} n
 * @return {number}
 */
// i是前面已存在的长度 copyLen是已复制的长度，res是已操作的次数
var minSteps = function(n, i = 1, copyLen = 1, res = 1) {
  if (n === 1)
    return 0
  // 剩余未复制长度
  const rest = n - i
  // 递归结束条件
  if (rest === copyLen)
    return res + 1

  // 该分支不满足返回条件，取最大值便于后续剔除
  if (rest < copyLen)
    return Number.MAX_SAFE_INTEGER

  // 设置初始值
  let ans = Number.MAX_SAFE_INTEGER
  if (rest > copyLen) {
    // 如果此次复制，剩下长度不满足再复制两次，所以只能粘贴。因为必有正确值，所以直接赋值即可
    if (rest < 2 * i) {
      ans = minSteps(n, i + copyLen, copyLen, res + 1)
    }
    else {
      // 已复制过，第二次必是粘贴，直接跳过
      if (i !== copyLen)
        ans = Math.min(minSteps(n, i, i, res + 1), ans)

      // 粘贴操作
      ans = Math.min(minSteps(n, i + copyLen, copyLen, res + 1), ans)
    }
  }
  return ans
}
