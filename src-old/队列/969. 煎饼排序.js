/*
 * @Author: Lqf
 * @Date: 2022-02-15 18:04:08
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-16 09:34:45
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} arr
 * @return {number[]}
 */
const pancakeSort = function(arr) {
  let len = arr.length; const ans = []
  while (len > 1) {
    const ind = arr.indexOf(len)
    if (ind === len - 1) {
      len--
      continue
    }
    if (ind !== 0) {
      arr = reverseArr(arr, ind + 1)
      ans.push(ind + 1)
    }
    arr = reverseArr(arr, len)
    ans.push(len)
    len--
  }
  return ans
}

function reverseArr(arr, n) {
  return [...arr.slice(0, n).reverse(), ...arr.slice(n)]
}
