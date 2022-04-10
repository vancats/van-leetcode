/*
 * @Author: Lqf
 * @Date: 2022-03-06 10:46:45
 * @LastEditors: Lqf
 * @LastEditTime: 2022-03-06 10:59:18
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} security
 * @param {number} time
 * @return {number[]}
 */
var goodDaysToRobBank = function(security, time) {
  let arr = []; const ans = []
  if (!time) {
    for (let i = 0; i < security.length; i++)
      ans.push(i)

    return ans
  }
  for (let i = 0; i < security.length - time; i++) {
    if (!arr.length || arr.at(-1) < security[i]) {
      arr = [security[i]]
      continue
    }
    if (arr.length < time) {
      arr.push(security[i])
      continue
    }
    if (arr.at(-1) >= security[i]) {
      let flag = true
      for (let j = i; j < i + time; j++) {
        if (security[j] > security[j + 1]) {
          flag = false
          break
        }
      }
      arr.push(security[i])
      flag && ans.push(i)
    }
  }
  return ans
}

// 类似于接雨水
var goodDaysToRobBank = function(security, time) {
  let left = 0; const leftArr = new Array(security.length).fill(0)
  for (let i = 0; i < security.length; i++) {
    if (i === 0 || security[i - 1] < security[i])
      left = 0
    else {
      left++
    }
    leftArr[i] = left
  }
  let right = 0; const rightArr = new Array(security.length).fill(0)
  for (let i = security.length - 1; i >= 0; i--) {
    if (i === security.length - 1 || security[i] > security[i + 1])
      right = 0
    else {
      right++
    }
    rightArr[i] = right
  }
  const ans = []
  for (let i = 0; i < security.length; i++) {
    if (leftArr[i] >= time && rightArr[i] >= time)
      ans.push(i)
  }

  return ans
}
