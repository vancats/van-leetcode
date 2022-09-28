/**
 * @description: 时间复杂度 O(N^2) 空间复杂度 O(N^2)
 * @return {*}
 * @param {number} apples
 * @param {number} days
 */
export function eatenApples(apples: number[], days: number[]): number {
  // 存储苹果过期日期和数量
  const arr: number[][] = []
  let i = 0
  let res = 0
  while (i < apples.length || arr.length) {
    // 如果苹果已过期，弹出
    while (arr.length && i >= arr[0][0]) arr.shift()
    const day = i + days[i]
    if (apples[i]) {
      let flag = true
      for (let j = 0; j < arr.length; j++) {
        // 如果有值，修改
        if (arr[j][0] === day) {
          arr[j][1] += apples[i]
          flag = false
          break
        }
        // 如果找到了大于的值，添加
        if (arr[j][0] > day) {
          arr.splice(j, 0, [day, apples[i]])
          flag = false
          break
        }
      }
      // 如果都比该日期小，添加到最后
      if (flag)
        arr.push([day, apples[i]])
    }
    // 如果当前有苹果，更新值
    if (arr.length) {
      arr[0][1]--
      res++
      if (!arr[0][1])
        arr.shift()
    }
    i++
  }
  return res
}
