import { numberOfWeakCharacters } from "."

describe('1996.游戏中弱角色的数量', () => {
  it('示例一', () => {
    expect(numberOfWeakCharacters([[5, 5], [6, 3], [3, 6]])).toBe(0)
  })

  it('示例二', () => {
    expect(numberOfWeakCharacters([[2, 2], [3, 3]])).toBe(1)
  })

  it('示例三', () => {
    expect(numberOfWeakCharacters([[1, 5], [10, 4], [4, 3]])).toBe(1)
  })
})