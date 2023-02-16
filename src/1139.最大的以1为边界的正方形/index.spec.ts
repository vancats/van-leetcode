import { largest1BorderedSquare } from '.'

describe('1139.最大的以1为边界的正方形', () => {
  it('示例一', () => {
    expect(largest1BorderedSquare([[1, 1, 1], [1, 0, 1], [1, 1, 1]])).toBe(9)
  })

  it('示例二', () => {
    expect(largest1BorderedSquare([[1, 1, 0, 0]])).toBe(1)
  })
})
