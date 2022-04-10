/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N)
 * @return {*}
 * @param {string} s
 */
export function longestNiceSubstring(s: string): string {
  const res: string[] = []; let arr
  for (let i = 0; i < s.length; i++) {
    arr = new Array(26).fill(0)
    // 标记当前的位置
    arr[getCodeNum(s[i])] = s[i]
    for (let j = i + 1; j < s.length; j++) {
      // 当前值未放入，则放入
      if (arr[getCodeNum(s[j])] === 0) {
        arr[getCodeNum(s[j])] = s[j]
      }
      else {
        // 如果编码相同值不同，则大小写都具有，置空
        if (arr[getCodeNum(s[j])] !== s[j])
          arr[getCodeNum(s[j])] = undefined

        // 非空则放入
        if (isEmpty(arr))
          res.push(s.slice(i, j + 1))
      }
    }
  }
  res.sort((a, b) => b.length - a.length)
  return res[0] || ''
}

// 获取code码。大小写同码
function getCodeNum(c) {
  let code = c.charCodeAt() - 65
  if (code > 25)
    code -= 32
  return code
}

// 判断数组中是否存在实际数据
function isEmpty(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i])
      return false
  }

  return true
}
