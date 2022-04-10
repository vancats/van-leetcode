/*
 * @Author: Lqf
 * @Date: 2022-02-16 10:19:57
 * @LastEditors: Lqf
 * @LastEditTime: 2022-02-16 10:20:01
 * @Description: 我添加了修改
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSlidingWindow = function(nums, k) {
  // maxArr存放当前窗口内最大值的递减序列    窗口 [7,4,5,2,3] -> [7,5,3] maxArr
  const maxArr = []; const res = []
  for (let i = 0; i < nums.length; i++) {
    const cur = nums[i]
    // 如果maxArr末尾值大于当前值，弹出
    while (maxArr.length > 0 && cur > maxArr[maxArr.length - 1])
      maxArr.pop()

    // 推入当前值
    maxArr.push(cur)
    // 如果窗口长度超出，并且最左边的值等于窗口最大值，弹出该最大值
    if (i - k > -1) {
      if (nums[i - k] === maxArr[0])
        maxArr.shift()
    }
    // 窗口长度达到了k，往res推入值
    if (i - k >= -1)
      res.push(maxArr[0])
  }
  return res
}
