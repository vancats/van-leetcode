import { findOrder } from '.'

describe('210.课程表II', () => {
  it('示例一', () => {
    expect(findOrder(2, [[1, 0]])).toStrictEqual([0, 1])
  })

  it('示例二', () => {
    expect(findOrder(4, [[1, 0], [2, 0], [3, 1], [3, 2]])).toStrictEqual([0, 1, 2, 3])
  })

  it('示例三', () => {
    expect(findOrder(1, [])).toStrictEqual([0])
  })
})
