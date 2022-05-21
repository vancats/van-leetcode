import { findRightInterval } from '.'

describe('436.寻找右区间', () => {
  it('示例一', () => {
    expect(findRightInterval([[1, 2]])).toStrictEqual([-1])
  })

  it('示例二', () => {
    expect(findRightInterval([[3, 4], [2, 3], [1, 2]])).toStrictEqual([-1, 0, 1])
  })

  it('示例三', () => {
    expect(findRightInterval([[1, 4], [2, 3], [3, 4]])).toStrictEqual([-1, 2, -1])
  })
})
