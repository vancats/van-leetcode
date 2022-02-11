/*
 * @Author: Lqf
 * @Date: 2022-02-11 10:16:27
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-11 10:45:13
 * @Description: 我添加了修改
 */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1, right = n
    while (left < right) {
      // 必须这种写法 (left+right) >> 1 错误
      let mid = left + ((right - left) >> 1)
      if (isBadVersion(mid)) {
        right = mid
      } else {
        left = mid + 1
      }
    }
    return left
  }
}