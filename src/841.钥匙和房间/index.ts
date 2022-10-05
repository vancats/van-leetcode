/**
 * @description: 时间复杂度 O(N) 空间复杂度 O(N)
 * @return {*}
 * @param {number} rooms
 */
export function canVisitAllRooms(rooms: number[][]): boolean {
  const n = rooms.length
  const arr: number[] = new Array(n).fill(0)
  arr[0] = 1
  const stack: number[] = []
  stack.push(...rooms[0])
  while (stack.length) {
    const val = stack.pop()!
    if (arr[val]) continue
    stack.push(...rooms[val])
    arr[val] = 1
  }
  return arr.every(item => item === 1)
}
