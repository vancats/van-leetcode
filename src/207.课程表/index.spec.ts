import { canFinish } from "."

describe('207.课程表', () => {
  it('示例一', () => {
    expect(canFinish(2, [[1, 0]])).toBe(true)
  })

  it('示例二', () => {
    expect(canFinish(2, [[1, 0], [0, 1]])).toBe(false)
  })
})