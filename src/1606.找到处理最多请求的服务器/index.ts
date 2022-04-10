import { Heap } from '../../utils/Heap'

/**
 * @description: 待定
 * @return {*}
 * @param {number} k
 * @param {number} arrival
 * @param {number} load
 */
export function busiestServers(k: number, arrival: number[], load: number[]): number[] {
  let res: number[] = []
  // 存放次数
  const count: number[] = new Array(k).fill(0)
  // 存放结束时间和服务器编号
  const used = new Heap((a, b) => a[0] < b[0])
  // 存放可用的服务器
  const rest = new Heap((a, b) => a < b)

  // 初始化服务器
  for (let i = 0; i < k; i++) rest.push(i)

  for (let i = 0; i < arrival.length; i++) {
    // 弹出服务器
    while (used.size && used.top[0] <= arrival[i]) {
      const cur = used.pop()
      // 让可用服务器按当前到达坐标i模k排序，且保证坐标模k同余
      rest.push(i + ((cur[1] - i) % k + k) % k)
    }
    if (rest.size > 0) {
      const index = rest.pop() % k
      count[index]++
      used.push([arrival[i] + load[i], index])
    }
  }

  let max = 0
  for (let i = 0; i < k; i++) {
    if (count[i] > max) {
      max = count[i]
      res = [i]
    }
    else if (count[i] === max) {
      res.push(i)
    }
  }
  return res
}
