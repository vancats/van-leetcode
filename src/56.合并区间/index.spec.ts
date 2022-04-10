import { merge } from '.'

describe('56.合并区间', () => {
  it('示例一', () => {
    expect(merge([[1, 3], [2, 6], [8, 10], [15, 18]])).toStrictEqual([[1, 6], [8, 10], [15, 18]])
  })

  it('示例二', () => {
    expect(merge([[1, 4], [4, 5]])).toStrictEqual([[1, 5]])
  })
})
