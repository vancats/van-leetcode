import { canVisitAllRooms } from '.'

describe('841.钥匙和房间', () => {
  it('示例一', () => {
    expect(canVisitAllRooms([[1], [2], [3], []])).toBe(true)
  })

  it('示例二', () => {
    expect(canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]])).toBe(false)
  })
})
