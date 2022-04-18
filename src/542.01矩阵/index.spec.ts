import { updateMatrix } from '.'

describe('542.01矩阵', () => {
  it('示例一', () => {
    expect(updateMatrix([[0, 0, 0], [0, 1, 0], [0, 0, 0]])).toStrictEqual([[0, 0, 0], [0, 1, 0], [0, 0, 0]])
  })

  it('示例二', () => {
    expect(updateMatrix([[0, 0, 0], [0, 1, 0], [1, 1, 1]])).toStrictEqual([[0, 0, 0], [0, 1, 0], [1, 2, 1]])
  })

  it('示例三', () => {
    expect(updateMatrix([[0], [1]])).toStrictEqual([[0], [1]])
  })
})
