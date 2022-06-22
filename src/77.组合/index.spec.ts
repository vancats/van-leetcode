import { combine } from '.'

describe('77.组合', () => {
  it('示例一', () => {
    expect(combine(4, 2)).toStrictEqual([[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]])
  })

  it('示例二', () => {
    expect(combine(1, 1)).toStrictEqual([[1]])
  })
})
