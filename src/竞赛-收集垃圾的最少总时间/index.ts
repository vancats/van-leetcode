/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {string} garbage
 * @param {number} travel
 */
export function garbageCollection(garbage: string[], travel: number[]): number {
  let time = 0
  const prefix = new Array(travel.length + 1).fill(0)

  // 计算时间的前缀和
  for (let i = 1; i <= travel.length; i++)
    prefix[i] = prefix[i - 1] + travel[i - 1]

  const str = garbage.join('');
  ['M', 'G', 'P'].forEach(item => {
    // 找到最后出现的位置，这是要移动的距离
    const ind = findIndex(garbage, item)
    time += prefix[ind]
    // 找到出现的次数，这是要处理的时间
    time += findCnt(str, item)
  })
  return time
}

function findIndex(garbage: string[], type: string): number {
  for (let i = garbage.length - 1; i >= 0; i--)
    if (garbage[i].includes(type)) return i

  return 0
}

function findCnt(garbage: string, type: string): number {
  let cnt = 0
  for (let i = 0; i < garbage.length; i++) {
    if (garbage[i] === type)
      cnt++
  }
  return cnt
}
